# Linux

### Linux基本命令

>shell是一个接收由键盘输入的命令，并将其传递给操作系统来执行的程序.
>
>如果shell提示符的最后一个字符是#，而不是一个$符号，那么终端会话将享 【超级用户特权】.
>
>$  shell提示符

```shell
$ date 	#显示当前系统的时间和日期
$ cal  	#显示当月的日历
$ exit 	#结束终端会话
$ pwd  	# 查看当前工作目录
$ cd   	# 改变目录
```

```shell
$ ls    	#列出目录内容
$ ls -l 	#列出目录内容(详情)
$ ls -lt 	#按修改时间先后排序列出目录内容(详情)
$ ls -ltr 	#按修改时间先后排序列出目录内容(详情) 取反
-a 			#--all #列出所有文件，包括以点号开头的文件
-d 			#--directory #跟-l结合使用,查看当前目录的详情
-f 			#--classify #选项会在每个所列出的名字后面加上类型指示符(/)
-h 			#--human-readable #以长格式列出，以人们可读的方式而不是字节数来显示文件大小
-l 			#使用长格式显示结果
-r 			#以相反的顺序显示结果
-s 			#按文件大小对结果排序
-t 			#按修改时间排序
```

```shell
$ file	#确定文件类型
$ less	#查看文件内容
$ zless	#可查看压缩文件内容
```

```shell
$ cp 	#复制文件和目录
$ mv 	#移动或重命名文件和目录
$ mkdir #创建目录
$ rm 	#移除文件和目录
$ ln 	#创建硬链接和符号链接
```

```shell
$ mkdir dir1 			#创建一个目录
$ mkdir dir1 dir2 dir3 	#创建3个目录
```

```shell
$ cp item1 item2 		#将item1复制到item2
$ cp item1 item2 item3 	#将item1和item2复制到item3
-a 						#--archive #复制文件和目录及其属性，包括所有权和权限
-i 						#--interactive #在覆盖一个已存在的文件前，提示用户进行确认
-r 						#--recursive #递归地复制目录及其内容
-u 						#--update #只复制目标目录中不存在的文件或是目标目录相应文件的更新文件
-v 						#--verbose #复制文件时，显示信息性消息
```

```shell
$ mv item1 item2 		#将item1重命名为item2
$ mv item1 item2 item3 	#将item1和item2移动到item3
-i 						#--interactive #在覆盖一个已存在的文件前，提示用户进行确认
-u 						#--update #只复制目标目录中不存在的文件或是目标目录相应文件的更新文件
-v						#--verbose #移动文件时，显示信息性消息
```

```shell
$ rm item1 			#删除item1
$ rm item1 item2 	#删除item1和item2
-i 					#--interactive #在覆盖一个已存在的文件前，提示用户进行确认
-r 					#--recursive #递归地复制目录及其内容
-f 					#--force #忽略不存在的文件并无需提示确认
-v 					#--verbose #删除文件时，显示信息性消息
```

```shell
$ ln file link 		#创建硬链接
$ ln -s item link 	#创建符号链接,item可以是文件也可以是目录
```

```shell
$ type ls 	#显示ls命令的类型
$ which ls 	#显示可执行程序ls的位置
$ man ls 	#显示程序的手册页
$ apropos	#显示合适的命令
$ whatis	#显示命令的简要描述
$ info		#显示程序的info条目
```

```shell
$ cat 	#合并文件
$ sort	#对文本行排序
$ uniq	#报告或删除文件中重复的行
$ wc	#打印文件中的换行符、字和字节的个数
$ grep	#打印匹配行。 head：输出文件的第一部分内容。 
$ tail	#输出文件的最后一部分内容。 
$ tee	#读取标准输入的数据，并将其内容输出到标准输出和文件中
```

```shell
$ ls -l /usr/bin > ls-output.txt 	#将ls -l /usr/bin展示的信息写入到ls-output.txt中
```

```shell
# 校验时间
$ ntpdate cn.pool.ntp.org 
```

```shell
# 查看系统
$ cat /etc/redhat-release
```

