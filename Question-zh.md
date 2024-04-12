# react-native 新架构适配问题

## 前置条件

- react-native@0.72.5

- npx react-native info

```
System:
  OS: macOS 14.2.1
  CPU: (8) arm64 Apple M2
  Memory: 113.95 MB / 16.00 GB
  Shell:
    version: "5.9"
    path: /bin/zsh
Binaries:
  Node:
    version: 18.19.0
    path: ~/.nvm/versions/node/v18.19.0/bin/node
  Yarn:
    version: 1.22.19
    path: ~/.nvm/versions/node/v18.19.0/bin/yarn
  npm:
    version: 10.2.3
    path: ~/.nvm/versions/node/v18.19.0/bin/npm
  Watchman:
    version: 2023.12.04.00
    path: /opt/homebrew/bin/watchman
Managers:
  CocoaPods: Not Found
SDKs:
  iOS SDK:
    Platforms:
      - DriverKit 23.0
      - iOS 17.0
      - macOS 14.0
      - tvOS 17.0
      - watchOS 10.0
  Android SDK: Not Found
IDEs:
  Android Studio: 2023.2 AI-232.10300.40.2321.11567975
  Xcode:
    version: 15.0.1/15A507
    path: /usr/bin/xcodebuild
Languages:
  Java:
    version: 17.0.9
    path: /usr/bin/javac
  Ruby:
    version: 3.2.0
    path: /Users/yw.hao/.rvm/rubies/ruby-3.2.0/bin/ruby
npmPackages:
  "@react-native-community/cli": Not Found
  react:
    installed: 18.2.0
    wanted: 18.2.0
  react-native:
    installed: 0.72.5
    wanted: 0.72.5
  react-native-macos: Not Found
npmGlobalPackages:
  "*react-native*": Not Found
Android:
  hermesEnabled: true
  newArchEnabled: true
iOS:
  hermesEnabled: Not found
  newArchEnabled: Not found
```

## 背景

在 2024 年 4 月初进行了 ReactNative 新架构适配，但是在适配新架构的时候发现一些难解问题。此文档用来记录 RN 新架构适配常见问题。

## 问题梳理

| 序号 | 问题                                                                                                                                         | demo 链接 | Android  | Ios | harmony |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------- | --------- | -------- | --- | ------- |
| 1    | Animated.Scrollview 中使用 measureLayout 会失效                                                                                              | 已复现    | 存在问题 |     | 没问题  |
| 2    | Animated.Scrollview 卡顿问题                                                                                                                 | 未复现    |          |     |         |
| 3    | 在新架构中如果要进行 measure，则使用 ref.measure，但是目前通过 sectionLoist 获取的 ref 无法进行 ref.measure                                  |           |          |     |         |
| 4    | zindex 为-1 导致的 ios 应用崩溃 https://github.com/facebook/react-native/issues/40736                                                        |           |          |     |         |
| 5    | 安卓机字体加粗被截断                                                                                                                         | 未复现    |          |     |         |
| 6    | LayoutAnimation 在 Ios 不生效问题                                                                                                            | 未复现    |          |     |         |
| 7    | 当父容器为 View，子元素 Text 的 fontWeight 为 bold 的时候，子元素 Text 的文字会换行，如果父容器再加上 alignItems: 'center'，Text 就会被吃字  |           |          |     |
| 8    | 请求发送失败问题（应该还是和 animated 有关）                                                                                                 | 同问题 2  |          |     |         |
| 9    | FlatList 属性 stickyHeaderIndices 吸顶功能，刚进页面几率正常，再滑动几次就失效了                                                             | 未付现    |          |     |         |
| 10   | Animated.FlatList 滑动不流畅，很卡顿                                                                                                         | 同问题 2  |          |     |         |
| 11   | 在 ScrollView 滑动后，点击勾选组件，ScrollVIew 会闪动                                                                                        |           |          |     |         |
| 12   | ScrollView 里面用了一个横向的 FlatList，在 FlatList 滚动的时候 setState，ScrollView 会被滚动                                                 | 未复现    |          |     |         |
| 13   | 多个 Modal 覆盖会卡死                                                                                                                        | 未复现    |          |     |         |
| 14   | 字体截断问题                                                                                                                                 | 未复现    |          |     |         |
| 15   | 先设置 borderColor 后设置的 borderTopColor 无效 https://github.com/facebook/react-native/issues/38335                                        |           |          |     |         |
| 16   | 在 ios17.3.1 中 fontWeight 失效                                                                                                              |           |          |     |         |
| 17   | LottieAnimation 在 ios 异常                                                                                                                  |           |          |     |         |
| 18   | measure 的结果可能异常                                                                                                                       |           |          |     |         |
| 19   | 浮层隐藏后，浮层容器没有销毁                                                                                                                 | 同问题 13 |          |     |         |
| 20   | IOS Animated.timing 设置 useNativeDriver:true 后，内嵌按钮无法点击                                                                           |           |          |     |         |
| 21   | Android 路由组件设置 view.setNativeProps({renderToHardwareTextureAndroid: true})，跳转下一个页面（包含 Fabric 组件）页面漂移出屏幕，无法点击 |           |          |     |         |
| 22   | IOS TouchableOpacity 内嵌 Aminated.View ，Aminated.View 开启动画变更位置后，无法点击                                                         | 已复现    |          |     |         |
| 23   | 样式中使用了 zIndex 属性层级可能不生效,尝试添加 position:relative 属性后生效                                                                 |           |          |     |         |
| 24   | 组件需要设置默认高宽，不然布局展示可能发生截断                                                                                               |           |          |     |         |
| 25   | TextInput.defaultProps 值为 undefined                                                                                                        |           |          |     |         |
| 26   | IOS Image 样式设置 borderRadius 显示不全                                                                                                     |           |          |     |         |
| 27   | IOS minimumFontScale maxFontSizeMultiplier 不生效                                                                                            |           |          |     |         |
| 28   | Aminated.View 内嵌 Modal 组件，内部 TouchableOpacity 点击不响应                                                                              |           |          |     |         |
| 29   | FlatList、ScrollView stickyHeaderIndices 吸顶功能多次滑动后失效                                                                              | 未复现    |          |     |         |
| 30   | Aminated.View 、Animated.ScrollView 、layoutAnimation 动画卡顿                                                                               |           |          |     |         |
| 31   | 安卓 FlatList 调用 scrollToOffset，flatList 滚动卡顿。                                                                                       |           |          |     |         |
| 32   | TextInput 属性 maxLength 在 android 上不生效                                                                                                 | 未能复现  |          |     |         |
| 33   | 如果一个屏幕中有两个 scrolliview，那么有动画的 scrollivew 动画失效                                                                           | 已复现    |          |     |         |
