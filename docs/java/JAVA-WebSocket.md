# JAVA-WebSocket

WebSocket 协议在2008年诞生，2011年成为国际标准。所有浏览器都已经支持了

#### WebSocket 和 HTTP 的关系

```sql
-- 结论
1.WebSocket和HTTP都是基于TCP协议的两个不同的协议
2.WebSocket依赖于HTTP连接
```

```sql
-- 问题一
1.WebSocket依赖于HTTP连接，那么它如何从连接的HTTP协议转化为WebSocket协议？
每个WebSocket连接都始于一个HTTP请求。具体来说，WebSocket协议在第一次握手连接时，通过HTTP协议在传送WebSocket支持的版本号，协议的字版本号，原始地址，主机地址等等一些列字段给服务器端
GET /chat HTTP/1.1
Host: server.example.com
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Key:dGhlIHNhbXBsZSBub25jZQ==
Origin: http://example.com
Sec-WebSocket-Version: 13
注意，关键的地方是，这里面有个Upgrade首部，用来把当前的HTTP请求升级到WebSocket协议，这是HTTP协议本身的内容，是为了扩展支持其他的通讯协议。 如果服务器支持新的协议，则必须返回101
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept:s3pPLMBiTxaQ9kYGzzhZRbK+xOo=
至此，HTTP请求物尽其用，如果成功触发onopen事件，否则触发onerror事件，后面的传输则不再依赖HTTP协议
```

```sql
-- 问题二
2.WebSocket为什么要依赖于HTTP协议的连接？
WebSocket设计上就是天生为HTTP增强通信（全双工通信等），所以在HTTP协议连接的基础上是很自然的一件事，并因此而能获得HTTP的诸多便利。这诸多便利中有一条很重要，基于HTTP连接将获得最大的一个兼容支持，比如即使服务器不支持WebSocket也能建立HTTP通信，只不过返回的是onerror而已，这显然比服务器无响应要好的多
```

#### WebSocket

```sql
-- 我们已经有了 HTTP 协议，为什么还需要WebSocket协议？它能带来什么好处？
HTTP 协议有一个缺陷：通信只能由客户端发起
这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用"轮询"：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。
轮询的效率低，非常浪费资源（因为必须不停连接，或者HTTP连接始终打开）。因此，工程师们一直在思考，有没有更好的方法。WebSocket 就是这样发明的。
-- 特点
ws://example.com:80/some/path
（1）建立在 TCP 协议之上，服务器端的实现比较容易。
（2）与 HTTP 协议有着良好的兼容性。默认端口也是80和443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器。
（3）数据格式比较轻量，性能开销小，通信高效。
（4）可以发送文本，也可以发送二进制数据。
（5）没有同源限制，客户端可以与任意服务器通信。
（6）协议标识符是ws（如果加密，则为wss），服务器网址就是 URL。
```

```mdx-code-block
import webSocket from '/img/docs/WebSocket-webSocket.jpg';

<img src={webSocket} alt="WebSocket-webSocket" width="50%" />
```

#### Netty-websocket

```xml
<!-- netty依赖 -->
<dependency>
    <groupId>org.yeauty</groupId>
    <artifactId>netty-websocket-spring-boot-starter</artifactId>
    <version>0.12.0</version>
</dependency>
```

#### 注解说明

```
@ServerEndpoint
当ServerEndpointExporter类通过Spring配置进行声明并被使用，它将会去扫描带有@ServerEndpoint注解的类被注解的类将被注册成为一个WebSocket端点所有的配置项都在这个注解的属性中 (如:@ServerEndpoint("/ws") )
```

```
@BeforeHandshake
当有新的连接进入时，对该方法进行回调 注入参数的类型:Session、HttpHeaders...
```

```
@OnOpen
当有新的WebSocket连接完成时，对该方法进行回调 注入参数的类型:Session、HttpHeaders...
```

```
@OnClose
当有WebSocket连接关闭时，对该方法进行回调 注入参数的类型:Session
```

```
@OnError
当有WebSocket抛出异常时，对该方法进行回调 注入参数的类型:Session、Throwable
```

```
@OnMessage
当接收到字符串消息时，对该方法进行回调 注入参数的类型:Session、String
```

```
@OnBinary
当接收到二进制消息时，对该方法进行回调 注入参数的类型:Session、byte[]
```

```
@OnEvent
当接收到Netty的事件时，对该方法进行回调 注入参数的类型:Session、Object
```