### Windows命令

#### 快速删除文件夹和子文件夹

```shell
rmdir 文件路径 /S /Q
del 文件路径 /S /Q 
/* 注意：/S 表示除本身外，还将删除目录下的所有子目录和文件，/Q 表示安静模式，删除时不需要经过确认 */
```

### docker

#### 基本命令

```shell
# 启动
$ systemctl start docker
# 停止
$ systemctl stop docker
# 重启
$ systemctl restart docker
# 查看状态
$ systemctl status docker
# 开机启动
$ systemctl enable docker
# 查看概要信息
$ docker info
# 查看帮助文档
$ docker --help
# 查看容器内部运行的进程
$ docker top 容器
# 查看 Docker 的底层信息
$ docker inspect 容器
```

#### 安装docker容器

```shell
# 卸载旧版本
$ sudo yum remove docker \
                  docker-client \
                  docker-client-latest \
                  docker-common \
                  docker-latest \
                  docker-latest-logrotate \
                  docker-logrotate \
                  docker-selinux \
                  docker-engine-selinux \
                  docker-engine
                  
# 使用 yum 安装
$ sudo yum install -y yum-utils
# 使用国内源
$ sudo yum-config-manager \
    --add-repo \
    https://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
    
# 安装 Docker
$ sudo yum install docker-ce docker-ce-cli containerd.io

# CentOS8 额外设置，由于 CentOS8 防火墙使用了 nftables，但 Docker 尚未支持 nftables， 我们可以使用如下设置使用 iptables：
# 修改配置（FirewallBackend=iptables）
$ vim /etc/firewalld/firewalld.conf
# 或者执行如下命令
$ firewall-cmd --permanent --zone=trusted --add-interface=docker0
$ firewall-cmd --reload

# 使用脚本自动安装
$ curl -fsSL test.docker.com -o get-docker.sh
$ curl -fsSL get.docker.com -o get-docker.sh
$ sudo sh get-docker.sh --mirror Aliyun
$ sudo sh get-docker.sh --mirror AzureChinaCloud

# 启动 Docker
sudo systemctl enable docker
sudo systemctl start docker

# 测试docker是否安装成功
docker run --rm hello-world
```
#### 安装docker-compose

```shell
# github安装
$ sudo curl -L "https://github.com/docker/compose/releases/download/v2.2.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

# 高速安装
$ curl -L https://get.daocloud.io/docker/compose/releases/download/v2.4.1/docker-compose-`uname -s`-`uname -m` > /usr/local/bin/docker-compose

# 启用权限
$ sudo chmod +x /usr/local/bin/docker-compose

# 问题
Warning: the “docker“ command appears to already exist on this system
# 原因
安装的docker-compose有问题，从GitHub安装
```

#### 镜像命令

##### 基本命令

```shell
# 搜索镜像 
$ docker search 镜像名称
# 拉取镜像
$ docker pull 镜像名称 
# 查看镜像
$ docker images
# 启动镜像（宿主机9000端口关联容器中的9000端口，并给容器起名为portainer-test
$ docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name prtainer-test portainer/portainer 
# 删除镜像
docker image rm <镜像1> [<镜像2>]
```

```shell
# 重命名复制一个镜像
$ docker tag myhello-world:latest h1075335917/myhello-world:latest
```

```shell
# 登录
$ docker login
# 退出
$ docker logout
# 推送镜像到仓库
$ docker push h1075335917/myhello-world:latest
```

##### 微服务镜像命令

