# JAVA-PDF

## LibreOffice安装部署

[LibreOffice下载地址](https://downloadarchive.documentfoundation.org/libreoffice/old/)

安装libreoffice：
1. `sudo rz`：上传安装包
2. `sudo tar -zxvf LibreOffice_7.1.4.2_Linux_x86-64_rpm.tar.gz`：解压
3. `cd LibreOffice_7.1.4.2_Linux_x86-64_rpm/RPMS/`：进入此目录 
4. `sudo rpm -ivh *.rpm`：安装
5. `libreoffice7.1 --version`：查看是否安装成功

必须安装中文语言包支持，否则文件会乱码：
1. 将 window 的 `C:\Windows\Fonts` 中文语言包放到 `/usr/share/fonts/my_fonts`
2. 进入目录执行 `mkfontscale && mkfontdir && fc-cache -fv` 更新字体缓存
3. 不支持则安装指令 `yum install mkfontscale`
4. 查看 `fc-list :lang=zh` 是否安装成功
5. 测试 pdf 是否能正常转换，并查看文件是否乱码 `sudo libreoffice7.1 --headless --convert-to pdf --outdir /opt test.docx`

## PDF加水印

### 代码示例

```java
@Autowired
private LibreOfficeService libreOfficeService;
// fastdfs工具类
@Autowired
private FileUtil fileUtil;

public void downloadFile(String sourceFilePath, String sourceFileName, HttpServletResponse response) {
    try {
        //扩展
        String ext = FilenameUtils.getExtension(sourceFilePath);
        String pdfName = FilenameUtils.getBaseName(sourceFileName) + ".pdf";
        String pdfPath = null;
        //本身为PDF文件，则不用转换
        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {
            pdfPath = libreOfficeService.officeToPdfAndUpload(sourceFilePath, pdfName);
        }
        pdfPath = StrUtil.isNotEmpty(pdfPath) ? pdfPath : sourceFilePath;
        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), FilenameUtils.getExtension(pdfPath))) {
            throw new BusinessException("获取pdf上传地址失败");
        }
        byte[] fileByteArray = fileUtil.getFileByteArray(pdfPath);
        //设置相应类型application/octet-stream（注：application/octet-stream 为通用，一些其它的类型苹果浏览器下载内容可能为空）
        response.reset();
        response.setContentType("application/octet-stream");
        //设置头信息                 Content-Disposition为属性名  附件形式打开下载文件   指定名称  为 设定的fileName
        response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(pdfName, "UTF-8"));
        // 写入到流
        ServletOutputStream out = response.getOutputStream();
        out.write(addPdfWatermark(fileByteArray));
        out.close();
    } catch (Exception e) {
        log.error("pdf文件下载失败:{}", e.getMessage(), e);
        throw new SystemException(SystemExceptionEnum.SYSTEM_ERROR_GET_FILE_ERROR, e);
    }
}

public byte[] addPdfWatermark(byte[] file) {
    ShiroSessionUser user = AdminShiroUtil.getUser();
    String watermarkText = Convert.toStr(user.getId());
    // 使用 PDFBox 加载文档
    try (PDDocument document = PDDocument.load(file);
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()
    ) {
        PDFont font = PDType1Font.HELVETICA_BOLD;
        float fontSize = 15; // 水印字体大小
        float opacity = 0.5f; // 水印透明度
        // 计算水印的宽度
        float textWidth = font.getStringWidth(watermarkText) * fontSize / 1000;
        // 设置水印的位置，右下角（上偏移和左偏移一个字体大小）
        float y = fontSize;
        // 设置透明度只需设置一次
        PDExtendedGraphicsState graphicsState = new PDExtendedGraphicsState();
        graphicsState.setNonStrokingAlphaConstant(opacity);
        graphicsState.setStrokingAlphaConstant(opacity);
        // 遍历每一页并加水印
        for (PDPage page : document.getPages()) {
            PDRectangle mediaBox = page.getMediaBox();
            float x = mediaBox.getWidth() - textWidth - fontSize;
            addWatermarkToPage(document, page, watermarkText, font, fontSize, x, y, graphicsState);
        }
        // 将 PDF 内容保存到 ByteArrayOutputStream 中
        document.save(byteArrayOutputStream);
        // 返回字节数组
        return byteArrayOutputStream.toByteArray();
    } catch (IOException e) {
        throw new BusinessException("PDF转换失败", e);
    }
}

private void addWatermarkToPage(PDDocument document, PDPage page, String watermarkText, PDFont font,
                                float fontSize, float x, float y, PDExtendedGraphicsState graphicsState) throws IOException {
    // 使用 try-with-resources 自动关闭流
    try (PDPageContentStream contentStream = new PDPageContentStream(document, page, PDPageContentStream.AppendMode.APPEND, true, true)) {
        // 设置透明度
        contentStream.setGraphicsStateParameters(graphicsState);
        // 设置字体和大小
        contentStream.setFont(font, fontSize);
        // 绘制水印文字
        contentStream.beginText();
        contentStream.newLineAtOffset(x, y);
        contentStream.showText(watermarkText);
        contentStream.endText();
    }
}
```

## 转成PDF

### 配置示例

```yaml
# office配置
office:
  office-switch: true
  office-home: /opt/libreoffice7.1
  office-temp: ./files/libreOffice
```

```java
@Data
@Component
@ConfigurationProperties(prefix = "office")
public class OfficeProperties {
    /**
     * 此属性设置处理任务所允许的最长时间。如果任务的处理时间长于此超时，则此任务将中止，并处理下一个任务。
     */
    private Long taskExecutionTimeout = 300000L;

    /**
     * LibreOffice安装主目录
     */
    private String officeHome;

    /**
     * office 转换服务 task 超时时间，默认五分钟
     */
    private Long processTimeout = 300000L;

    /**
     * 此属性设置office进程在重新启动之前可以执行的最大任务数。0表示无限数量的任务（永远不会重新启动）
     */
    private int maxTasksPerProcess = 50;

    /**
     * office转换文件临时目录
     */
    private String officeTemp;

    /**
     * 是否删除office转换文件
     */
    private boolean deleteTempFile = true;
    /**
     * office开关
     */
    private boolean officeSwitch = false;

    /**
     * office转换服务的端口，默认开启两个进程
     */
    private String portNumbers = "2001,2002";

    /**
     * 限制页面
     */
    private String officePageRange = "false";

    /**
     * 水印
     */
    private String officeWatermark = "false";

    /**
     * 图片压缩
     */
    private String officeQuality = "80";

    /**
     * DPI
     */
    private String officeMaxImageResolution = "150";

    /**
     * 导出书签
     */
    private boolean officeExportBookmarks = true;

    /**
     * 批注作为PDF的注释
     */
    private boolean officeExportNotes = true;

    /**
     * 加密文档 生成的PDF文档 添加密码(密码为加密文档的密码)
     */
    private boolean officeDocumentOpenPasswords = true;

    /**
     * 加密文档的密码
     */
    private String filePassword;
}
```

### 代码示例

```java
// 读取配置
@Autowired
private OfficeProperties officeProperties;

public String officeToPdfAndUpload(String filePath, String fileName) {
    FileOutputStream fos = null;
    File file = null;
    try {
        String tempPath = officeProperties.getOfficeTemp() + File.separator + fileName;
        file = new File(tempPath);
        if (!file.getParentFile().exists() && !file.getParentFile().mkdirs()) {
            log.error("创建文件【{}】失败，请检查目录权限！", tempPath);
        }
        byte[] fileByte = officeToPdf(filePath);
        fos = new FileOutputStream(file);
        fos.write(fileByte, 0, fileByte.length);
        //转换成功则上传文件服务器
        String ext = FilenameUtils.getExtension(filePath);
        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {
            return fileUtil.uploadFile(file);
        }
    } catch (Exception e) {
        log.error("转换PDF并上传服务器失败：{}", e.getMessage(), e);
        throw new BusinessException("转换PDF并上传服务器失败");
    } finally {
        try {
            if (null != fos) {
                fos.close();
            }
            if (officeProperties.isDeleteTempFile() && file.exists()) {
                file.delete();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    return null;
}

public byte[] officeToPdf(String filePath) {
    byte[] sourceFileByte = fileUtil.getFileByteArray(filePath);
    String ext = FilenameUtils.getExtension(filePath);
    if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {
        return officeToPdf(sourceFileByte);
    }
    return sourceFileByte;
}
```


