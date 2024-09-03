# JAVA-加密方式

### 别用MD5加密密码了

解释

> MD 算法有多个版本，包括 MD2、MD4、MD5 等，其中 MD5 是最常用的版本，它可以生成一个 128 位（16 字节）的哈希值。从安全性上说：MD5 > MD4 > MD2。除了这些版本，还有一些基于 MD4 或 MD5 改进的算法，如 RIPEMD、HAVAL 等。即使是最安全 MD 算法 MD5 也存在被破解的风险，攻击者可以通过暴力破解或彩虹表攻击等方式，找到与原始数据相同的哈希值，从而破解数据。
>
> 为了增加破解难度，通常可以选择加盐。盐（Salt）在密码学中，是指通过在密码任意固定位置插入特定的字符串，让哈希后的结果和使用原始密码的哈希结果不相符，这种过程称之为“加盐”。加盐之后就安全了吗？并不一定，这只是增加了破解难度，不代表无法破解。而且，MD5 算法本身就存在弱碰撞（Collision）问题，即多个不同的输入产生相同的 MD5 值。因此，不建议使用 MD5 加密密码，即使加盐也存在安全风险。

替换方案

> 为了增加安全性，可以使用**安全性较高的加密哈希算法+ Salt（盐）**（例如 SHA2、SHA3、SM3，更高的安全性更强的抗碰撞性）。建议每个用户的 Salt 值不同（最好对不同用户的密码随机生成不同的 Salt，Salt 库和密码库分离开），这样就没办法用彩虹表进行批量破解。不过，这不代表没有破解风险了（利用密码破解硬件，我们可以在一秒钟内进行数十亿次的哈希计算）。
>
> 安全性更高的一种方案是使用 **密钥派生算法（Key Derivation Function，简称 KDF，也称为密码哈希算法）**。相比其他加密哈希算法，KDF 具有一个独特属性——计算速度很慢，而且从设计上就使其计算速度难以提升，所以 KDF 也被称为 **慢哈希算法** 。这个慢相比于其带来的安全性来说是可以接受的，毕竟主要也是在登录时执行一次。

常见的 KDF 算法主要有（安全程度依次递增）：

