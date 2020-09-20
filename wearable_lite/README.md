# [轻量级智能穿戴](https://developer.harmonyos.com/cn/docs/documentation/doc-references/lite-wearable-overview-0000001054283774)

* src/resources：此目录用于存放系统级资源配置文件，如应用图标等
* src/config.json：此文件是配置文件，主要定义了页面路由和应用信息，可根据 IDE 工程和页面创建向导自动完成填充
  * js 标签中包含了实例名称 name（默认值为 default）、页面路由信息 pages
  * pages 列表中第一个页面是应用的首页
  * 页面文件名不能使用组件名称，比如：text.hml、button.hml 等
* src/main/js/default/common 目录用于存放公共资源文件，比如：媒体资源和 JS 文件
* src/main/js/default/i18n 目录用于配置不同语言场景资源内容，比如应用文本词条，图片路径等资源

## HML

* HML（HarmonyOS Markup Language）是一套类 HTML 的标记语言，通过组件，事件构建出页面的内容。页面具备数据绑定、事件绑定、列表渲染、条件渲染等高级能力

## 效果图

| 代办列表页 | 添加代办页 | 代办详情页 |
| ------------ | ------------- | ------------- |
| ![image](https://user-images.githubusercontent.com/8949716/93716516-dbda1e00-fba2-11ea-97cf-2b60c29668a3.png) | ![image](https://user-images.githubusercontent.com/8949716/93716539-f4e2cf00-fba2-11ea-9c8c-35c5093fd42c.png) | ![image](https://user-images.githubusercontent.com/8949716/93716558-062bdb80-fba3-11ea-9e89-90818cffa5e8.png) |

