"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4748],{1287:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var t=n(4848),i=n(8453);const o={},a="JAVA-PDF",s={id:"java/JAVA-PDF",title:"JAVA-PDF",description:"LibreOffice\u5b89\u88c5\u90e8\u7f72",source:"@site/docs/java/JAVA-PDF.md",sourceDirName:"java",slug:"/java/JAVA-PDF",permalink:"/mhuahe.com/docs/java/JAVA-PDF",draft:!1,unlisted:!1,editUrl:"https://github.dev/mhuahe/mhuahe.com/blob/master-ts/docs/java/JAVA-PDF.md",tags:[],version:"current",lastUpdatedBy:"mhuahe",lastUpdatedAt:1730286254e3,frontMatter:{},sidebar:"java",previous:{title:"JAVA-oauth2\u6e90\u7801\u89e3\u8bfb",permalink:"/mhuahe.com/docs/java/JAVA-OAuth2-SourceCode"},next:{title:"JAVA-SQL\u62e6\u622a\u5668",permalink:"/mhuahe.com/docs/java/JAVA-SQL-Interceptor"}},l={},c=[{value:"LibreOffice\u5b89\u88c5\u90e8\u7f72",id:"libreoffice\u5b89\u88c5\u90e8\u7f72",level:2},{value:"PDF\u52a0\u6c34\u5370",id:"pdf\u52a0\u6c34\u5370",level:2},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b",level:3},{value:"\u8f6c\u6210PDF",id:"\u8f6c\u6210pdf",level:2},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",level:3},{value:"\u4ee3\u7801\u793a\u4f8b",id:"\u4ee3\u7801\u793a\u4f8b-1",level:3}];function f(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"java-pdf",children:"JAVA-PDF"})}),"\n",(0,t.jsx)(r.h2,{id:"libreoffice\u5b89\u88c5\u90e8\u7f72",children:"LibreOffice\u5b89\u88c5\u90e8\u7f72"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"https://downloadarchive.documentfoundation.org/libreoffice/old/",children:"LibreOffice\u4e0b\u8f7d\u5730\u5740"})}),"\n",(0,t.jsx)(r.p,{children:"\u5b89\u88c5libreoffice\uff1a"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"sudo rz"}),"\uff1a\u4e0a\u4f20\u5b89\u88c5\u5305"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"sudo tar -zxvf LibreOffice_7.1.4.2_Linux_x86-64_rpm.tar.gz"}),"\uff1a\u89e3\u538b"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"cd LibreOffice_7.1.4.2_Linux_x86-64_rpm/RPMS/"}),"\uff1a\u8fdb\u5165\u6b64\u76ee\u5f55"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"sudo rpm -ivh *.rpm"}),"\uff1a\u5b89\u88c5"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"libreoffice7.1 --version"}),"\uff1a\u67e5\u770b\u662f\u5426\u5b89\u88c5\u6210\u529f"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"\u5fc5\u987b\u5b89\u88c5\u4e2d\u6587\u8bed\u8a00\u5305\u652f\u6301\uff0c\u5426\u5219\u6587\u4ef6\u4f1a\u4e71\u7801\uff1a"}),"\n",(0,t.jsxs)(r.ol,{children:["\n",(0,t.jsxs)(r.li,{children:["\u5c06 window \u7684 ",(0,t.jsx)(r.code,{children:"C:\\Windows\\Fonts"})," \u4e2d\u6587\u8bed\u8a00\u5305\u653e\u5230 ",(0,t.jsx)(r.code,{children:"/usr/share/fonts/my_fonts"})]}),"\n",(0,t.jsxs)(r.li,{children:["\u8fdb\u5165\u76ee\u5f55\u6267\u884c ",(0,t.jsx)(r.code,{children:"mkfontscale && mkfontdir && fc-cache -fv"})," \u66f4\u65b0\u5b57\u4f53\u7f13\u5b58"]}),"\n",(0,t.jsxs)(r.li,{children:["\u4e0d\u652f\u6301\u5219\u5b89\u88c5\u6307\u4ee4 ",(0,t.jsx)(r.code,{children:"yum install mkfontscale"})]}),"\n",(0,t.jsxs)(r.li,{children:["\u67e5\u770b ",(0,t.jsx)(r.code,{children:"fc-list :lang=zh"})," \u662f\u5426\u5b89\u88c5\u6210\u529f"]}),"\n",(0,t.jsxs)(r.li,{children:["\u6d4b\u8bd5 pdf \u662f\u5426\u80fd\u6b63\u5e38\u8f6c\u6362\uff0c\u5e76\u67e5\u770b\u6587\u4ef6\u662f\u5426\u4e71\u7801 ",(0,t.jsx)(r.code,{children:"sudo libreoffice7.1 --headless --convert-to pdf --outdir /opt test.docx"})]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"pdf\u52a0\u6c34\u5370",children:"PDF\u52a0\u6c34\u5370"}),"\n",(0,t.jsx)(r.h3,{id:"\u4ee3\u7801\u793a\u4f8b",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Autowired\r\nprivate LibreOfficeService libreOfficeService;\r\n// fastdfs\u5de5\u5177\u7c7b\r\n@Autowired\r\nprivate FileUtil fileUtil;\r\n\r\npublic void downloadFile(String sourceFilePath, String sourceFileName, HttpServletResponse response) {\r\n    try {\r\n        //\u6269\u5c55\r\n        String ext = FilenameUtils.getExtension(sourceFilePath);\r\n        String pdfName = FilenameUtils.getBaseName(sourceFileName) + ".pdf";\r\n        String pdfPath = null;\r\n        //\u672c\u8eab\u4e3aPDF\u6587\u4ef6\uff0c\u5219\u4e0d\u7528\u8f6c\u6362\r\n        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {\r\n            pdfPath = libreOfficeService.officeToPdfAndUpload(sourceFilePath, pdfName);\r\n        }\r\n        pdfPath = StrUtil.isNotEmpty(pdfPath) ? pdfPath : sourceFilePath;\r\n        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), FilenameUtils.getExtension(pdfPath))) {\r\n            throw new BusinessException("\u83b7\u53d6pdf\u4e0a\u4f20\u5730\u5740\u5931\u8d25");\r\n        }\r\n        byte[] fileByteArray = fileUtil.getFileByteArray(pdfPath);\r\n        //\u8bbe\u7f6e\u76f8\u5e94\u7c7b\u578bapplication/octet-stream\uff08\u6ce8\uff1aapplication/octet-stream \u4e3a\u901a\u7528\uff0c\u4e00\u4e9b\u5176\u5b83\u7684\u7c7b\u578b\u82f9\u679c\u6d4f\u89c8\u5668\u4e0b\u8f7d\u5185\u5bb9\u53ef\u80fd\u4e3a\u7a7a\uff09\r\n        response.reset();\r\n        response.setContentType("application/octet-stream");\r\n        //\u8bbe\u7f6e\u5934\u4fe1\u606f                 Content-Disposition\u4e3a\u5c5e\u6027\u540d  \u9644\u4ef6\u5f62\u5f0f\u6253\u5f00\u4e0b\u8f7d\u6587\u4ef6   \u6307\u5b9a\u540d\u79f0  \u4e3a \u8bbe\u5b9a\u7684fileName\r\n        response.setHeader("Content-Disposition", "attachment;filename=" + URLEncoder.encode(pdfName, "UTF-8"));\r\n        // \u5199\u5165\u5230\u6d41\r\n        ServletOutputStream out = response.getOutputStream();\r\n        out.write(addPdfWatermark(fileByteArray));\r\n        out.close();\r\n    } catch (Exception e) {\r\n        log.error("pdf\u6587\u4ef6\u4e0b\u8f7d\u5931\u8d25:{}", e.getMessage(), e);\r\n        throw new SystemException(SystemExceptionEnum.SYSTEM_ERROR_GET_FILE_ERROR, e);\r\n    }\r\n}\r\n\r\npublic byte[] addPdfWatermark(byte[] file) {\r\n    ShiroSessionUser user = AdminShiroUtil.getUser();\r\n    String watermarkText = Convert.toStr(user.getId());\r\n    // \u4f7f\u7528 PDFBox \u52a0\u8f7d\u6587\u6863\r\n    try (PDDocument document = PDDocument.load(file);\r\n            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream()\r\n    ) {\r\n        PDFont font = PDType1Font.HELVETICA_BOLD;\r\n        float fontSize = 15; // \u6c34\u5370\u5b57\u4f53\u5927\u5c0f\r\n        float opacity = 0.5f; // \u6c34\u5370\u900f\u660e\u5ea6\r\n        // \u8ba1\u7b97\u6c34\u5370\u7684\u5bbd\u5ea6\r\n        float textWidth = font.getStringWidth(watermarkText) * fontSize / 1000;\r\n        // \u8bbe\u7f6e\u6c34\u5370\u7684\u4f4d\u7f6e\uff0c\u53f3\u4e0b\u89d2\uff08\u4e0a\u504f\u79fb\u548c\u5de6\u504f\u79fb\u4e00\u4e2a\u5b57\u4f53\u5927\u5c0f\uff09\r\n        float y = fontSize;\r\n        // \u8bbe\u7f6e\u900f\u660e\u5ea6\u53ea\u9700\u8bbe\u7f6e\u4e00\u6b21\r\n        PDExtendedGraphicsState graphicsState = new PDExtendedGraphicsState();\r\n        graphicsState.setNonStrokingAlphaConstant(opacity);\r\n        graphicsState.setStrokingAlphaConstant(opacity);\r\n        // \u904d\u5386\u6bcf\u4e00\u9875\u5e76\u52a0\u6c34\u5370\r\n        for (PDPage page : document.getPages()) {\r\n            PDRectangle mediaBox = page.getMediaBox();\r\n            float x = mediaBox.getWidth() - textWidth - fontSize;\r\n            addWatermarkToPage(document, page, watermarkText, font, fontSize, x, y, graphicsState);\r\n        }\r\n        // \u5c06 PDF \u5185\u5bb9\u4fdd\u5b58\u5230 ByteArrayOutputStream \u4e2d\r\n        document.save(byteArrayOutputStream);\r\n        // \u8fd4\u56de\u5b57\u8282\u6570\u7ec4\r\n        return byteArrayOutputStream.toByteArray();\r\n    } catch (IOException e) {\r\n        throw new BusinessException("PDF\u8f6c\u6362\u5931\u8d25", e);\r\n    }\r\n}\r\n\r\nprivate void addWatermarkToPage(PDDocument document, PDPage page, String watermarkText, PDFont font,\r\n                                float fontSize, float x, float y, PDExtendedGraphicsState graphicsState) throws IOException {\r\n    // \u4f7f\u7528 try-with-resources \u81ea\u52a8\u5173\u95ed\u6d41\r\n    try (PDPageContentStream contentStream = new PDPageContentStream(document, page, PDPageContentStream.AppendMode.APPEND, true, true)) {\r\n        // \u8bbe\u7f6e\u900f\u660e\u5ea6\r\n        contentStream.setGraphicsStateParameters(graphicsState);\r\n        // \u8bbe\u7f6e\u5b57\u4f53\u548c\u5927\u5c0f\r\n        contentStream.setFont(font, fontSize);\r\n        // \u7ed8\u5236\u6c34\u5370\u6587\u5b57\r\n        contentStream.beginText();\r\n        contentStream.newLineAtOffset(x, y);\r\n        contentStream.showText(watermarkText);\r\n        contentStream.endText();\r\n    }\r\n}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"\u8f6c\u6210pdf",children:"\u8f6c\u6210PDF"}),"\n",(0,t.jsx)(r.h3,{id:"\u914d\u7f6e\u793a\u4f8b",children:"\u914d\u7f6e\u793a\u4f8b"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-yaml",children:"# office\u914d\u7f6e\r\noffice:\r\n  office-switch: true\r\n  office-home: /opt/libreoffice7.1\r\n  office-temp: ./files/libreOffice\n"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'@Data\r\n@Component\r\n@ConfigurationProperties(prefix = "office")\r\npublic class OfficeProperties {\r\n    /**\r\n     * \u6b64\u5c5e\u6027\u8bbe\u7f6e\u5904\u7406\u4efb\u52a1\u6240\u5141\u8bb8\u7684\u6700\u957f\u65f6\u95f4\u3002\u5982\u679c\u4efb\u52a1\u7684\u5904\u7406\u65f6\u95f4\u957f\u4e8e\u6b64\u8d85\u65f6\uff0c\u5219\u6b64\u4efb\u52a1\u5c06\u4e2d\u6b62\uff0c\u5e76\u5904\u7406\u4e0b\u4e00\u4e2a\u4efb\u52a1\u3002\r\n     */\r\n    private Long taskExecutionTimeout = 300000L;\r\n\r\n    /**\r\n     * LibreOffice\u5b89\u88c5\u4e3b\u76ee\u5f55\r\n     */\r\n    private String officeHome;\r\n\r\n    /**\r\n     * office \u8f6c\u6362\u670d\u52a1 task \u8d85\u65f6\u65f6\u95f4\uff0c\u9ed8\u8ba4\u4e94\u5206\u949f\r\n     */\r\n    private Long processTimeout = 300000L;\r\n\r\n    /**\r\n     * \u6b64\u5c5e\u6027\u8bbe\u7f6eoffice\u8fdb\u7a0b\u5728\u91cd\u65b0\u542f\u52a8\u4e4b\u524d\u53ef\u4ee5\u6267\u884c\u7684\u6700\u5927\u4efb\u52a1\u6570\u30020\u8868\u793a\u65e0\u9650\u6570\u91cf\u7684\u4efb\u52a1\uff08\u6c38\u8fdc\u4e0d\u4f1a\u91cd\u65b0\u542f\u52a8\uff09\r\n     */\r\n    private int maxTasksPerProcess = 50;\r\n\r\n    /**\r\n     * office\u8f6c\u6362\u6587\u4ef6\u4e34\u65f6\u76ee\u5f55\r\n     */\r\n    private String officeTemp;\r\n\r\n    /**\r\n     * \u662f\u5426\u5220\u9664office\u8f6c\u6362\u6587\u4ef6\r\n     */\r\n    private boolean deleteTempFile = true;\r\n    /**\r\n     * office\u5f00\u5173\r\n     */\r\n    private boolean officeSwitch = false;\r\n\r\n    /**\r\n     * office\u8f6c\u6362\u670d\u52a1\u7684\u7aef\u53e3\uff0c\u9ed8\u8ba4\u5f00\u542f\u4e24\u4e2a\u8fdb\u7a0b\r\n     */\r\n    private String portNumbers = "2001,2002";\r\n\r\n    /**\r\n     * \u9650\u5236\u9875\u9762\r\n     */\r\n    private String officePageRange = "false";\r\n\r\n    /**\r\n     * \u6c34\u5370\r\n     */\r\n    private String officeWatermark = "false";\r\n\r\n    /**\r\n     * \u56fe\u7247\u538b\u7f29\r\n     */\r\n    private String officeQuality = "80";\r\n\r\n    /**\r\n     * DPI\r\n     */\r\n    private String officeMaxImageResolution = "150";\r\n\r\n    /**\r\n     * \u5bfc\u51fa\u4e66\u7b7e\r\n     */\r\n    private boolean officeExportBookmarks = true;\r\n\r\n    /**\r\n     * \u6279\u6ce8\u4f5c\u4e3aPDF\u7684\u6ce8\u91ca\r\n     */\r\n    private boolean officeExportNotes = true;\r\n\r\n    /**\r\n     * \u52a0\u5bc6\u6587\u6863 \u751f\u6210\u7684PDF\u6587\u6863 \u6dfb\u52a0\u5bc6\u7801(\u5bc6\u7801\u4e3a\u52a0\u5bc6\u6587\u6863\u7684\u5bc6\u7801)\r\n     */\r\n    private boolean officeDocumentOpenPasswords = true;\r\n\r\n    /**\r\n     * \u52a0\u5bc6\u6587\u6863\u7684\u5bc6\u7801\r\n     */\r\n    private String filePassword;\r\n}\n'})}),"\n",(0,t.jsx)(r.h3,{id:"\u4ee3\u7801\u793a\u4f8b-1",children:"\u4ee3\u7801\u793a\u4f8b"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-java",children:'// \u8bfb\u53d6\u914d\u7f6e\r\n@Autowired\r\nprivate OfficeProperties officeProperties;\r\n\r\npublic String officeToPdfAndUpload(String filePath, String fileName) {\r\n    FileOutputStream fos = null;\r\n    File file = null;\r\n    try {\r\n        String tempPath = officeProperties.getOfficeTemp() + File.separator + fileName;\r\n        file = new File(tempPath);\r\n        if (!file.getParentFile().exists() && !file.getParentFile().mkdirs()) {\r\n            log.error("\u521b\u5efa\u6587\u4ef6\u3010{}\u3011\u5931\u8d25\uff0c\u8bf7\u68c0\u67e5\u76ee\u5f55\u6743\u9650\uff01", tempPath);\r\n        }\r\n        byte[] fileByte = officeToPdf(filePath);\r\n        fos = new FileOutputStream(file);\r\n        fos.write(fileByte, 0, fileByte.length);\r\n        //\u8f6c\u6362\u6210\u529f\u5219\u4e0a\u4f20\u6587\u4ef6\u670d\u52a1\u5668\r\n        String ext = FilenameUtils.getExtension(filePath);\r\n        if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {\r\n            return fileUtil.uploadFile(file);\r\n        }\r\n    } catch (Exception e) {\r\n        log.error("\u8f6c\u6362PDF\u5e76\u4e0a\u4f20\u670d\u52a1\u5668\u5931\u8d25\uff1a{}", e.getMessage(), e);\r\n        throw new BusinessException("\u8f6c\u6362PDF\u5e76\u4e0a\u4f20\u670d\u52a1\u5668\u5931\u8d25");\r\n    } finally {\r\n        try {\r\n            if (null != fos) {\r\n                fos.close();\r\n            }\r\n            if (officeProperties.isDeleteTempFile() && file.exists()) {\r\n                file.delete();\r\n            }\r\n        } catch (IOException e) {\r\n            e.printStackTrace();\r\n        }\r\n    }\r\n    return null;\r\n}\r\n\r\npublic byte[] officeToPdf(String filePath) {\r\n    byte[] sourceFileByte = fileUtil.getFileByteArray(filePath);\r\n    String ext = FilenameUtils.getExtension(filePath);\r\n    if (!StrUtil.equalsIgnoreCase(DefaultDocumentFormatRegistry.PDF.getExtension(), ext)) {\r\n        return officeToPdf(sourceFileByte);\r\n    }\r\n    return sourceFileByte;\r\n}\n'})})]})}function d(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(f,{...e})}):f(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>s});var t=n(6540);const i={},o=t.createContext(i);function a(e){const r=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function s(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);