```shell
配置文件：需要改镜像版本
nacos本地配置 -- 还原成${userName:nacos}模式
1./usr/local/install/docker_project目录下docker-composeduibi.yml查看镜像名称
version: '2'
services:
  enfc-gateway:
    container_name: enfc-gateway
    image: llyf999/enfc-gateway:v1.1
image为镜像名称
container_name为容器名称

2.删除容器和镜像 , docker stop 容器名 , docker rm 容器名 , docker rmi 镜像id

3.打包镜像
docker build -f **DockerFile -t 镜像名 ./
**DockerFile为/usr/local/dockerBuilder目录下的对应模块的DockerFile,如thirdPartyDockerfile
镜像名就是image
或者
docker-compse build 服务名

4.生成容器
docker-compose -f 指定文件 up -d 容器名
这里指定文件为docker-composeduibi.yml
容器名为container_name

5.上传镜像
docker push 镜像名
镜像名为image

6.保存镜像
docker save llyf999/enfc-face:v1.2c3c4 > ./enfc-face-c3c4-images-0420.tar


用户模块和人脸模块需要挂载图片路径


7.镜像导入导出
导出镜像
docker save 镜像名称:版本号 > 文件名.tar
导入镜像
docker load < 文件名.tar
镜像重命名
sudo docker image tag ef7da1212d31  llyf999/enfc-face:v1.2.3c3c4

8.进入容器
docker exec -it system-start /bin/bash
```

### 部署

#### 部署redis

```sql
-- docker部署
-- 拉取镜像
docker pull redis:latest
-- 运行容器
docker run -itd --name redis -p 6379:6379 redis

-- 测试redis是否正常
-- 进入容器
docker exec -it redis /bin/bash
-- 进入客户端
redis-cli
-- 执行redis命令

-- 修改最大内存
docker exec -it redis redis-cli -h localhost -p 6379 info | grep memory
docker exec -it redis redis-cli -h localhost -p 6379 config get maxmemory
docker exec -it redis redis-cli -h localhost -p 6379 config set maxmemory 128m
```

```sql
-- 文件部署
-- 指定目录下
mkdir /usr/local/redis
-- 下载
wget http://download.redis.io/releases/redis-7.0.10.tar.gz
-- 解压
tar -zvxf redis-5.0.7.tar.gz
-- 编译
make
-- 安装
make PREFIX=/usr/local/redis install
-- 修改配置文件
vim redis.conf
修改 daemonize yes
修改 requirepass 密码
修改 bind 0.0.0.0
-- 启动
./src/redis-server ./redis.conf
```

#### docker部署nacos

```sql
-- 下载nacos docker-compose
git clone --depth 1 https://github.com/nacos-group/nacos-docker.git
cd nacos-docker

-- 修改版本并设置内存
version: "2"
services:
  nacos:
    image: nacos/nacos-server:v2.2.2
    container_name: nacos-standalone
    environment:
      - PREFER_HOST_MODE=hostname
      - MODE=standalone
      - JVM_XMS=128m
      - JVM_XMX=128m
    volumes:
      - ./standalone-logs/:/home/nacos/logs
    ports:
      - "8848:8848"
      - "9848:9848"
      
-- 单机启动
docker-compose -f example/standalone-derby.yaml up -d
```

#### 部署jdk

##### 文件部署jdk

```sql
-- 卸载已有的openJDK
-- 查询
rpm -qa |grep java
-- 删除
rpm -e --nodeps xxx

-- 安装 + 配置JDK
vim /etc/profile

export JAVA_HOME=/home/local/java/jdk1.8.0_271
export PATH=$JAVA_HOME/bin:$PATH
export CLASSPATH=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar

source /etc/profile 
```

##### docker部署jdk

```sql
-- 拉镜像
docker pull codenvy/jdk8_maven3_tomcat8
-- 启动
docker run -di --name=jdk8 codenvy/jdk8_maven3_tomcat8
-- 
docker exec -it jdk8 /bin/bash
-- 
Java -version
```

#### 微服务部署

##### 部署auth

```sql
-- authDockerfile

# 基础镜像使用java
FROM codenvy/jdk8_maven3_tomcat8
# 作者
MAINTAINER h1075335917@gmail.com
# VOLUME 指定了临时文件目录为/tmp。
# 其效果是在主机 /var/lib/docker 目录下创建了一个临时文件，并链接到容器的/tmp
VOLUME /tmp 
ADD ./hmh_cloud_auth-1.0-SNAPSHOT.jar ./
# 运行jar包
CMD sleep 20;java -Djava.security.egd=file:/dev/./urandom -jar hmh_cloud_auth-1.0-SNAPSHOT.jar
```