[具体代码实现](https://docs.spring.io/spring-security/reference/features/authentication/password-storage.html)

> 1. PBKDF2：其核心是对 HMAC 进行多次迭代以增加破解难度。PBKDF2 对内存的要求较低，并不能抵抗密码破解硬件（如 GPU、ASIC、FPGA）攻击。这个 KDF 算法比较老了，目前已经不推荐使用。
> 2. Bcrypt：一种基于 Blowfish 加密算法的密码哈希算法，专门为密码加密而设计，安全性高于 PBKDF2。Bcrypt 对内存的要求较低，同样不能抵抗密码破解硬件攻击。
> 3. Scrypt：相比于 PBKDF2 和 Bcrypt，其占用的内存更多，安全性也要更高。它还可以通过调整内存和 CPU 的使用量来增加破解的难度。
> 4. Argon2：目前最强的密码 Hash 算法，在 2015 年赢得了密码 Hash 竞赛。和 Scrypt 一样，Argon2 同样需要大量的内存。二者综合使用加盐、多次迭代、大量消耗 CPU 时间和内存资源等手段，大大提升了对抗密码破解硬件的能力。

建议方案

> 对于绝大部分项目来说， Bcrypt 就足够了，虽然它的安全性比不上 Scrypt 和 Argon2，但综合起来性价比较高
>
> Bcrypt 采用了 salt（盐） 和 cost（成本） 两种机制，它可以有效地防止彩虹表攻击和暴力破解攻击，从而保证密码的安全性。加 salt 可以防止彩虹表攻击，也就是说，使用 Bcrypt 加密密码时已经包含了一个随机加盐的过程，不需要额外加盐了。
>
> cost 又称为工作因子，定义了哈希计算的复杂度。成本越高，计算所需的时间和资源就越多，这使得暴力破解攻击变得更加困难。实际项目中，可以根据系统的性能和安全需求调整 cost。
>
> Spring Security 提供的`BCryptPasswordEncoder` 工作因子范围在 4-31 ，默认是 10
>
> ```java
> 
>  /**
>   * @param strength the log rounds to use, between 4 and 31
>   */
>  public BCryptPasswordEncoder(int strength) {
>   this(strength, null);
>  }
> ```

### [MD5](https://blog.csdn.net/yb546822612/article/details/103953034)

```
1.MD5加密
加密后的位数分为16位和32位
16位实际为32位中取9-24
String md5_16 = md5_32.substring(8, 24);
Java 中 MD5 加密的结果默认是32位小写。
```

![](https://hayes-typora.oss-cn-shenzhen.aliyuncs.com/MD5-1.png)

```
1.MD5加密算法(经常使用MD5+salt作为用户密码加密或MD5加密后再使用MD5加密)
MD5的全称是Message-Digest Algorithm 5，MD5可以将任意长度的“字节串”变换成⼀个128bit的⼤整数，并且它是⼀个不可逆的字符串变换算法，换句话说是，即使你看到源程序和算法描述，也⽆法将⼀个MD5的值变换回原始的字符串，从数学原理上说，是因为
原始的字符串有⽆穷多个，这有点象不存在反函数的数学函数。
2004年，证实MD5算法无法防止碰撞（collision）(不同的值加密后生成相同的字符串)，因此不适用于安全性认证，如SSL公开密钥认证或是数字签名等用途。
```

```java
package org.jeecg.modules.p14.key;

import java.math.BigInteger;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.security.Security;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.crypto.Digest;
import org.bouncycastle.crypto.digests.MD2Digest;
import org.bouncycastle.crypto.digests.MD5Digest;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class MDUtil {

    /**
     * MD5加密，方式1
     * @param pwd
     * @return
     */
    public static String commonsCodecMd5(String pwd) {
        return DigestUtils.md5Hex(pwd.getBytes());
    }
    public static String commonsCodecMd2(String pwd) {
        return DigestUtils.md2Hex(pwd.getBytes());
    }

    /**
     * MD5加密，方式2
     * 
     * @param pwd
     * @return
     */
    public static String jdkMd5(String pwd) {
        byte[] message = null;
        message = pwd.getBytes();
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("MD5");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        byte[] encrypwd = md.digest(message);
        String md5code = new BigInteger(1, encrypwd).toString(16);
        for (int i = 0; i < 32 - md5code.length(); i++) {
            md5code = "0" + md5code;
        }
        return md5code;
    }
    
    public static String jdkMd2(String pwd) {
        byte[] message = null;
        message = pwd.getBytes();
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("md2");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        byte[] encrypwd = md.digest(message);
        String md5code = Hex.encodeHexString(encrypwd);
        for (int i = 0; i < 32 - md5code.length(); i++) {
            md5code = "0" + md5code;
        }
        return md5code;
    }
    
     /**
      * Bouncy Castle实现MD4加密 
      */
     public static String bouncyCastleMD4(String src) {
         /*通过这种方式给JDK动态添加一个provider,就可以通过这种方式获得JDK本身不支持的MD4了*/
         Security.addProvider(new BouncyCastleProvider());
         MessageDigest md = null;
         try {
            md = MessageDigest.getInstance("md4");
         } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
         }
         byte[] md4Bytes = md.digest(src.getBytes());
         return new String(org.bouncycastle.util.encoders.Hex.encode(md4Bytes));
     }
     
     /** 
      * Bouncy Castle实现MD5加密 
      */
     public static String bouncyCastleMD5(String src){
         Digest digest = new MD5Digest();
         digest.update(src.getBytes(), 0, src.getBytes().length);
         byte[]md5Bytes = new byte[digest.getDigestSize()];
         digest.doFinal(md5Bytes, 0);
         return new String(org.bouncycastle.util.encoders.Hex.encode(md5Bytes));
     }
     
     /** 
      * Bouncy Castle实现MD2加密 
      */
     public static String bouncyCastleMD2(String src){
         Digest digest = new MD2Digest();
         digest.update(src.getBytes(), 0, src.getBytes().length);
         byte[]md2Bytes = new byte[digest.getDigestSize()];
         digest.doFinal(md2Bytes, 0);
         return new String(org.bouncycastle.util.encoders.Hex.encode(md2Bytes));
     }

    /**
     *  可逆的加密算法
     * @param inStr
     * @return
     */
    public static String KL(String inStr) {
        char[] a = inStr.toCharArray();
        for (int i = 0; i < a.length; i++) {
            a[i] = (char) (a[i] ^ 't');
        }
        String s = new String(a);
        return s;
    }

    /**
     *  加密后解密
     * @param inStr
     * @return
     */
    public static String JM(String inStr) {
        char[] a = inStr.toCharArray();
        for (int i = 0; i < a.length; i++) {
            a[i] = (char) (a[i] ^ 't');
        }
        String k = new String(a);
        return k;
    }
}
```

```java
@Test
public void md5(){
	String str = "md5";
	//Java原生
	byte[] digest = null;
	try {
        MessageDigest md5 = MessageDigest.getInstance("md5");
        digest  = md5.digest(str.getBytes(StandardCharsets.UTF_8));
        //16是表示转换为16进制数
        String md5StrJava = new BigInteger(1, digest).toString(16);
        System.out.println(md5StrJava);
	} catch (NoSuchAlgorithmException e) {
        e.printStackTrace();
	}
	//spring自带工具类
	String md5StrSpring = DigestUtils.md5DigestAsHex(str.getBytes());
	System.out.println(md5StrSpring);
}
@Test
public void md() {
	String inStr = "000000";
	System.out.println("原始字符串："+inStr);
	System.out.println("MD2加密：" + MDUtil.jdkMd2(inStr));
	System.out.println("MD2加密：" + MDUtil.commonsCodecMd2(inStr));
	System.out.println("MD2加密：" + MDUtil.bouncyCastleMD2(inStr));
	//670b14728ad9902aecba32e22fa4f6bd  32位 
	System.out.println("MD4加密：" + MDUtil.bouncyCastleMD4(inStr));
	//bf85aaf547303397450fbc8ede0ec3a5  32位 
	System.out.println("MD5加密：" + MDUtil.jdkMd5(inStr));
	System.out.println("MD5加密：" + MDUtil.commonsCodecMd5(inStr));
	System.out.println("MD5加密：" + MDUtil.bouncyCastleMD5(inStr));
	//670b14728ad9902aecba32e22fa4f6bd  32位
	String encrypMode = MDUtil.jdkMd5(inStr);
	System.out.println("MD5后再加密：" + MDUtil.KL(encrypMode));
	System.out.println("解密为MD5后的：" + MDUtil.JM(MDUtil.KL(encrypMode)));
}
```

### DES

```
2. DES加密算法--3DES--AES
DES全称为Data Encryption Standard，即数据加密标准，是⼀种使⽤密钥加密的块算法， DES算法的⼊⼝参数有三个：Key、Data、Mode。
Key为7个字节共56位,是DES算法的⼯作密钥。
Data为8个字节64位，是要被加密或被解密的数据。
Mode为DES的工作方式,有两种:加密或解密。
```

```java
package org.jeecg.modules.p14.key;

import javax.crypto.Cipher;
import javax.crypto.CipherInputStream;
import javax.crypto.CipherOutputStream;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESKeySpec;
import javax.crypto.spec.IvParameterSpec;
import java.io.*;
import java.security.Key;
import java.util.Base64;

public class DESUtil {
 
    /**
     * 偏移变量，固定占8位字节
     */
    private final static String IV_PARAMETER = "12345678";
    /**
     * 密钥算法
     */
    private static final String ALGORITHM = "DES";
    /**
     * 加密/解密算法-工作模式-填充模式
     */
    private static final String CIPHER_ALGORITHM = "DES/CBC/PKCS5Padding";
    /**
     * 默认编码
     */
    private static final String CHARSET = "utf-8";
 
    /**
     * 生成key
     *
     * @param password
     * @return
     * @throws Exception
     */
    private static Key generateKey(String password) throws Exception {
        DESKeySpec dks = new DESKeySpec(password.getBytes(CHARSET));
        SecretKeyFactory keyFactory = SecretKeyFactory.getInstance(ALGORITHM);
        return keyFactory.generateSecret(dks);
    }
 
 
    /**
     * DES加密字符串
     *
     * @param password 加密密码，长度不能够小于8位
     * @param data 待加密字符串
     * @return 加密后内容
     */
    public static String encrypt(String password, String data) {
        if (password== null || password.length() < 8) {
            throw new RuntimeException("加密失败，key不能小于8位");
        }
        if (data == null) {
            return null;
        }
        try {
            Key secretKey = generateKey(password);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            IvParameterSpec iv = new IvParameterSpec(IV_PARAMETER.getBytes(CHARSET));
            cipher.init(Cipher.ENCRYPT_MODE, secretKey, iv);
            byte[] bytes = cipher.doFinal(data.getBytes(CHARSET));
 
            //JDK1.8及以上可直接使用Base64，JDK1.7及以下可以使用BASE64Encoder
            //Android平台可以使用android.util.Base64
            return new String(Base64.getEncoder().encode(bytes));
 
        } catch (Exception e) {
            e.printStackTrace();
            return data;
        }
    }
 
    /**
     * DES解密字符串
     *
     * @param password 解密密码，长度不能够小于8位
     * @param data 待解密字符串
     * @return 解密后内容
     */
    public static String decrypt(String password, String data) {
        if (password== null || password.length() < 8) {
            throw new RuntimeException("加密失败，key不能小于8位");
        }
        if (data == null) {
            return null;
        }
        try {
            Key secretKey = generateKey(password);
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            IvParameterSpec iv = new IvParameterSpec(IV_PARAMETER.getBytes(CHARSET));
            cipher.init(Cipher.DECRYPT_MODE, secretKey, iv);
            return new String(cipher.doFinal(Base64.getDecoder().decode(data.getBytes(CHARSET))), CHARSET);
        } catch (Exception e) {
            e.printStackTrace();
            return data;
        }
    }
 
    /**
     * DES加密文件
     *
     * @param srcFile  待加密的文件
     * @param destFile 加密后存放的文件路径
     * @return 加密后的文件路径
     */
    public static String encryptFile(String password, String srcFile, String destFile) {
 
        if (password== null || password.length() < 8) {
            throw new RuntimeException("加密失败，key不能小于8位");
        }
        try {
            IvParameterSpec iv = new IvParameterSpec(IV_PARAMETER.getBytes(CHARSET));
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            cipher.init(Cipher.ENCRYPT_MODE, generateKey(password), iv);
            InputStream is = new FileInputStream(srcFile);
            OutputStream out = new FileOutputStream(destFile);
            CipherInputStream cis = new CipherInputStream(is, cipher);
            byte[] buffer = new byte[1024];
            int r;
            while ((r = cis.read(buffer)) > 0) {
                out.write(buffer, 0, r);
            }
            cis.close();
            is.close();
            out.close();
            return destFile;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /**
     * DES解密文件
     *
     * @param srcFile  已加密的文件
     * @param destFile 解密后存放的文件路径
     * @return 解密后的文件路径
     */
    public static String decryptFile(String password, String srcFile, String destFile) {
        if (password== null || password.length() < 8) {
            throw new RuntimeException("加密失败，key不能小于8位");
        }
        try {
            File file = new File(destFile);
            if (!file.exists()) {
                file.getParentFile().mkdirs();
                file.createNewFile();
            }
            IvParameterSpec iv = new IvParameterSpec(IV_PARAMETER.getBytes(CHARSET));
            Cipher cipher = Cipher.getInstance(CIPHER_ALGORITHM);
            cipher.init(Cipher.DECRYPT_MODE, generateKey(password), iv);
            InputStream is = new FileInputStream(srcFile);
            OutputStream out = new FileOutputStream(destFile);
            CipherOutputStream cos = new CipherOutputStream(out, cipher);
            byte[] buffer = new byte[1024];
            int r;
            while ((r = is.read(buffer)) >= 0) {
                cos.write(buffer, 0, r);
            }
            cos.close();
            is.close();
            out.close();
            return destFile;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
}
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;

import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class SecurityDES {
    
    public static String DES_MODE_JDK = "jdk";
    public static String DES_MODE_BC = "bouncyCastle";
    private Key key;

    //单例模式
    private static SecurityDES securityDES;
    public static SecurityDES getInstance(String password, String succurityMode) {
        if(securityDES == null) {
            securityDES = new SecurityDES(password, succurityMode);
        }
        return securityDES;
    }
    
    private SecurityDES(String password, String succurityMode)  {
        try{
            KeyGenerator generator;
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            if(StringUtils.isNotBlank(succurityMode) && StringUtils.equals(DES_MODE_BC, succurityMode)) {
                Security.addProvider(new BouncyCastleProvider());//增加provider
                generator = KeyGenerator.getInstance("DES", "BC");
                generator.init(56, secureRandom);
                generator.getProvider();
            }else {
                generator = KeyGenerator.getInstance("DES");
                generator.init(56, secureRandom);
            }
            key = generator.generateKey();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public byte[] encrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            return cipher.doFinal(array);
        } catch (Exception e) { 
            e.printStackTrace();
        }
        return null;
    }

    public byte[] decrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("DES/ECB/PKCS5Padding");
            cipher.init(Cipher.DECRYPT_MODE, key);
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
}
```

```java
@Test
public void des() {
	String src = "面向对象编程，object-oriented！@#*5"; // 需要加密的原始字符串
	String password = "123456";
	SecurityDES securityJdkDES = SecurityDES.getInstance(password, SecurityDES.DES_MODE_JDK);
	byte[] encodeJdkDES = securityJdkDES.encrypt(src.getBytes());
	System.out.println("JDK DES加密：" + Base64.getEncoder().encode(encodeJdkDES));
	byte[] decodeJdkDES = securityJdkDES.decrypt(encodeJdkDES);
	System.out.println("JDK DES解密：" + new String(decodeJdkDES));
	SecurityDES securityBcDES = SecurityDES.getInstance(password, SecurityDES.DES_MODE_BC);
	byte[] encodeBcDES = securityBcDES.encrypt(src.getBytes());
	System.out.println("bouncyCastle DES加密：" + Base64.getEncoder().encode(encodeBcDES));
	byte[] decodeBcDES = securityBcDES.decrypt(encodeBcDES);
	System.out.println("bouncyCastle DES解密：" + new String(decodeBcDES));
}
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.DESedeKeySpec;
import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class SecurityDES3 {
    
    public static String DES3_MODE_JDK = "jdk";
    public static String DES3_MODE_BC = "bouncyCastle";
    private Key key;
    
    //单例模式
    private static SecurityDES3 securityDES3;
    public static SecurityDES3 getInstance(String password, String succurityMode) {
        if(securityDES3 == null) {
            securityDES3 = new SecurityDES3(password, succurityMode);
        }
        return securityDES3;
    }
    
    private SecurityDES3(String password, String succurityMode)  {
        try{
            //1.生成key
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            KeyGenerator keyGenerator;
            if(StringUtils.isNotBlank(succurityMode) && StringUtils.equals(DES3_MODE_BC, succurityMode)) {
                 Security.addProvider(new BouncyCastleProvider());
                 keyGenerator = KeyGenerator.getInstance("desede", "BC");
            }else {
                keyGenerator = KeyGenerator.getInstance("desede");
            }
            keyGenerator.init(168, secureRandom);//初始化key的长度，只能是128，
            SecretKey secretKey = keyGenerator.generateKey();//生成key
            byte[] keyBytes = secretKey.getEncoded();//得到key的字节数组
            //2.key的转换
            DESedeKeySpec deSedeKeySpec = new DESedeKeySpec(keyBytes);
            SecretKeyFactory factory = SecretKeyFactory.getInstance("desede");//秘密密钥工厂
            key = factory.generateSecret(deSedeKeySpec);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public byte[] encrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("desede/ECB/PKCS5Padding");//加解密方式+工作模式+填充方式
            cipher.init(Cipher.ENCRYPT_MODE, key);//以加密模式初始化
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
    
    public byte[] decrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("desede/ECB/PKCS5Padding");//加解密方式+工作模式+填充方式
            cipher.init(Cipher.DECRYPT_MODE, key);
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
}
```

```java
@Test
public void des3() {
	String src = "面向对象编程，object-oriented！@#*5"; // 需要加密的原始字符串
	String password = "123456";
	SecurityDES3 securityJdkDES3 = SecurityDES3.getInstance(password, SecurityDES3.DES3_MODE_JDK);
	byte[] encodeJdkDES3 = securityJdkDES3.encrypt(src.getBytes());
	System.out.println("JDK DES3加密：" + Base64.getEncoder().encode(encodeJdkDES3));
	byte[] decodeJdkDES3 = securityJdkDES3.decrypt(encodeJdkDES3);
	System.out.println("JDK DES3解密：" + new String(decodeJdkDES3));
	SecurityDES3 securityBcDES3 = SecurityDES3.getInstance(password, SecurityDES3.DES3_MODE_BC);
	byte[] encodeBcDES3 = securityBcDES3.encrypt(src.getBytes());
	System.out.println("bouncyCastle DES3加密：" + Base64.getEncoder().encode(encodeBcDES3));
	byte[] decodeBcDES3 = securityBcDES3.decrypt(encodeBcDES3);
	System.out.println("bouncyCastle DES3解密：" + new String(decodeBcDES3));
}
```

### RSA

```
3. RSA加密算法
RSA是⽬前最有影响⼒的公钥加密算法，它能够抵抗到⽬前为⽌已知的绝⼤多数密码攻击，已被ISO推荐为公钥数据加密标准。RSA是被研究得最⼴泛的公钥算法，从提出到现在，经历了各种攻击的考验，逐渐为⼈们接受，普遍认为是⽬前最优秀的公钥⽅案之⼀。
```

```java
package org.jeecg.modules.p14.key;

import sun.misc.BASE64Decoder;
import sun.misc.BASE64Encoder;

import javax.crypto.BadPaddingException;
import javax.crypto.Cipher;
import javax.crypto.IllegalBlockSizeException;
import javax.crypto.NoSuchPaddingException;
import java.io.IOException;
import java.security.*;

/**
 * @title: RSAUtil
 * @Author hmh
 * @Date: 2022/7/4 16:06
 * @Version 1.0
 */
public class RSAUtil {
    
    public static KeyPair keyPairGenerator(){
        KeyPair keyPair = null;
        try {
            //使用RSA算法获得密钥对生成器对象keyPairGenerator
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            //设置密钥长度为1024
            keyPairGenerator.initialize(1024);
            //生成密钥对
            keyPair = keyPairGenerator.generateKeyPair();
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return keyPair;
    }

    /**
     * 公钥加密
     * @param password 加密数据
     * @param publicKey 公钥
     * @return 加密后数据
     */
    public static String encrypt(String password, PublicKey publicKey){
        byte[] secret = new byte[0];
        try {
            //获取一个加密算法为RSA的加解密器对象cipher。
            Cipher cipher = Cipher.getInstance("RSA");
            //设置为加密模式,并将公钥给cipher。
            cipher.init(Cipher.ENCRYPT_MODE, publicKey);
            //获得密文
            secret = cipher.doFinal(password.getBytes());
        } catch (NoSuchAlgorithmException | NoSuchPaddingException | InvalidKeyException | IllegalBlockSizeException | BadPaddingException e) {
            e.printStackTrace();
        }
        //进行Base64编码并返回
        return new BASE64Encoder().encode(secret);
    }

    /**
     * 私钥解密
     * @param password 解密数据
     * @param privateKey 私钥
     * @return 解密后的数据
     */
    public static String decrypt(String password, PrivateKey privateKey){
        byte[] b = new byte[0];
        try {
            Cipher cipher = Cipher.getInstance("RSA");
            //传递私钥，设置为解密模式。
            cipher.init(Cipher.DECRYPT_MODE, privateKey);
            //解密器解密由Base64解码后的密文,获得明文字节数组
            b = cipher.doFinal(new BASE64Decoder().decodeBuffer(password));
        } catch (NoSuchAlgorithmException | NoSuchPaddingException | IllegalBlockSizeException | BadPaddingException | IOException | InvalidKeyException e) {
            e.printStackTrace();
        }
        //转换成字符串
        return new String(b);
    }
}
```

```java
@Test
public void rsa() {
	KeyPair keyPair = RSAUtil.keyPairGenerator();
	PrivateKey privateKey = keyPair.getPrivate();
	PublicKey publicKey = keyPair.getPublic();
	System.out.println(RSAUtil.encrypt("rsa", publicKey));
	System.out.println(RSAUtil.decrypt(RSAUtil.encrypt("rsa", publicKey), privateKey));
}
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

public class DigitalSignRSA {
    //公钥
    private static final String PUBLIC_KEY = "RSAPublicKey";
    //私钥
    private static final String PRIVATE_KEY = "RSAPrivateKey";
 
    /** 初始化密钥对
     * @return Map 密钥对Map
     * @throws Exception
     */
    public static Map<String, Object> initKey() {
        try {
            //实例化密钥对生成器
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("RSA");
            // 初始化密钥对生成器，密钥大小为96-1024位
            keyPairGenerator.initialize(512, new SecureRandom());
            //生成密钥对
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //公钥
            RSAPublicKey publicKey = (RSAPublicKey) keyPair.getPublic();
            //私钥
            RSAPrivateKey privateKey = (RSAPrivateKey) keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, publicKey);
            keyMap.put(PRIVATE_KEY, privateKey);
            return keyMap;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 执行数字签名【私钥签名】
     * @param data 待加密数据
     * @param privKey  私钥
     * @return byte[] 加密数据
     * @throws Exception
     */
    public static byte[] digitalSign(byte[] data, byte[] privKey) {
        try {
            PrivateKey privateKey = (PrivateKey) KeyFactory.getInstance("RSA")
                    .generatePrivate(new PKCS8EncodedKeySpec(privKey));
            Signature signature = Signature.getInstance("MD5WithRSA");
            signature.initSign(privateKey);
            signature.update(data);
            return signature.sign();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /** 验证签名【公钥验证】
     * @param data 待解密数据
     * @param pubKey  公钥
     * @return byte[] 解密数据
     * @throws Exception
     */
    public static boolean signVerify(byte[] data, byte[] rsaData, byte[] pubKey) {
        try {
            PublicKey publicKey = (PublicKey) KeyFactory.getInstance("RSA")
                    .generatePublic(new X509EncodedKeySpec(pubKey));
            Signature signature = Signature.getInstance("MD5WithRSA");
            signature.initVerify(publicKey);
            signature.update(data);
            return signature.verify(rsaData);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return false;
    }
 
    /** 取得私钥
     * @param keyMap 密钥Map
     * @return byte[] 私钥
     * @throws Exception
     */
    public static byte[] getPrivateKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return key.getEncoded();
    }
 
    /** 取得公钥
     * @param keyMap 密钥Map
     * @return byte[] 公钥
     * @throws Exception
     */
    public static byte[] getPublicKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return key.getEncoded();
    }
}
```

```java
@Test
public void rsa() {
	//公钥
	byte[] publicKey;
	//私钥
	byte[] privateKey;
	//初始化密钥
	//生成密钥对
	Map<String, Object> keyMap = DigitalSignRSA.initKey();
	publicKey = DigitalSignRSA.getPublicKey(keyMap);
	privateKey = DigitalSignRSA.getPrivateKey(keyMap);
	System.out.println("RSA公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKey));
	System.out.println("RSA私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKey));
	System.out.println();
	String msgA2B = "What can I do for you?";
	//执行数字签名【私钥签名】
	byte[] encodeMsgA2B = DigitalSignRSA.digitalSign(msgA2B.getBytes(), privateKey);
	System.out.println("JDK RSA签名：:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encodeMsgA2B));
	//验证签名【公钥验证】
	boolean bool = DigitalSignRSA.signVerify(msgA2B.getBytes(), encodeMsgA2B, publicKey);
	System.out.println("数字签名是否有效？:\n" + bool);
}
```

### IDEA

```
4.IDEA加密算法
IDEA（International Data Encryption Algorithm）国际数据加密算法：使⽤ 128 位密钥提供⾮常强的安全性。
```

### DSA

```
5. DSA加密算法
DSA（Digital Signature Algorithm）：数字签名算法，是⼀种标准的 DSS（数字签名标准）。只能用于签名，不能用于加解密
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.interfaces.DSAPrivateKey;
import java.security.interfaces.DSAPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

public class DSAUtil {
    //公钥
    private static final String PUBLIC_KEY = "DSAPublicKey";
    //私钥
    private static final String PRIVATE_KEY = "DSAPrivateKey";
 
    /** 初始化密钥对
     * @return Map 密钥对Map
     * @throws Exception
     */
    public static Map<String, Object> initKey() {
        try {
            //实例化密钥对生成器
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("DSA");
            // 初始化密钥对生成器，密钥大小为96-1024位
            keyPairGenerator.initialize(512, new SecureRandom());
            //生成密钥对
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //公钥
            DSAPublicKey publicKey = (DSAPublicKey) keyPair.getPublic();
            //私钥
            DSAPrivateKey privateKey = (DSAPrivateKey) keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, publicKey);
            keyMap.put(PRIVATE_KEY, privateKey);
            return keyMap;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 执行数字签名【私钥签名】
     * @param data 待加密数据
     * @param privKey  私钥
     * @return byte[] 加密数据
     * @throws Exception
     */
    public static byte[] digitalSign(byte[] data, byte[] privKey) {
        try {
            PrivateKey privateKey = (PrivateKey) KeyFactory.getInstance("DSA")
                    .generatePrivate(new PKCS8EncodedKeySpec(privKey));
            Signature signature = Signature.getInstance("SHA1WithDSA");
            signature.initSign(privateKey);
            signature.update(data);
            return signature.sign();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /** 验证签名【公钥验证】
     * @param data 待解密数据
     * @param pubKey  公钥
     * @return byte[] 解密数据
     * @throws Exception
     */
    public static boolean signVerify(byte[] data, byte[] rsaData, byte[] pubKey) {
        try {
            PublicKey publicKey = (PublicKey) KeyFactory.getInstance("DSA")
                    .generatePublic(new X509EncodedKeySpec(pubKey));
            Signature signature = Signature.getInstance("SHA1WithDSA");
            signature.initVerify(publicKey);
            signature.update(data);
            return signature.verify(rsaData);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return false;
    }
 
    /** 取得私钥
     * @param keyMap 密钥Map
     * @return byte[] 私钥
     * @throws Exception
     */
    public static byte[] getPrivateKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return key.getEncoded();
    }
 
    /** 取得公钥
     * @param keyMap 密钥Map
     * @return byte[] 公钥
     * @throws Exception
     */
    public static byte[] getPublicKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return key.getEncoded();
    }
}
```

```java
@Test
public void dsa() {
	//公钥
	byte[] publicKey;
	//私钥
	byte[] privateKey;
	//初始化密钥
	//生成密钥对
	Map<String, Object> keyMap = DSAUtil.initKey();
	publicKey = DSAUtil.getPublicKey(keyMap);
	privateKey = DSAUtil.getPrivateKey(keyMap);
	System.out.println("DSA公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKey));
	System.out.println("DSA私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKey));
	System.out.println();
	String msgA2B = "What can I do for you?";
	//执行数字签名【私钥签名】
	byte[] encodeMsgA2B = DSAUtil.digitalSign(msgA2B.getBytes(), privateKey);
	System.out.println("JDK DSA签名：:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encodeMsgA2B));
	//验证签名【公钥验证】
	boolean bool = DSAUtil.signVerify(msgA2B.getBytes(), encodeMsgA2B, publicKey);
	System.out.println("数字签名是否有效？:\n" + bool);
}
```

### AES

```
6.AES加密算法
AES加密算法⼜称Rijndael加密法，⽬前已经被多⽅分析且⼴为全世界所使⽤。经过五年发展，AES加密算法已然成为对称密钥加密中最流行的算法之⼀。
问题：
(1) Illegal key size or default parameters：
需要更改jce，下载地址
http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-429243.html
更换目录jar：
#{jdk}\jre\lib\security
(2)Jurisdiction policy files are not signed by trusted signers!
jce版本不对，对应jdk版本下载正确的jce
```

```java
package org.jeecg.modules.p14.key;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;

import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.binary.Base64;
import org.apache.commons.codec.binary.Hex;

import java.security.Security;
import java.util.Locale;

/**
 * @author ：smallkinghjm
 * @description：TODO
 * @date ：2022/3/2 11:20
 */
@Slf4j
public class AESUtil {

    /**
     * AES加密
     *
     * @param content 明文
     * @param key     秘钥
     * @return
     * @throws Exception
     */
    public static String encrypt(String content, String key) throws Exception {
        // 将返回的加密过的 byte[] 转换成Base64编码字符串 ！！！！很关键
        return base64ToString(AES_ECB_Encrypt(content.getBytes(), key.getBytes()));
    }

    /**
     * AES解密
     *
     * @param content Base64编码的密文
     * @param key     秘钥
     * @return
     * @throws Exception
     */
    public static String decrypt(String content, String key) {
        // stringToBase64() 将 Base64编码的字符串转换成 byte[] !!!与base64ToString(）配套使用
        try {
            byte[] base64 = stringToBase64(content);
            byte[] bytes = AES_ECB_Decrypt(base64, key.getBytes());
            String result = new String(bytes);
            return result.replaceAll("\"","");
        } catch (Exception e) {
            log.info("AES解密出错！！！");
            e.printStackTrace();
        }

        return null;
    }

    public static byte[] AES_ECB_Encrypt(byte[] content, byte[] keyBytes) {
        try {
            SecretKeySpec key = new SecretKeySpec(keyBytes, "AES");
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS7Padding");
            cipher.init(Cipher.ENCRYPT_MODE, key);
            byte[] result = cipher.doFinal(content);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    public static byte[] AES_ECB_Decrypt(byte[] content, byte[] keyBytes) {
        try {
            SecretKeySpec key = new SecretKeySpec(keyBytes, "AES");
            Security.addProvider(new org.bouncycastle.jce.provider.BouncyCastleProvider());
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS7Padding");
            cipher.init(Cipher.DECRYPT_MODE, key);
            byte[] result = cipher.doFinal(content);
            return result;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }

    /**
     * 字符串装换成 Base64
     */

    public static byte[] stringToBase64(String key) throws Exception {
        return Base64.decodeBase64(key.getBytes());
    }

    /**
     * Base64装换成字符串
     */
    public static String base64ToString(byte[] key) throws Exception {
        return new Base64().encodeToString(key);
    }
}
```

```java
@Test
public void aes() throws Exception {
	String key = "5F6B2AK33DZE20A05E74C231B47AC8F6";
	String content = "smallkinghjm_2022";//明文
	String encrypt = AESUtil.encrypt(content, key);
	System.out.println("加密：" + encrypt);
	String decrypt = AESUtil.decrypt(encrypt, key);
	System.out.println("解密："+decrypt);
}
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;

import javax.crypto.Cipher;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class SecurityAES {
    
    public static String AES_MODE_JDK = "jdk";
    public static String AES_MODE_BC = "bouncyCastle";
    private Key key;
    
    //单例模式
    private static SecurityAES securityAES;
    public static SecurityAES getInstance(String password, String succurityMode) {
        if(securityAES == null) {
            securityAES = new SecurityAES(password, succurityMode);
        }
        return securityAES;
    }
    
    private SecurityAES(String password, String succurityMode)  {
        try{
            //1.生成key
            SecureRandom secureRandom = SecureRandom.getInstance("SHA1PRNG");
            secureRandom.setSeed(password.getBytes());
            KeyGenerator keyGenerator;
            if(StringUtils.isNotBlank(succurityMode) && StringUtils.equals(AES_MODE_BC, succurityMode)) {
                 Security.addProvider(new BouncyCastleProvider());
                 keyGenerator = KeyGenerator.getInstance("aes", "BC");
            }else {
                keyGenerator = KeyGenerator.getInstance("aes");
            }
            keyGenerator.init(128, secureRandom);//初始化key的长度，只能是128，
            SecretKey secretKey = keyGenerator.generateKey();//生成key
            byte[] keyBytes = secretKey.getEncoded();//得到key的字节数组
            //2.key的转换
            key = new SecretKeySpec(keyBytes, "aes");
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public byte[] encrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");//加解密方式+工作模式+填充方式
            cipher.init(Cipher.ENCRYPT_MODE, key);//以加密模式初始化
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
    
    public byte[] decrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("AES/ECB/PKCS5Padding");//加解密方式+工作模式+填充方式
            cipher.init(Cipher.DECRYPT_MODE, key);
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
}
```

```java
@Test
public void aes() {
	String src = "面向对象编程，object-oriented！@#*5"; // 需要加密的原始字符串
	String password = "123456";
	SecurityAES securityJdkAES = SecurityAES.getInstance(password, SecurityAES.AES_MODE_JDK);
	byte[] encodeJdkAES = securityJdkAES.encrypt(src.getBytes());
	System.out.println("JDK AES加密：" + Base64.getEncoder().encode(encodeJdkAES));
	byte[] decodeJdkAES = securityJdkAES.decrypt(encodeJdkAES);
	System.out.println("JDK AES解密：" + new String(decodeJdkAES));

	SecurityAES securityBcAES = SecurityAES.getInstance(password, SecurityAES.AES_MODE_BC);
	byte[] encodeBcAES = securityBcAES.encrypt(src.getBytes());
	System.out.println("bouncyCastle AES加密：" + Base64.getEncoder().encode(encodeBcAES));
	byte[] decodeBcAES = securityBcAES.decrypt(encodeBcAES);
	System.out.println("bouncyCastle AES解密：" + new String(decodeBcAES));
}
```

### Elgamal

```
7. Elgamal加密算法
ElGamal算法，是⼀种较为常见的加密算法，它是基于1984年提出的公钥密码体制和椭圆曲线加密体系。既能⽤于数据加密也能⽤于数字签名。
```

```java
package org.jeecg.modules.p14.key;

import java.security.AlgorithmParameterGenerator;
import java.security.AlgorithmParameters;
import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Security;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;
import javax.crypto.Cipher;
import javax.crypto.spec.DHParameterSpec;

import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class ElgamalUtil {
    
    /**
     * 非对称加密算法——ELGamal算法
     * 对于：“Illegal key size or default parameters”异常，是因为美国的出口限制，Sun通过权限文件（local_policy.jar、US_export_policy.jar）做了相应限制。
     * Java 7 无政策限制文件：http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html,
     * 下载后得到UnlimitedJCEPolicyJDK7.zip，解压替换%JAVA_HOME%/jre/lib/security的两个文件即可
     */
    
    //公钥
    private static final String PUBLIC_KEY = "elgamalPublicKey";
    //私钥
    private static final String PRIVATE_KEY = "elgamalPrivateKey";
 
    /** 初始化密钥对
     * @return Map 密钥对Map
     * @throws Exception
     */
    public static Map<String, Object> initKey() {
        try {
            Security.addProvider(new BouncyCastleProvider());//加入对Bouncy Castle的支持
            //1.初始化发送方密钥
            AlgorithmParameterGenerator algorithmParameterGenerator = AlgorithmParameterGenerator.getInstance("ELGamal");
            algorithmParameterGenerator.init(256);//初始化参数生成器
            AlgorithmParameters algorithmParameters = algorithmParameterGenerator.generateParameters();//生成算法参数
            DHParameterSpec dhParameterSpec = algorithmParameters.getParameterSpec(DHParameterSpec.class);//构建参数材料
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("ELGamal");//实例化密钥对生成器
            //初始化密钥对生成器
            keyPairGenerator.initialize(dhParameterSpec, new SecureRandom());
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //公钥和私钥
            PublicKey elGamalPublicKey = keyPair.getPublic();
            PrivateKey elGamalPrivateKey = keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, elGamalPublicKey);
            keyMap.put(PRIVATE_KEY, elGamalPrivateKey);
            return keyMap;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 加密【公钥加密，私钥解密】
     * @param data 待加密数据
     * @param key  公钥
     * @return byte[] 加密数据
     * @throws Exception
     */
    public static byte[] encrypt(byte[] data, byte[] key) {
        try {
            PublicKey pubKey = (PublicKey) KeyFactory.getInstance("ELGamal")
                    .generatePublic(new X509EncodedKeySpec(key));
            Cipher cipher = Cipher.getInstance("ELGamal","BC");
            cipher.init(Cipher.ENCRYPT_MODE, pubKey);
            byte[] result = cipher.doFinal(data);
            return result;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /**  解密【公钥加密，私钥解密】
     * @param data 待解密数据
     * @param key  私钥
     * @return byte[] 解密数据
     * @throws Exception
     */
    public static byte[] decrypt(byte[] data, byte[] key) {
        try {
            PrivateKey priKey = (PrivateKey) KeyFactory.getInstance("ELGamal")
                    .generatePrivate(new PKCS8EncodedKeySpec(key));
            //实例化
            Cipher cipher = Cipher.getInstance("ELGamal","BC");
            //使用密钥初始化，设置为解密模式
            cipher.init(Cipher.DECRYPT_MODE, priKey);
            //执行操作
            byte[] result = cipher.doFinal(data);
            return result;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /** 取得私钥
     * @param keyMap 密钥Map
     * @return byte[] 私钥
     * @throws Exception
     */
    public static byte[] getPrivateKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return key.getEncoded();
    }
 
    /** 取得公钥
     * @param keyMap 密钥Map
     * @return byte[] 公钥
     * @throws Exception
     */
    public static byte[] getPublicKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return key.getEncoded();
    }
}
```

```java
@Test
public void elgamal() {
	//公钥
	byte[] publicKey;
	//私钥
	byte[] privateKey;
	//初始化密钥
	//生成甲方密钥对
	Map<String, Object> keyMap = ElgamalUtil.initKey();
	publicKey = ElgamalUtil.getPublicKey(keyMap);
	privateKey = ElgamalUtil.getPrivateKey(keyMap);
	System.out.println("Elgamal公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKey));
	System.out.println("Elgamal私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKey));

	System.out.println();
	System.out.println("===甲方向乙方发送加密数据===");
	String msgA2B = "求知若饥，虚心若愚。";
	System.out.println("原文:\n" + msgA2B);
	System.out.println("---甲方使用公钥对数据进行加密---");
	//使用公钥对数据加密
	byte[] encodeMsgA2B = ElgamalUtil.encrypt(msgA2B.getBytes(), publicKey);
	System.out.println("Elgamal加密:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encodeMsgA2B));
	System.out.println("---乙方使用私钥对数据库进行解密---");
	//使用私钥对数据进行解密
	byte[] msgB2A = ElgamalUtil.decrypt(encodeMsgA2B, privateKey);
	String output1 = new String(msgB2A);
	System.out.println("Elgamal解密:\n" + output1);
}
```

### Base64

```
8. Base64加密算法
Base64加密算法是⽹络上最常见的⽤于传输8bit字节代码的编码⽅式之⼀，Base64编码可⽤于在HTTP环境下传递较长的标识信息。
```

```java
//base64加密解密
Base64.getEncoder().encode(String)
Base64.getDecoder().decode(String)
```

```java
package org.jeecg.modules.p14.key;

import org.apache.commons.codec.binary.Base64;

public class SecurityBASE64 {
    
    /**
     * base64算法是基于64个字符的一种替换算法。base64加密的产生式电子邮件的“历史问题”——邮件只能传输ASCII码。
     * base64加密的应用场景：email、密钥、证书文件。
     *  该算法可以由2种方式实现：Bouncy Castle、Commons Codec
     */
    
    /** 
     * Commons Codec实现base64编码 
     */
    public static String encodeCC(String src) {
        byte[] encode = Base64.encodeBase64(src.getBytes());
        return new String(encode);
    }
    public static String decodeCC(String src) {
        byte[] decode = Base64.decodeBase64(src);
        return new String(decode);
    }
    
    /**
     * Bouncy Castle实现base64编码 
     */
    public static String encodeBC(String src) {
        byte[] encode = org.bouncycastle.util.encoders.Base64.encode(src.getBytes());
        return new String(encode);
    }
    public static String decodeBC(String src) {
        byte[] decode = org.bouncycastle.util.encoders.Base64.decode(src);
        return new String(decode);
    }
}
```

```java
@Test
public void base64() {
	String inStr = "面向对象编程，object-oriented！@#*5";
	String encodeCC = SecurityBASE64.encodeCC(inStr);
	System.out.println("Commons Codec实现base64编码：\t" + encodeCC);
	String decodeCC = SecurityBASE64.decodeCC(encodeCC);
	System.out.println("Commons Codec实现base64解码：\t" + decodeCC);
	String encodeBC = SecurityBASE64.encodeBC(inStr);
	System.out.println("Bouncy Castle实现base64编码：\t" + encodeBC);
	String decodeBC = SecurityBASE64.decodeBC(encodeBC);
	System.out.println("Bouncy Castle实现base64解码：\t" + decodeBC);
}
```

### SHA

```
9. SHA1加密算法
SHA1是和MD5⼀样流⾏的消息摘要算法。SHA加密算法模仿MD4加密算法。SHA1主要适⽤于数字签名标准⾥⾯定义的数字签名算法。不可逆
```

```java
package org.jeecg.modules.p14.key;

import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import org.apache.commons.codec.binary.Hex;
import org.apache.commons.codec.digest.DigestUtils;
import org.bouncycastle.crypto.Digest;
import org.bouncycastle.crypto.digests.SHA1Digest;
import org.bouncycastle.crypto.digests.SHA224Digest;
import org.bouncycastle.crypto.digests.SHA256Digest;

public class SHAUtil {
    
    /**
     *  安全散列算法，固定长度的摘要信息。被认为是MD5的继承者。是一个系列，包括SHA-1、SHA-2（SHA-224、SHA-256、SHA-384、SHA-512）
     */
    
    /**
     * JDK实现sha-1 
     */
    public static String jdkSHA1(String src) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("sha");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }// sha1算法传入参数为sha
        byte[] sha1Bytes = md.digest(src.getBytes());
        return Hex.encodeHexString(sha1Bytes);
    }
    
    /** 
     * JDK实现sha-256 
     */
    public static String jdkSHA256(String src) {
        MessageDigest md = null;
        try {
            md = MessageDigest.getInstance("sha-256");
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        md.update(src.getBytes());
        return new String(org.bouncycastle.util.encoders.Hex.encode(md.digest()));
    }
    
    /** 
     * Commons Codec实现sha-1 
     */
    public static String commonsCodecSAH1(String src){
//        return DigestUtils.sha1Hex(src.getBytes());
        return DigestUtils.sha1Hex(src);
    }
    
    /**
     * Bouncy Castle实现sha-1 
     * @param src
     * @return
     */
    public static String bouncyCastleSHA1(String src){
        Digest digest = new SHA1Digest();
        digest.update(src.getBytes(), 0, src.getBytes().length);
        byte[]sha1Bytes = new byte[digest.getDigestSize()];
        digest.doFinal(sha1Bytes, 0);
        return new String(org.bouncycastle.util.encoders.Hex.encode(sha1Bytes));
    }
    
    /** 
     * Bouncy Castle实现sha-224 
     */
    public static String bouncyCastleSHA224(String src){
        Digest digest = new SHA224Digest();
        digest.update(src.getBytes(), 0, src.getBytes().length);
        byte[]sha224Bytes = new byte[digest.getDigestSize()];
        digest.doFinal(sha224Bytes, 0);
        return new String(org.bouncycastle.util.encoders.Hex.encode(sha224Bytes));
    }

    /** 
     * Bouncy Castle实现sha-256 
     */
    public static String bouncyCastleSHA256(String src) {
        Digest digest = new SHA256Digest();
        digest.update(src.getBytes(), 0, src.getBytes().length);
        byte[] sha256Bytes = new byte[digest.getDigestSize()];
        digest.doFinal(sha256Bytes, 0);
        return new String(org.bouncycastle.util.encoders.Hex.encode(sha256Bytes));
    } 
}
```

```java
@Test
public void sha() {
	String src = "object-oriente"; // 需要加密的原始字符串
	System.out.println("JDK SHA-1:\t" + SHAUtil.jdkSHA1(src));
	System.out.println("cc SHA-1:\t" + SHAUtil.commonsCodecSAH1(src));
	System.out.println("bc SHA-1:\t" + SHAUtil.bouncyCastleSHA1(src));
	System.out.println("bc SHA-224:\t" + SHAUtil.bouncyCastleSHA224(src));
	System.out.println("JDK SHA-256:\t" + SHAUtil.jdkSHA256(src));
	System.out.println("bc SHA-256:\t" + SHAUtil.bouncyCastleSHA256(src));
}
```

### PKCS

```
10. PKCS加密算法
PKCS是由美国RSA数据安全公司及其合作伙伴制定的⼀组公钥密码学标准，其中包括证书申请、证书更新、证书作废表发布、扩展证书内容以及数字签名、数字信封的格式等⽅⾯的⼀系列相关协议。
```

### ECDSA

```
11.ECDSA
微软的Office、Windows操作系统的验证就是ECDSA算法——椭圆曲线数字签名算法（Elliptic Curve Digital Signature Algorithm），在2000年的时候称为了ANSI和IEEE的标准。特点是：速度快、签名短、强度高。在JDK1.7update4之后提供了对ECDSA的支持。该签名的算法也和RSA的数字签名算法也是大同小异。
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.Signature;
import java.security.interfaces.ECPrivateKey;
import java.security.interfaces.ECPublicKey;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;

public class DigitalSignECDSA {
    //公钥
    private static final String PUBLIC_KEY = "ECDSAPublicKey";
    //私钥
    private static final String PRIVATE_KEY = "ECDSAPrivateKey";
 
    /** 初始化密钥对
     * @return Map 密钥对Map
     * @throws Exception
     */
    public static Map<String, Object> initKey() {
        try {
            //实例化密钥对生成器
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("EC");
            // 初始化密钥对生成器，密钥大小为256位
            keyPairGenerator.initialize(256, new SecureRandom());
            //生成密钥对
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //公钥
            ECPublicKey publicKey = (ECPublicKey) keyPair.getPublic();
            //私钥
            ECPrivateKey privateKey = (ECPrivateKey) keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, publicKey);
            keyMap.put(PRIVATE_KEY, privateKey);
            return keyMap;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 执行数字签名【私钥签名】
     * @param data 待加密数据
     * @param privKey  私钥
     * @return byte[] 加密数据
     * @throws Exception
     */
    public static byte[] digitalSign(byte[] data, byte[] privKey) {
        try {
            PrivateKey privateKey = (PrivateKey) KeyFactory.getInstance("EC")
                    .generatePrivate(new PKCS8EncodedKeySpec(privKey));
            Signature signature = Signature.getInstance("SHA1WithECDSA");
            signature.initSign(privateKey);
            signature.update(data);
            return signature.sign();
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /** 验证签名【公钥验证】
     * @param data 待解密数据
     * @param pubKey  公钥
     * @return byte[] 解密数据
     * @throws Exception
     */
    public static boolean signVerify(byte[] data, byte[] rsaData, byte[] pubKey) {
        try {
            PublicKey publicKey = (PublicKey) KeyFactory.getInstance("EC")
                    .generatePublic(new X509EncodedKeySpec(pubKey));
            Signature signature = Signature.getInstance("SHA1WithECDSA");
            signature.initVerify(publicKey);
            signature.update(data);
            return signature.verify(rsaData);
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return false;
    }
 
    /** 取得私钥
     * @param keyMap 密钥Map
     * @return byte[] 私钥
     * @throws Exception
     */
    public static byte[] getPrivateKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return key.getEncoded();
    }
 
    /** 取得公钥
     * @param keyMap 密钥Map
     * @return byte[] 公钥
     * @throws Exception
     */
    public static byte[] getPublicKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return key.getEncoded();
    }
}
```

```java
@Test
public void ecdsa() {
	//公钥
	byte[] publicKey;
	//私钥
	byte[] privateKey;
	//初始化密钥
	//生成密钥对
	Map<String, Object> keyMap = DigitalSignECDSA.initKey();
	publicKey = DigitalSignECDSA.getPublicKey(keyMap);
	privateKey = DigitalSignECDSA.getPrivateKey(keyMap);
	System.out.println("ECDSA公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKey));
	System.out.println("ECDSA私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKey));

	System.out.println();
	String msgA2B = "What can I do for you?";
	//执行数字签名【私钥签名】
	byte[] encodeMsgA2B = DigitalSignECDSA.digitalSign(msgA2B.getBytes(), privateKey);
	System.out.println("JDK ECDSA签名：:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encodeMsgA2B));
	//验证签名【公钥验证】
	boolean bool = DigitalSignECDSA.signVerify(msgA2B.getBytes(), encodeMsgA2B, publicKey);
	System.out.println("数字签名是否有效？:\n" + bool);
}
```

### DH

```
非对称加密算法
加密密钥分为公钥和私钥。可以使用公钥加密私钥解密，也可以使用私钥加密公钥解密。非对称加密算法主要有：DH（Diffie-Hellman）密钥交换算法、RSA（基于因子分解）、Elgamal（基于离散对数）、ECC（Elliptical Curve Cryptography，椭圆曲线加密）。
DH（密钥交换）算法
如何安全地传送密钥是对称加密算法的症结所在。密钥交换算法是通过构建本地密钥来解决对称加密算法中的密钥传递的问题的。
```

```java
package org.jeecg.modules.p14.key;

import java.security.Key;
import java.security.KeyFactory;
import java.security.KeyPair;
import java.security.KeyPairGenerator;
import java.security.NoSuchAlgorithmException;
import java.security.PrivateKey;
import java.security.PublicKey;
import java.security.SecureRandom;
import java.security.spec.PKCS8EncodedKeySpec;
import java.security.spec.X509EncodedKeySpec;
import java.util.HashMap;
import java.util.Map;
import javax.crypto.Cipher;
import javax.crypto.KeyAgreement;
import javax.crypto.KeyGenerator;
import javax.crypto.SecretKey;
import javax.crypto.interfaces.DHPrivateKey;
import javax.crypto.interfaces.DHPublicKey;
import javax.crypto.spec.DHParameterSpec;
import javax.crypto.spec.SecretKeySpec;

public class SecurityDH {
    
    /** 使用DH方式加解密的前提条件：否则报错 java.security.NoSuchAlgorithmException: Unsupported secret key algorithm: AES
     *     1.当前开发环境中的运行的java程序, 在jre中配置缺省VM变量 -Djdk.crypto.KeyAgreement.legacyKDF=true
     *         A.点击窗口，选择首选项  B.点击installed JREs, 选择JRE配置，然后编辑  C.在缺省VM参数：-Djdk.crypto.KeyAgreement.legacyKDF=true
     *  2.可运行jar包，则需要在运行时采用命令提示符运行，在运行时添加VM参数，运行命令为：java -jar -Djdk.crypto.KeyAgreement.legacyKDF=true jarPackName.jar
     *         A.编辑可执行文件，配置VM参数：-Djdk.crypto.KeyAgreement.legacyKDF=true
     */
    
    /** 本地密钥算法，即对称加密密钥算法  可选DES、DESede或者AES*/
    private static final String SELECT_ALGORITHM = "AES";
    /** 默认的加密算法 */
    private static final String DEFAULT_CIPHER_ALGORITHM = "AES/ECB/PKCS5Padding";
    /** 密钥长度 */
    private static final int KEY_SIZE = 512;
    //公钥
    private static final String PUBLIC_KEY = "DHPublicKey";
    //私钥
    private static final String PRIVATE_KEY = "DHPrivateKey";
 
    /**  初始化甲方密钥
     * @return Map 甲方密钥Map
     * @throws Exception
     */
    public static Map<String, Object> initKey() {
        try {
            //实例化密钥对生成器
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("DH");
            //初始化密钥对生成器
            keyPairGenerator.initialize(KEY_SIZE);
            //生成密钥对
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //甲方公钥
            DHPublicKey publicKey = (DHPublicKey) keyPair.getPublic();
            //甲方私钥
            DHPrivateKey privateKey = (DHPrivateKey) keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, publicKey);
            keyMap.put(PRIVATE_KEY, privateKey);
            return keyMap;
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 初始化乙方密钥
     * @param key 甲方公钥
     * @return Map 乙方密钥Map
     * @throws Exception
     */
    public static Map<String, Object> initKey(byte[] key) {
        try {
            //解析甲方公钥
            //转换公钥材料
            X509EncodedKeySpec x509KeySpec = new X509EncodedKeySpec(key);
            //实例化密钥工厂
            KeyFactory keyFactory = KeyFactory.getInstance("DH");
            //产生公钥
            PublicKey pubKey = keyFactory.generatePublic(x509KeySpec);
            //由甲方公钥构建乙方密钥
            DHParameterSpec dhParameterSpec = ((DHPublicKey) pubKey).getParams();
            //实例化密钥对生成器
            KeyPairGenerator keyPairGenerator = KeyPairGenerator.getInstance("DH");
            //初始化密钥对生成器
            keyPairGenerator.initialize(dhParameterSpec);
            //产生密钥对
            KeyPair keyPair = keyPairGenerator.generateKeyPair();
            //乙方公钥
            DHPublicKey publicKey = (DHPublicKey) keyPair.getPublic();
            //乙方私约
            DHPrivateKey privateKey = (DHPrivateKey) keyPair.getPrivate();
            //将密钥对存储在Map中
            Map<String, Object> keyMap = new HashMap<String, Object>(2);
            keyMap.put(PUBLIC_KEY, publicKey);
            keyMap.put(PRIVATE_KEY, privateKey);
            return keyMap;
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 生成加密秘钥
     * @return
     */
    private static SecretKeySpec getSecretKey(final byte[] key) {
        //返回生成指定算法密钥生成器的 KeyGenerator 对象
        KeyGenerator kg = null;
        try {
            kg = KeyGenerator.getInstance(SELECT_ALGORITHM);
            //AES 要求密钥长度为 128
            kg.init(128, new SecureRandom(key));
            //生成一个密钥
            SecretKey secretKey = kg.generateKey();
            return new SecretKeySpec(secretKey.getEncoded(), SELECT_ALGORITHM);// 转换为AES专用密钥
        } catch (NoSuchAlgorithmException ex) {
            ex.printStackTrace();
        }
 
        return null;
    }
 
    /** 加密
     * @param data 待加密数据
     * @param key  密钥
     * @return byte[] 加密数据
     * @throws Exception
     */
    public static byte[] encrypt(byte[] data, byte[] key) {
        try {
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);// 创建密码器
            byte[] byteContent = data;
            cipher.init(Cipher.ENCRYPT_MODE, getSecretKey(key));// 初始化为加密模式的密码器
            byte[] result = cipher.doFinal(byteContent);// 加密
            return result;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /**  解密
     * @param data 待解密数据
     * @param key  密钥
     * @return byte[] 解密数据
     * @throws Exception
     */
    public static byte[] decrypt(byte[] data, byte[] key) {
        try {
            //实例化
            Cipher cipher = Cipher.getInstance(DEFAULT_CIPHER_ALGORITHM);
            //使用密钥初始化，设置为解密模式
            cipher.init(Cipher.DECRYPT_MODE, getSecretKey(key));
            //执行操作
            byte[] result = cipher.doFinal(data);
            return result;
        } catch (Exception ex) {
            ex.printStackTrace();
        }
        return null;
    }
 
    /** 构建密钥
     * @param publicKey  公钥
     * @param privateKey 私钥
     * @return byte[] 本地密钥
     * @throws Exception
     */
    public static byte[] getSecretKey(byte[] publicKey, byte[] privateKey) {
        try {
            //实例化密钥工厂
            KeyFactory keyFactory = KeyFactory.getInstance("DH");
            //初始化公钥
            //密钥材料转换
            X509EncodedKeySpec x509KeySpec = new X509EncodedKeySpec(publicKey);
            //产生公钥
            PublicKey pubKey = keyFactory.generatePublic(x509KeySpec);
            //初始化私钥
            //密钥材料转换
            PKCS8EncodedKeySpec pkcs8KeySpec = new PKCS8EncodedKeySpec(privateKey);
            //产生私钥
            PrivateKey priKey = keyFactory.generatePrivate(pkcs8KeySpec);
            //实例化
            KeyAgreement keyAgree = KeyAgreement.getInstance(keyFactory.getAlgorithm());
            //初始化
            keyAgree.init(priKey);
            keyAgree.doPhase(pubKey, true);
            //生成本地密钥
            SecretKey secretKey = keyAgree.generateSecret(SELECT_ALGORITHM);
            return secretKey.getEncoded();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return null;
    }
 
    /** 取得私钥
     * @param keyMap 密钥Map
     * @return byte[] 私钥
     * @throws Exception
     */
    public static byte[] getPrivateKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PRIVATE_KEY);
        return key.getEncoded();
    }
 
    /** 取得公钥
     * @param keyMap 密钥Map
     * @return byte[] 公钥
     * @throws Exception
     */
    public static byte[] getPublicKey(Map<String, Object> keyMap) {
        Key key = (Key) keyMap.get(PUBLIC_KEY);
        return key.getEncoded();
    }
}
```

```java
@Test
public void dh() {
	//甲方公钥
	byte[] publicKeyA;
	//甲方私钥
	byte[] privateKeyA;
	//甲方本地密钥
	byte[] localKeyA;
	//乙方公钥
	byte[] publicKeyB;
	//乙方私钥
	byte[] privateKeyB;
	//乙方本地密钥
	byte[] localKeyB;

	//初始化密钥
	//生成甲方密钥对
	Map<String, Object> keyMapA = SecurityDH.initKey();
	publicKeyA = SecurityDH.getPublicKey(keyMapA);
	privateKeyA = SecurityDH.getPrivateKey(keyMapA);
	System.out.println("甲方公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKeyA));
	System.out.println("甲方私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKeyA));
	//由甲方公钥产生乙方本地密钥对
	Map<String, Object> keyMapB = SecurityDH.initKey(publicKeyA);
	publicKeyB = SecurityDH.getPublicKey(keyMapB);
	privateKeyB = SecurityDH.getPrivateKey(keyMapB);
	System.out.println("乙方公钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(publicKeyB));
	System.out.println("乙方私钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(privateKeyB));
	localKeyA = SecurityDH.getSecretKey(publicKeyB, privateKeyA);
	System.out.println("甲方本地密钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(localKeyA));
	localKeyB = SecurityDH.getSecretKey(publicKeyA, privateKeyB);
	System.out.println("乙方本地密钥:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(localKeyB));

	System.out.println();
	System.out.println("===甲方向乙方发送加密数据===");
	String msgA2B = "求知若饥，虚心若愚。";
	System.out.println("原文:\n" + msgA2B);
	System.out.println("---使用甲方本地密钥对数据进行加密---");
	//使用甲方本地密钥对数据加密
	byte[] encodeMsgA2B = SecurityDH.encrypt(msgA2B.getBytes(), localKeyA);
	System.out.println("加密:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encodeMsgA2B));
	System.out.println("---使用乙方本地密钥对数据库进行解密---");
	//使用乙方本地密钥对数据进行解密
	byte[] msgB2A = SecurityDH.decrypt(encodeMsgA2B, localKeyB);
	String output1 = new String(msgB2A);
	System.out.println("解密:\n" + output1);

	System.out.println("/~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~..~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~.~/");
	System.out.println("===乙方向甲方发送加密数据===");
	String input2 = "好好学习，天天向上。";
	System.out.println("原文:\n" + input2);
	System.out.println("---使用乙方本地密钥对数据进行加密---");
	//使用乙方本地密钥对数据进行加密
	byte[] encode2 = SecurityDH.encrypt(input2.getBytes(), localKeyB);
	System.out.println("加密:\n" + org.apache.commons.codec.binary.Base64.encodeBase64String(encode2));
	System.out.println("---使用甲方本地密钥对数据进行解密---");
	//使用甲方本地密钥对数据进行解密
	byte[] decode2 = SecurityDH.decrypt(encode2, localKeyA);
	String output2 = new String(decode2);
	System.out.println("解密:\n" + output2);
}
```

### PBE

```
PBE算法结合了消息摘要算法和对称加密算法的优点，是一种特殊的对称加密算法。Password Based Encryption，基于口令的加密。因为口令是比较好记的，就容易通过穷举、猜测的方式获得口令——针对这种情况，我们采用的方式是加盐（Salt），通过加入一些额外的内容（通常是随机字符）去扰乱。实现的方式有2种：JDK和BC。
```

```java
import java.security.Key;
import java.security.SecureRandom;
import java.security.Security;
import javax.crypto.Cipher;
import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import javax.crypto.spec.PBEParameterSpec;

import org.apache.commons.lang3.StringUtils;
import org.bouncycastle.jce.provider.BouncyCastleProvider;

public class SecurityPBE {
    
    public static String PBE_MODE_JDK = "jdk";
    public static String PBE_MODE_BC = "bouncyCastle";
    private PBEParameterSpec parameterSpec;
    private Key key;
    
    //单例模式
    private static SecurityPBE securityPBE;
    public static SecurityPBE getInstance(String password, String succurityMode) {
        if(securityPBE == null) {
            securityPBE = new SecurityPBE(password, succurityMode);
        }
        return securityPBE;
    }
    
    private SecurityPBE(String password, String succurityMode)  {
        try{
            //1.初始化盐
            SecureRandom secureRandom = new SecureRandom();//强加密随机数生成器
            byte[] salt= secureRandom.generateSeed(8);//产生盐必须是8位
            //2.口令与密钥
            if(StringUtils.isNotBlank(succurityMode) && StringUtils.equals(PBE_MODE_BC, succurityMode)) {
                Security.addProvider(new BouncyCastleProvider());//添加到provider
                PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray());
                SecretKeyFactory factory = SecretKeyFactory.getInstance("PBEWithMD5AndDES","BC");//指定provider
                key = factory.generateSecret(pbeKeySpec);
                parameterSpec = new PBEParameterSpec(salt, 50);
            }else {
                PBEKeySpec pbeKeySpec = new PBEKeySpec(password.toCharArray());//密钥转换的对象
                SecretKeyFactory factory = SecretKeyFactory.getInstance("PBEWithMD5AndDES");//实例化密钥转换工厂
                key = factory.generateSecret(pbeKeySpec);//由工厂产生key
                parameterSpec = new PBEParameterSpec(salt, 100);//PBE输入参数的材料，盐，迭代100次
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    
    public byte[] encrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("PBEWithMD5AndDES");
            cipher.init(Cipher.ENCRYPT_MODE, key, parameterSpec);
            byte[] result = cipher.doFinal(array);
            return result;
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
    
    public byte[] decrypt(byte[] array) {
        try{
            Cipher cipher = Cipher.getInstance("PBEWithMD5AndDES");
            cipher.init(Cipher.DECRYPT_MODE, key, parameterSpec);
            return cipher.doFinal(array);
        } catch(Exception e ){
            e.printStackTrace();
        }
        return null;
    }
}
```

```java
@Test
public void pbe() {
	String src = "面向对象编程，object-oriented！@#*5"; // 需要加密的原始字符串
	String password = "123456";
	SecurityPBE securityJdkPBE1 = SecurityPBE.getInstance(password, SecurityPBE.PBE_MODE_JDK);
	byte[] encodeJdkPBE = securityJdkPBE1.encrypt(src.getBytes());
	System.out.println("JDK PBE加密：" + Base64.getEncoder().encode(encodeJdkPBE));
	SecurityPBE securityJdkPBE2 = SecurityPBE.getInstance(password, SecurityPBE.PBE_MODE_JDK);
	byte[] decodeJdkPBE = securityJdkPBE2.decrypt(encodeJdkPBE);
	System.out.println("JDK PBE解密：" + new String(decodeJdkPBE));

	SecurityPBE securityBcPBE = SecurityPBE.getInstance(password, SecurityDES3.DES3_MODE_BC);
	byte[] encodeBcPBE = securityBcPBE.encrypt(src.getBytes());
	System.out.println("bouncyCastle PBE加密：" + Base64.getEncoder().encode(encodeBcPBE));
	byte[] decodeBcPBE = securityBcPBE.decrypt(encodeBcPBE);
	System.out.println("bouncyCastle PBE解密：" + new String(decodeBcPBE));
}
```

### MAC

```
消息摘要算法——MAC
MAC(Message Authentication Code)，兼容了MD和SHA的特性，并且在它们的基础上加入了密钥。因此MAC也称为HMAC（keyed-Hash Message Authentication Code）含有密钥的散列函数算法。
MD系列：HmacMD2、HmacMD4、HmacMD5
SHA系列：HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512
```

```java
package org.jeecg.modules.p14.key;

import java.security.InvalidKeyException;
import java.security.NoSuchAlgorithmException;
import javax.crypto.Mac;
import javax.crypto.SecretKey;
import javax.crypto.spec.SecretKeySpec;
import org.apache.commons.codec.DecoderException;
import org.apache.commons.codec.binary.Hex;
import org.bouncycastle.crypto.digests.MD5Digest;
import org.bouncycastle.crypto.macs.HMac;
import org.bouncycastle.crypto.params.KeyParameter;

public class SecurityMac {
    /**
     * MAC(Message Authentication
     * Code)，兼容了MD和SHA的特性，并且在它们的基础上加入了密钥。因此MAC也称为HMAC（keyed-Hash Message
     * Authentication Code）含有密钥的散列函数算法。 MD系列：HmacMD2、HmacMD4、HmacMD5
     * SHA系列：HmacSHA1、HmacSHA224、HmacSHA256、HmacSHA384、HmacSHA512
     * 例如：常用的Linux客户端SecurityCRT
     */
    
    private static String privateKey = "aabbccddee";
    
    /**
     * HmacMD5加密算法
     * @return
     */
    public static String jdkHmacMD5(String src) {
        byte[] hmacMD5Bytes = null;
        try {
            // 1.得到密钥
//            KeyGenerator keyGenerator = KeyGenerator.getInstance("HmacMD5");
//            SecretKey secretKey = keyGenerator.generateKey();// 生成密钥
//            byte[] key = secretKey.getEncoded();//获得密钥
            // 2.还原密钥
            byte[] privKey = Hex.decodeHex(privateKey.toCharArray());
            SecretKey restoreSecretKey = new SecretKeySpec(privKey, "HmacMD5");
            // 3.信息摘要
            Mac mac = Mac.getInstance(restoreSecretKey.getAlgorithm());// 实例化mac
            mac.init(restoreSecretKey);// 初始化mac
            hmacMD5Bytes = mac.doFinal(src.getBytes());// 执行摘要
        } catch (NoSuchAlgorithmException e) {
            e.printStackTrace();
        } catch (DecoderException e) {
            e.printStackTrace();
        } catch (InvalidKeyException e) {
            e.printStackTrace();
        }
        return Hex.encodeHexString(hmacMD5Bytes);
    }
    
    /**
     * HmacMD5加密算法
     * @return
     */
    public static String bouncyCastleHmacMD5(String src) {
        HMac hmac = new HMac(new MD5Digest());
        //生成密钥的时候以aabbccddee为基准
        hmac.init(new KeyParameter(org.bouncycastle.util.encoders.Hex.decode(privateKey)));
        hmac.update(src.getBytes(), 0, src.getBytes().length);
        // 执行摘要
        byte[]hmacMDdBytes = new byte[hmac.getMacSize()];
        hmac.doFinal(hmacMDdBytes, 0);
        return new String(org.bouncycastle.util.encoders.Hex.encode(hmacMDdBytes));
    }
}
```

```java
@Test
public void mac() {
	String src = "object-oriente";
	System.out.println("jdkHmacMD5:\t" + SecurityMac.jdkHmacMD5(src));
	System.out.println("bcHmacMD5:\t"+ SecurityMac.bouncyCastleHmacMD5(src));
}
```

### 哈希算法

> 哈希算法可以简单分为两类
>
> > 1. 加密哈希算法
> >
> >    > 安全性较高的哈希算法，它可以提供一定的数据完整性保护和数据防篡改能力，能够抵御一定的攻击手段，安全性相对较高，但性能较差，适用于对安全性要求较高的场景。例如 SHA2、SHA3、SM3、RIPEMD-160、BLAKE2、SipHash 等等
> >
> > 2. 非加密哈希算法
> >
> >    > 安全性相对较低的哈希算法，易受到暴力破解、冲突攻击等攻击手段的影响，但性能较高，适用于对安全性没有要求的业务场景。例如 CRC32、MurMurHash3、SipHash 等等
> >
> > 3. 除了这两种之外，还有一些特殊的哈希算法，例如安全性更高的**慢哈希算法**。

### 私钥公钥签证加密

```java
//utf-8编码/解密
String encode = URLEncoder.encode("测试", "UTF-8");
String decode = URLDecoder.decode("测试", "UTF-8");

//Private转成String
Base64.getEncoder().encodeToString(privateKey.getEncoded());
```

```java
//自定义实现 -- utf-8编码/解密
public class EncodingUtil {
 public static String decodeURIComponent(String s) {
   if (s == null) {
    return null;
   }
   String result = null;
   try {
    result = URLDecoder.decode(s, "UTF-8");
   }catch (UnsupportedEncodingException e) {
    result = s;
   }
   return result;
 }
 public static String encodeURIComponent(String s) {
   String result = null;
   try {
     result = URLEncoder.encode(s, "UTF-8")
               .replaceAll("\\+", "%20")
               .replaceAll("\\%21", "!")
               .replaceAll("\\%27", "'")
               .replaceAll("\\%28", "(")
               .replaceAll("\\%29", ")")
               .replaceAll("\\%7E", "~");
   }catch (UnsupportedEncodingException e) {
     result = s;
   }
   return result;
 } 
  private EncodingUtil() {
   super();
  }
}
```

```java
/**
 * pfx获取私钥别名等信息
 */
public static byte[] getPrivateKeyInfo(String content){
    String keyAlias = null;
    try{
        KeyStore keyStore = KeyStore.getInstance("PKCS12");
        FileInputStream fileInputStream = new FileInputStream(new ClassPathResource(PRIVATE_ADDRESS).getFile());
        char[] nPassword = PRIVATE_PASSWORD.toCharArray();
        keyStore.load(fileInputStream, nPassword);
        fileInputStream.close();
        log.info( "keystore type=" + keyStore.getType());
        Enumeration<String> enumeration = keyStore.aliases();
        if (enumeration.hasMoreElements()){
            keyAlias = enumeration.nextElement();
            log.info( "alias=[" + keyAlias + "]");
        }
        log.info( "is key entry=" + keyStore.isKeyEntry(keyAlias));
        PrivateKey privateKey = (PrivateKey) keyStore.getKey(keyAlias, nPassword);
        System.out.println("private: "+Base64.getEncoder().encodeToString(privateKey.getEncoded()));
        Certificate cert = keyStore.getCertificate(keyAlias);
        PublicKey publickey = cert.getPublicKey();
        // 导出为 cer 证书
        try {
            FileOutputStream fos = new FileOutputStream("C:\\Users\\chenx\\Desktop\\test" + ".cer");
            fos.write(cert.getEncoded());
            fos.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
        System.out.println("public: "+Base64.getEncoder().encodeToString(publickey.getEncoded()));
        log.info( "cert class = " + cert.getClass().getName());
        log.info( "cert = " + cert);
        log.info( "public key = " + publickey);
        log.info( "private key = " + privateKey);
        //私钥签名
        byte[] signOne = sign(content, privateKey) ;
        log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>签名后>>>>>>>>>>>>\n" + new String(Base64.getEncoder().encode(signOne)));
        //公钥验签
        boolean verifySign = verify(content,signOne,publickey);
        log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>验签结果>>>>>>>>>>>>>>>>\n" + verifySign);
        if (verifySign){
            return signOne;
        }
    } catch (Exception e){
        log.error(e.getMessage());
    }
    return new byte[0];
}
```

```java
//私钥签名
public static byte[] sign(String content, PrivateKey priKey) throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
    //这里可以从证书中解析出签名算法名称
    //Signature signature = Signature.getInstance(getSigAlgName(pubCert));
    Signature signature = Signature.getInstance("SHA256withRSA");
    signature.initSign(priKey);
    signature.update(content.getBytes());
    return signature.sign();
}
//公钥验签
public static boolean verify(String content, byte[] sign, PublicKey pubKey) throws NoSuchAlgorithmException, InvalidKeyException, SignatureException {
    //这里可以从证书中解析出签名算法名称
    //Signature signature = Signature.getInstance(getSigAlgName(priCert));
    Signature signature = Signature.getInstance("SHA256withRSA");
    signature.initVerify(pubKey);
    signature.update(content.getBytes());
    return signature.verify(sign);
}
```

```java
//参数排序 -- 按字母顺序
private static String getSordBaseParamsStr(String jose,String nonce,String timestamp) {
    Map<String,String> params = getHeaderMaps(nonce,timestamp);
    params.put("jose", jose);
    TreeMap<String, String> sorted = new TreeMap<>(params);
    Set<String> keys = params.keySet();
    for (String key : keys) {
        sorted.put(key, params.get(key));
    }
    StringBuilder builder = new StringBuilder();
    for (Map.Entry<String, String> entry : sorted.entrySet()) {
        if (builder.length() > 0) {
            builder.append("&");
        }
        builder.append(entry.getKey()).append("=");
        if (null != entry.getValue()) {
            builder.append(entry.getValue());
        }

    }
    log.info("*******sb.tostring:" + builder.toString());
    return builder.toString();
}
```

```java
/**
     * 获取私钥别名等信息
     */
public static PrivateKey getPrivateKeyInfo() {
    String privKeyFileString = SHA256WithRSASignatureUtil.PRIVATE_ADDRESS;
    String privKeyPswdString = SHA256WithRSASignatureUtil.PRIVATE_PASSWORD;
    String keyAlias = null;
    try
    {
        KeyStore keyStore = KeyStore.getInstance( "PKCS12");
        FileInputStream fileInputStream = new FileInputStream(new ClassPathResource(privKeyFileString).getFile());
        char[] nPassword = privKeyPswdString.toCharArray();
        keyStore.load(fileInputStream, nPassword);
        fileInputStream.close();
        log.info( "keystore type=" + keyStore.getType());
        Enumeration<String> enumeration = keyStore.aliases();
        if (enumeration.hasMoreElements())
        {
            keyAlias = enumeration.nextElement();
            log.info( "alias=[" + keyAlias + "]");
        }
        log.info( "is key entry=" + keyStore.isKeyEntry(keyAlias));
        return  (PrivateKey) keyStore.getKey(keyAlias, nPassword);
    } catch (Exception e) {
        log.error("-------获取私钥失败------",e);
        throw new JeecgBootException("获取私钥失败");
    }
}


/**
     * 获取公钥别名等信息
     */
public static PublicKey getPublicKeyInfo()  {
    String privKeyFileString = SHA256WithRSASignatureUtil.PRIVATE_ADDRESS;
    String privKeyPswdString = SHA256WithRSASignatureUtil.PRIVATE_PASSWORD;
    String keyAlias = null;
    try{
        KeyStore keyStore = KeyStore.getInstance( "PKCS12");
        FileInputStream fileInputStream = new FileInputStream(new ClassPathResource(privKeyFileString).getFile());
        char[] nPassword = privKeyPswdString.toCharArray();
        keyStore.load(fileInputStream, nPassword);
        fileInputStream.close();
        log.info( "keystore type=" + keyStore.getType());
        Enumeration<String> enumeration = keyStore.aliases();
        if (enumeration.hasMoreElements()) {
            keyAlias = enumeration.nextElement();
            log.info( "alias=[" + keyAlias + "]");
        }
        return keyStore.getCertificate(keyAlias).getPublicKey();
    } catch (Exception e) {
        log.error("------获取公钥失败-----",e);
        throw new JeecgBootException("获取公钥失败");
    }
}

/**
     * 加密数据
     * @param publicKey
     * @param payload
     * @return
     * @throws Exception
     */
private static String jweEncryption(Key publicKey, String payload)

    throws Exception {

    System.out.println("Payload before encryption :: " + payload);

    /*Encryption*/

    JWEHeader header = new JWEHeader.Builder(JWEAlgorithm.RSA_OAEP, EncryptionMethod.A256GCM).build();


    JWEEncrypter encryptedJWE = new RSAEncrypter((RSAPublicKey) publicKey);
    JWEObject jweObject = new JWEObject(header, new Payload(getSignedContent(payload)));

    jweObject.encrypt(encryptedJWE);


    return jweObject.serialize();

}

public static JWSObject getSignedContent(String content) {
    Payload contentPayload = new Payload(content);

    try {
        RSASSASigner rsa = new RSASSASigner(getPrivateKeyInfo());
        JWSHeader header = new JWSHeader(JWSAlgorithm.RS256);
        JWSObject jws = new JWSObject(header, contentPayload);
        jws.sign(rsa);
        return jws;
    } catch (Exception e) {
        throw new RuntimeException(e);
    }
}

private static String decryptJWE(String data){
    JWEObject jweObject;
    try {
        jweObject = JWEObject.parse(data);
        // Decrypt with shared key
        jweObject.decrypt(new RSADecrypter(getPrivateKeyInfo()));

        // Extract payload
        SignedJWT signedJWT = jweObject.getPayload().toSignedJWT();

        if (signedJWT.verify(new RSASSAVerifier((RSAPublicKey) getPublicKeyInfo()))) {
            //解密数据
            return jweObject.getPayload().toString();
        }
    } catch (ParseException | JOSEException e) {
        log.error(String.valueOf(e));
    }

    return null;
}
```