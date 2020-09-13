# [鸿蒙](https://developer.harmonyos.com/cn/documentation)学习笔记

## 安装并配置 Node.js

- [Windows 下载并安装 Node.js](https://developer.harmonyos.com/cn/develop/deveco-studio#download)

- 设置 npm 镜像

```shell
npm config set registry https://registry.npm.taobao.org
# 或
npm config set registry https://mirrors.huaweicloud.com/repository/npm
```

## 安装并配置 DevEco Studio

- [下载并安装 DevEco Studio](https://developer.harmonyos.com/cn/develop/deveco-studio#download)
- 创建工程后首次同步 gradle 比较慢，建议先手动下载 [gradle-5.4.1-all.zip](https://gradle.org/next-steps/?version=5.4.1&format=all) 安装包，并保存到如下目录中

```shell
C:\Users\Administrator\.gradle\wrapper\dists\gradle-5.4.1-all\3221gyojl5jsh0helicew7rwx
```