```sql
-- docker-compose.yaml
version: '2'
services:
  hmh-cloud-auth:
    restart: always
    container_name: hmh-cloud-auth
    build:
      context: ./
      dockerfile: authDockerfile
    image: hmh-cloud-auth
    ports:
      - 9992:9992
```

```sql
-- 打包镜像
docker build -f authDockerfile -t hmh-cloud-auth .
-- 启动容器
docker-compose -f docker-compose.yaml up -d
```

#### 部署elasticsearch

##### Linux文件部署elastic

```sql
-- 下载文件 Linux X86_64
https://www.elastic.co/cn/downloads/elasticsearch
-- 解压到相应目录
tar -zxvf elasticsearch-8.8.0-linux-x86_64.tar.gz -C /usr/local
-- 修改配置（需要将配置文件中权限关闭）
cd /usr/local/elasticsearch-8.8.0/config/
vim elasticsearch.yml
-- --------------配置内容开始--------------------
node.name: node-1
path.data: /usr/local/elasticsearch-8.8.0/data
path.logs: /usr/local/elasticsearch-8.8.0/logs
network.host: 127.0.0.1
http.host: 0.0.0.0
http.port: 9200
discovery.seed_hosts: ["127.0.0.1"]
cluster.initial_master_nodes: ["node-1"]
-- --------------配置内容结束--------------------
-- 创建es用户 因为ElasticSearch不支持Root用户直接操作，因此我们需要创建一个es用户
useradd es
chown -R es:es /usr/local/elk/elasticsearch-7.17.0/
-- 修改内存
vim jvm.options
-Xms216m
-Xmx216m
-- 切换用户成es用户进行操作
su - es
-- 后台启动
/usr/local/elk/elasticsearch-7.17.0/bin/elasticsearch -d
```

##### docker部署elastic

```sql
-- 拉镜像
docker pull elasticsearch:7.17.3
docker pull logstash:7.17.3
docker pull kibana:7.17.3
```

##### Linux文件部署logstash

```sql
-- 下载文件 Linux X86_64
https://www.elastic.co/cn/downloads/logstash
-- 解压到相应目录
tar -zxvf logstash-8.8.0.tar.gz -C /usr/local
-- 新增配置文件
cd /usr/local/logstash-8.8.0/bin
vim logstash-elasticsearch.conf
-- -----配置内容开始------------
input {
	stdin {}
}
output {
	elasticsearch {
		hosts => '175.178.164.134:9200'
	}
	stdout {
		codec => rubydebug
	}
}
-- -----配置内容结束------------
-- 启动
./logstash -f /usr/local/elk/logstash-8.8.0/bin/logstash-elasticsearch.conf -d
```

##### Linux文件部署kibana

```sql
-- 下载文件 Linux X86_64
tar -zxvf kibana-8.8.0-linux-x86_64.tar.gz -C /usr/local
-- 修改配置
cd /usr/local/kibana-8.8.0/config
vim kibana.yml
-- -----配置内容开始------------
server.port: 5601 
server.host: "0.0.0.0" 
elasticsearch.hosts: ["http://175.178.164.134:9200"] 
-- 8.0后不需要该配置
# kibana.index: ".kibana"
-- -----配置内容结束------------
-- 授权es用户
chown -R es:es /usr/local/kibana-8.8.0/
-- 启动
su - es
/usr/local/elk/kibana-7.17.0/bin/kibana &
-- 访问
http://175.178.164.134:5601
```

### 端口查杀

#### Linux终止进程

```shell
# 查询进程
$ ps aux | grep XXXX 或 ps -ef | grep XXXX
# 杀进程
$ kill -9 XXX
```

