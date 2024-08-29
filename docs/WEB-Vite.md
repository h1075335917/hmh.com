# WEB-Vite

## Vite与Umi

> Vite : Vite是一个现代化的前端构建工具，它旨在提供快速的开发体验
>
> > 1. 快速的冷启动：Vite利用原生ES模块的特性，实现了按需编译，因此在启动项目时非常快速，无需等待整个应用编译完成。
> > 2. 热模块替换：Vite支持热模块替换（HMR），可以在开发过程中实时更新模块，提供更快的开发反馈。
> > 3. 原生ES模块支持：Vite直接使用浏览器原生ES模块，无需进行打包和转换，可以直接运行原始的JavaScript代码。
> > 4. 插件化架构：Vite采用了插件化架构，可以根据项目需求选择性地加载插件，从而提供更高的灵活性和定制性。
>
> Umi: Umi是一个基于React的可扩展企业级前端应用框架。它提供了完整的开发生态系统，包括路由管理、状态管理、构建和部署等功能
>
> > 1. 插件化的架构：Umi使用插件化的架构，可以根据需求选择性地加载插件，以扩展框架的功能。
> > 2. 内置的路由管理：Umi提供了灵活的路由配置和管理，支持动态路由和嵌套路由等功能。
> > 3. 内置的状态管理：Umi内置了常用的状态管理方案，例如dva和redux，使得状态管理变得简单和高效。
> > 4. 集成化的开发和构建工具：Umi提供了命令行工具和开箱即用的配置，简化了项目的开发和构建流程。
>
> Vite和Umi都是优秀的前端开发工具，但它们的定位和特点略有不同。Vite更注重于提供快速的开发体验和原生ES模块的支持，适用于小型项目和快速原型开发；而Umi则更注重于企业级应用开发，提供了完整的开发生态系统和插件化的架构，适用于中大型项目和复杂应用场景

## Vite + React

### 配置 Vite

当以命令行方式运行 `vite` 时，Vite 会自动解析项目根目录下名为 `vite.config.js` 的文件

#### 环境配置

##### .env

```sql
-- .env 类文件会在 Vite 启动一开始时被加载，而改动会在重启服务器后生效。
.env                # 所有情况下都会加载
.env.local          # 所有情况下都会加载，但会被 git 忽略
.env.[mode]         # 只在指定模式下加载
.env.[mode].local   # 只在指定模式下加载，但会被 git 忽略

-- 加载的环境变量也会通过 import.meta.env 以字符串形式暴露给客户端源码
-- 为了防止意外地将一些环境变量泄漏到客户端，只有以 VITE_ 为前缀的变量才会暴露给经过 vite 处理的代码
VITE_SOME_KEY=123
DB_PASSWORD=foobar
console.log(import.meta.env.VITE_SOME_KEY) // 123
console.log(import.meta.env.DB_PASSWORD) // undefined

-- 请注意，如果想要在环境变量中使用 $ 符号，则必须使用 \ 对其进行转义
KEY=123
NEW_KEY1=test$foo   # test
NEW_KEY2=test\$foo  # test$foo
NEW_KEY3=test$KEY   # test123

-- TypeScript 的智能提示
-- 在 src 目录下创建一个 env.d.ts 文件，接着按下面这样增加 ImportMetaEnv 的定义
/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 更多环境变量...
}
interface ImportMeta {
  readonly env: ImportMetaEnv
}
```