## 	ENFC项目

```java
//人脸授权
ly_p11_device_jurd_topic -- 1门禁设备  6人脸设备
用户授权人脸
发送mqtt到common-jurd模块 , 然后下发到设备
发送给设备的人脸路径都是预览图片的路径
//人脸检测问题
人脸检测功能 , 如果需要使用 , 则必要的几个类要放指定目录下 -- com.uniubi.uface
//日志打印问题
e.printStackTrace() -- 换成log.error("错误类+错误信息",e)
//获取登录用户信息
LoginUser sysUser = (LoginUser) SecurityUtils.getSubject().getPrincipal() 
//请求左侧菜单栏
getUserPermissionByToken
//feign调用
通system一起启动的模块，服务名要为system的服务名
//格式化代码问题
格式化以后，代码的整体都变更，不便于查看哪里进行了修改
//SN生成License ：getNewLicense()方法
 @Test
 public void test1(){
     NewLicenseVo vo = new NewLicenseVo();
     vo.setSn("3E566DCE066484F168B3CD18D03521B5E7FBA8C23B5DF44E8E8A504C80D8C046");
     String license = getNewLicense(vo);
     System.out.println(license);
 }
//版本
enfc2.3.1  				----------  	定制瑞安门禁系统
enfc2.5.0_hqc_2.0 		 ---------- 	 定制华侨城门禁系统
enfc2.5.0_fyt , enfc-front2.5_fyt , dpidemicWechat2.5 ------ 福伊特园区门禁系统
//前端添加菜单
1.系统管理 -- 菜单管理 在对应的父菜单下添加需要的菜单 , 路径要对应前端的路径
2.系统管理 -- 角色管理 授权 需要的菜单权限即可
//测试服务器
192.168.15.76:ZXCvbn123
192.168.15.65:123456
192.168.15.147:123456
//开发者校验
isAccessAllowed()
ly_p17_api_register
ly_p17_devp_api
ly_p17_devp_user_api
ly_p17_api_uer
//涉及判断参数的业务
在最外层处理
//禅道版本
1.
base(基本框架,功能未实现)
alpha(初步开发完成版本)
beta(bug修复版本)
RC(基本无bug版本)
release(最终版本)
2. B后台 F前端
3. 版本管理需求
```

### 令令开门ENFC后台管理系统

## Saas项目

```sql
SaaS，是Software-as-a-Service的缩写名称，意思为软件即服务，即通过网络提供软件服务。
SaaS平台供应商将应用软件统一部署在自己的服务器上，客户可以根据工作实际需求，通过互联网向厂商定购所需的应用软件服务，按定购的服务多少和时间长短向厂商支付费用，并通过互联网获得Saas平台供应商提供的服务。
SaaS 应用软件有免费、付费和增值三种模式。付费通常为“全包”费用，囊括了通常的应用软件许可证费、软件维护费以及技术支持费，将其统一为每个用户的月度租用费。
```

### 全面风险管理系统