```shell
# Linux端口占用（Linux 查看端口占用情况可以使用 lsof 和 netstat 命令）

# lsof（lsof(list open files)是一个列出当前系统打开文件的工具）
$ lsof -i:端口号
# lsof其它命令
$ lsof -i:8080：查看8080端口占用
$ lsof abc.txt：显示开启文件abc.txt的进程
$ lsof -c abc：显示abc进程现在打开的文件
$ lsof -c -p 1234：列出进程号为1234的进程所打开的文件
$ lsof -g gid：显示归属gid的进程情况
$ lsof +d /usr/local/：显示目录下被进程开启的文件
$ lsof +D /usr/local/：同上，但是会搜索目录下的目录，时间较长
$ lsof -d 4：显示使用fd为4的进程
$ lsof -i -U：显示所有打开的端口和UNIX domain文件


# netstat（用于显示 tcp，udp 的端口和进程等相关情况）
$ netstat -tunlp 		
$ netstat -tunlp | grep 端口号
# 其它命令
$ netstat -ntlp   				# 查看当前所有tcp端口
$ netstat -ntulp | grep 80   	# 查看所有80端口使用情况
```

#### Windows终止进程

```shell
$ netstat -ano | findstr "端口号"
$ netstat -tunlp|grep {port}
$ taskkill /pid 5588 /f
```

### 解压压缩

```shell
# 解压tar.gz
$ tar -zxvf xxx.tar.gz
# 解压war包
$ unzip -oq jeecg-boot-module-system-2.0.2.war -d ./

# 压缩成zip格式
$ zip -q -r /data/xxx/Generatefile_name.zip OridinaryFile_name/
# 压缩成tar.gz格式
$ tar -zcvf /data/xxx/Generatefile_name.tar.gz OridinaryFile_name
```

### 环境配置

##### Jdk配置

```shell
# 编辑配置环境文件
vim /etc/profile
# jdk环境
export JAVA_HOME=/usr/local/java/jdk1.8.0_301
export JRE_HOME=${JAVA_HOME}/jre
export CLASSPATH=.:${JAVA_HOME}/lib:${JRE_HOME}/lib:$CLASSPATH
export JAVA_PATH=${JAVA_HOME}/bin:${JRE_HOME}/bin
export PATH=$PATH:${JAVA_PATH}
# 配置生效
source /etc/profile
```

##### tomcat配置

```xml
<!--  Tomcat指定项目路径(可在service.xml或context.xml中配置) -->
<Context path="/" docBase="/usr/local/jar-base/" reloadable="false" debug="0"></Context>

<!-- Tomcat指定运行路径 -->
<Host name="localhost" appBase="webapps"
            unpackWARs="true" autoDeploy="true">
    <Valve className="org.apache.catalina.valves.AccessLogValve" directory="logs"
           prefix="localhost_access_log" suffix=".txt"
           pattern="%h %l %u %t &quot;%r&quot; %s %b" />
</Host>
```

###### 控制台乱码

设置`logging.properties`，UTF-8改为GBK

###### tomcat部署，请求中文乱码

在`conf/server.xml`中的`<Connector>`中添加两个设置

- `useBodyEncodingForURI="true" ` ：设置POST和GET使用相同编码
- `URIEncoding="UTF-8"` //对URI使用utf-8编码处理

### Linux信息

```shell
# 查gc内存
jmap -heap pid

# 查进程中线程数
top -H -p 进程PID
pstree -p 进程pid
cat /proc/线程pid/status
pstree -p 6264 |wc -l

# cpu数
cat /proc/cpuinfo| grep "physical id"| sort| uniq| wc -l
# 核心数/cpu
grep 'core id' /proc/cpuinfo | sort -u | wc -l
# 线程数/核
grep 'processor' /proc/cpuinfo | sort -u | wc -l

#  ping端口
telnet ip port
```

### 查看日志

```shell
# docker启动查看Tomcat日志：
$ docker logs -f tomcat 
$ docker logs -f -t --since="时间" --tail=10 容器名称
--since 	# 此参数指定了输出日志开始日期，即只输出指定日期之后的日志。
-f 			# 查看实时日志
-t			# 查看日志产生的日期
-tail=10 	# 查看最后的10条日志。

# 直接查看日志
$ tail -100f test.log

# 清除文件内容 使用echo命令清空文件
$ echo "" > access.log
```

### 开放端口

```shell
# 查询已开放的端口:
$ netstat -ntulp | grep 端口号
# 查询指定端口是否已开:
$ firewall-cmd --query-port=666/tcp
# 添加指定需要开放的端口
$ firewall-cmd --add-port=123/tcp --permanent
# 重载入添加的端口
$ firewall-cmd --reload
# 查询指定端口是否开启成功
$ firewall-cmd --query-port=123/tcp
# 移除指定端口
$ firewall-cmd --permanent --remove-port=123/tcp
```

### docker数据库操作

```shell
# 进入docker的mysql容器并登录查看数据库
$ docker exec -it {image} bash   
# 登录mysql
$ mysql -u root -p{passwor}  
# 查看所有数据库
$ show databases  
# 使用数据库
$ user {dbName} 
# 查看所有表
$ show table 
# 可以开始写语句了
$ select * from {table} 
# 退出
$ exit 
```

### 服务启动命令

```shell
# nacos单机启动
$ startup.cmd -m standalone
# redis启动命令
$ redis-server.exe redis.windows.conf --maxmemory 200M
# mqtt启动命令
emqttd console
```

### 修改容器jar包配置

```shell
# 1.进入容器
$ docker exec -it test1 /bin/bash
# 2.查看jar包文件
$ jar tf xxx.jar
# 3.找到对应的配置文件，提取文件
$ jar xf web_scoket.jar BOOT-INF/classes/application.yml
# 4.退出容器将文件cp出来编辑
$ docker cp test1:/BOOT-INF/classes/application.yml application.yml
# 5.将修改好的文件copy回原来的容器
$ docker cp application.yml test1:/BOOT-INF/classes/application.yml
# 6.将文件copy回jar中
$ jar uf web_scoket.jar BOOT-INF/classes/application.yml
# 7.重启容器
$ docker restart
```

### exe设置为服务

> 1. 下载 [WinSW x64.exe](https://github.com/winsw/winsw/releases)
>
> 2. 将exe文件和WinSW放入同一个文件夹，新建配置service.xml
>
>    ```xml
>    <!-- 
>      命令nacos示例，xml名称为NacosWinService.xml，WinSW改名为NacosWinService.exe
>    -->
>    <?xml version="1.0" encoding="UTF-8"?>
>    <service>
>      <id>NacosWinService</id>
>      <name>NacosWinService</name>
>      <description>NacosWinService</description>
>      <executable>%BASE%\startup.cmd</executable>
>      <arguments>-m standalone</arguments>
>      <logpath>%BASE%\serviceLogs</logpath>
>    </service>
>    ```
>
>    ```xml
>    <!-- 
>      双击启动的exe示例
>    -->
>    <?xml version="1.0" encoding="UTF-8"?>
>    <service>
>      <id>syncthingService</id>
>      <name>syncthingService</name>
>      <description>syncthingService</description>
>      <executable>%BASE%\syncthing.exe</executable>
>      <logpath>%BASE%\serviceLogs</logpath>
>    </service>
>    ```
>
> 3. 执行命令，安装服务
>
>    NacosWinService.exe install
>
> 4. 卸载服务
>
>    NacosWinService.exe uninstall

### nohup 命令

```sql
-- nohup 英文全称 no hang up（不挂起），用于在系统后台不挂断地运行命令，退出终端不会影响程序的运行。
-- nohup 命令，在默认情况下（非重定向时），会输出一个名叫 nohup.out 的文件到当前目录下，如果当前目录的 nohup.out 文件不可写，输出重定向到 $HOME/nohup.out 文件中。

-- 语法
nohup Command [ Arg … ] [　& ]

-- 参数说明：
Command：要执行的命令。
Arg：一些参数，可以指定输出文件。
&：让命令在后台执行，终端退出后命令仍旧执行。
```

### 查看内存

> df：查看磁盘驱动器当前的可用空间
>
> free：显示可用内存

> ps -aux | sort -k4nr | head -10：查看使用内存最多的10个进程
>
> ps aux --sort -rss：按内存大小排序，打印出所有的进程
>
> ps -aux | sort -k3nr | head -3：查使用CPU最多的3个进程

> du：显示每个子目录的磁盘使用量
>
> du-a ：显示每个文件的使用量
>
> du -a | sort -n -r：-n选项用于数值排序，-r选项用于逆序排列
>
> du -a | sort -n -r | head -n 10：占用空间最大的前10个文件

### 本地 | linux文件

实现本地与Linux服务器文件互传的常用方式：scp命令、sftp命令、lrzsz程序，xftp软件

**lrzsz程序**

- 使用`rpm -qa lrzsz`检查是否安装，未安装需执行  yum -y install lrzsz 进行安装。

- 使用`rz` 、`rz -be` 上传本地文件到linux。使用`sz`下载linux上文件到本地

### git

#### git用户配置

git config命令的–global参数，用了这个参数，表示你这台机器上所有的Git仓库都会使用这个配置，当然也可以对某个仓库指定不同的用户名和Email地址。

```shell
# 1.查看git配置信息
$ git config --list

# 2.查看git用户名、密码、邮箱的配置
$ git config user.name
$ git config user.password
$ git config user.email
 
# 3.设置git用户名、密码、邮箱的配置
$ git config user.name 用户名
$ git config user.password 密码
$ git config user.email 邮箱
# 设置git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name 用户名
$ git config --global user.password 密码
$ git config --global user.password 邮箱
 
# 4.修改git用户名、密码、邮箱的配置（跟设置语法一样，没有用户名就添加，有了用户名就修改）
$ git config user.name "freedom"
# 修改git用户名、密码、邮箱的配置（全局配置）
$ git config --global user.name "freedom"
```

#### git分支操作

```shell
# 克隆
$ git.exe clone --progress --branch 分支名称 -v "远程仓库地址" "本地存储地址"
# 更新远程分支列表 根目录启动 git bash
$ git remote update origin --prune
```

#### git回滚

```shell
# 本地回滚到指定版本
$ git reset --hard  66b9f9481b45b562a1949898504f74e3695a
# 提交远程回滚（强制）
$ git push -f
```

#### git更新

```shell
# 方式一：下载地址
https://git-scm.com/download/win
# 方式二：命令更新
$ git update-git-for-windows
```

#### 目录初始化GIT

1. `git init`

   此时会在目录中创建一个 .git 隐藏文件夹

2. `git add .`

   如果你本地已经有 .gitignore 文件，会按照已有规则过滤不需要添加的文件。如果不想要添加所有文件，可以把 . 符号换成具体的文件名

3. `git commit -m “Initial commit”`

4. `git remote add origin https://github.com/xxx.git`

5. `git remote -v `

6. `git push origin master`

### 脚本

#### Linux定时任务脚本设置

> 1. 新建脚本文件，如 `clear_tomcat_log.sh`
>
> 2. 编辑定时任务文件  `vim /etc/crontab`
>
> 3. 新增定时任务
>
>    ```sh
>    # 十秒钟执行一次clear_tomcat_log.sh（必须为全路径, cron表达式第一位为分钟）
>    $ */10 * * * * root /usr/local/clear_tomcat_log.sh
>    ```
>
> 4. 配置生效 `service crond reload/restart`

#### windows查杀端口号（BAT脚本）

```bash
@echo off & setlocal EnableDelayedExpansion
set obj[0]=9999
set port=0
set pid=0
echo ==================== 端口号查杀工具 ========================
for /f "usebackq delims== tokens=1-2" %%a in (`set obj`) do (
    set port=%%b
	echo 开始查找端口号【!port!】所占用进程
    for /f "tokens=5" %%m in ('netstat -aon ^| findstr ":%%b"') do (
        set pid=%%m
    )
    if "!pid!"=="0" (
        echo 端口号【!port!】没有占用
    ) else (
        echo 端口号【!port!】相关进程以杀死
        taskkill /f /pid !pid!
    )
    set pid=0
)
pause
```

### 问题

#### 未找到vim命令

```shell
$ rpm -qa |grep vim
$ yum -y install vim-minimal
$ yum -y install vim-enhanced
```



