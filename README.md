# React Native 新架构适配问题记录

[![React Native](https://img.shields.io/badge/react--native-0.72.5-61DAFB?logo=react&logoColor=white)](https://github.com/facebook/react-native/releases/tag/v0.72.5)
[![React](https://img.shields.io/badge/react-18.2.0-20232A?logo=react&logoColor=61DAFB)](https://react.dev/)
[![Node](https://img.shields.io/badge/node-%3E%3D16-339933?logo=node.js&logoColor=white)](https://nodejs.org/)

这是一份 **React Native 0.72.5 新架构（Fabric）适配问题的学习与复现记录**，不是可上线的业务应用。仓库用两个几乎平行的示例工程对照旧架构和新架构，并在问题清单里记下 2024 年 4 月适配时遇到的现象。

- 中文问题清单：[Question-zh.md](./Question-zh.md)（33 条，含复现情况）
- 英文对照：[Question-en.md](./Question-en.md)

## 仓库里有什么

| 目录 | 作用 |
| --- | --- |
| [rnDemo0725](./rnDemo0725/) | 旧架构示例。`android/gradle.properties` 中 `newArchEnabled=false`，Hermes 开启，调试服务端口 `8082` |
| [rnDemo0725_NewArch](./rnDemo0725_NewArch/) | 新架构示例。Android 侧 `newArchEnabled=true`，`applicationId` 为 `com.rndemo0725_newArch`，可与旧架构包装在同一台设备上 |
| [Question-zh.md](./Question-zh.md) | 问题现象、作者当时的 `npx react-native info`，以及 Android / iOS / Harmony 的记录 |
| [Question-en.md](./Question-en.md) | 同一份清单的英文版（条目止于第 32 条） |

两个示例都是独立的 React Native 工程，包名同为 `rnDemo0725`，`package.json` 与 `yarn.lock` 内容一致。入口是各自的 `index.js`，用 [react-native-navigation](https://wix.github.io/react-native-navigation/) 注册页面并设成一个 Stack，首页标题为 Home。

两个工程的 `ios/Podfile` 都没有设置 `RCT_NEW_ARCH_ENABLED`。当前提交里，新架构开关只体现在 Android 的 `newArchEnabled=true`。iOS 若要打开 Fabric，需要在执行 `pod install` 前自行设置该环境变量。

子目录里的 `README.md` 只有一行标题（`React Native Old Arch` / `React Native New Arch`），运行说明以本文件为准。

## 示例页面

首页按钮与 `index.js` 里注册的页面如下。问题编号对应 [Question-zh.md](./Question-zh.md) 里作者自己的记录；「复现情况」一列也来自该文档，本仓库没有附带截图或自动化结果。

| 首页按钮 | 源文件 | 页面在做什么 | 问题清单 |
| --- | --- | --- | --- |
| AnimatedOfMeasureLayoutInValid | `src/pages/AnimatedOfMeasureLayout.tsx` | 在 `Animated.ScrollView` 里对目标视图调用 `measureLayout` 再 `scrollTo`。新架构页注释写明不再把 `findNodeHandle` 的结果传给 `measureLayout`，改为直接传 ScrollView 的 ref | #1，文档记为已复现（Android） |
| FlatListStuckAndStopped | `src/pages/FlatListStuckAndStopped.tsx` | 并排一个纵向 `ScrollView` 和一个带动画 / 下拉刷新的列表。新架构页注释记「072 性能很差」 | 与滚动卡顿相关，见 #2、#10 |
| SectionListRefInvlid | `src/pages/SectionListRefInvlid.tsx` | `SectionList` 分组头通过 `measureLayout` 测量后再 `scrollToLocation`。新架构页注释：滚到底部再点按钮，旧架构能回到顶部，换成 ref 后新架构仍然不行 | #3 |
| ModalOverModal | `src/pages/ModalOverModal.tsx` | 四层透明 `Modal` 嵌套开关。新架构页注释提到弹窗打不开，并怀疑与业务里的 CRN Modal 有关，需要再确认 | #13，文档记为未复现 |
| FlatlistInScrollview | `src/pages/FlatlistInScrollview.tsx` | 纵向 `ScrollView` 里放横向 `FlatList`，点击条目会 `setState`。新架构页注释写点击无效 | #12，文档记为未复现 |
| TextInputInvalid | `src/pages/TextInputInvalid.tsx` | `TextInput` 设置 `maxLength={10}`、`keyboardType="numeric"`。新架构页注释写长度限制不生效 | #32，文档记为未能复现 |
| AnimatedTranslate | `src/pages/AnimatedTranslate.tsx` | `TouchableOpacity` 包住 `useNativeDriver: true` 的位移动画。新架构页注释：072 新架构下，视图移动后的位置点不中 | #22，文档记为已复现 |
| TextInView | `src/pages/TextInView.tsx` | 宽度 100 且 `alignItems: 'center'` 的容器里放 `fontWeight: 'bold'` 的文字 | #7。源文件只在 `rnDemo0725` |
| StickyHeaderIndices | `src/pages/StickyHeaderIndices.tsx` | 一侧 `ScrollView` 使用 `StickyHeaderComponent`，另一侧 `Animated.FlatList` 设置 `stickyHeaderIndices`。新架构页注释：072 上 `StickyHeaderComponent` 似乎不生效 | #9、#29，文档记为未复现 |
| LayoutAnimation | `src/pages/LayoutAnimation.tsx` | 左侧 `Animated.ScrollView` 驱动右侧透明度 / 位移，按钮触发 `LayoutAnimation`。新架构页注释记得 072 新架构有性能问题 | #6，文档记为未复现 |
| AnimatedBackgroundColor | `src/pages/AnimatedBackgroundColor.tsx` | 滚动偏移插值成背景色。旧架构页 `useNativeDriver: true`；新架构页改为 `false`，注释说明背景色动画不应走原生驱动 | 页内注释，清单无单独编号 |
| AnimatedDriverJsOrNative | `src/pages/AnimatedDriverJsOrNative.tsx` | 同一次滚动同时驱动 JS 线程上的颜色插值和原生驱动的透明度 | 源文件只在 `rnDemo0725` |
| TabScrollview | `src/pages/TabScrollview/` | 三个 Tab，每个 Tab 是一条 `Animated.ScrollView`，切换时走 `LayoutAnimation` | 页内无单独问题编号 |
| ManyElements | `src/pages/ManyElements.tsx` | 把列表、多层 Modal、Tab、图片、下拉刷新放在同一屏。新架构页注释：此 demo 在 072 new arch 有性能问题 | 综合页，清单无单独编号 |

`rnDemo0725_NewArch/index.js` 和首页仍然注册了 `TextInView`、`AnimatedDriverJsOrNative`，对应源文件不在该目录中。在新架构工程里点这两项时，模块加载会失败。

## 技术栈

版本以 `package.json` 为准；`yarn.lock` 中实际锁定的 navigation 版本一并写出。

| 依赖 | 版本 |
| --- | --- |
| react | 18.2.0 |
| react-native | 0.72.5 |
| react-native-navigation | `^7.38.4`（lockfile 解析为 7.39.1） |
| TypeScript | 4.8.4 |
| Metro（`metro-react-native-babel-preset`） | 0.76.8 |
| Jest / babel-jest | ^29.2.1 |
| ESLint（`@react-native/eslint-config`） | ^8.19.0 / ^0.72.2 |
| Hermes | 两个工程均为 `hermesEnabled=true` |
| Android Gradle Plugin 配套 | Gradle 8.0.1，compileSdk / targetSdk 33，minSdk 21，buildTools 33.0.0，NDK 23.1.7779620，Kotlin 1.7.10 |
| Flipper | 0.182.0（`android/gradle.properties`） |
| iOS | `Podfile` 使用 React Native 提供的 `min_ios_version_supported`（0.72.5 为 12.4）；CocoaPods `~> 1.12`，Ruby `>= 2.6.10`（见各工程 `Gemfile`） |

导航是原生模块：Android `MainApplication` 继承 `NavigationApplication`，iOS `AppDelegate.mm` 引入 `ReactNativeNavigation`。改完 JS 后第一次跑，需要先完成对应平台的原生安装。

## 目录结构

```text
.
├── Question-zh.md                 # 中文问题清单与当时的环境信息
├── Question-en.md                 # 英文问题清单
├── rnDemo0725/                    # 旧架构（newArchEnabled=false）
│   ├── index.js                   # 注册页面并 Navigation.setRoot
│   ├── src/Home.tsx               # 首页入口列表
│   ├── src/pages/                 # 各复现页
│   ├── android/                   # applicationId com.rndemo0725，调试端口 8082
│   ├── ios/                       # Xcode 工程与 Podfile
│   └── __tests__/App.test.tsx     # CLI 脚手架测试，见下方说明
└── rnDemo0725_NewArch/            # 新架构 Android（newArchEnabled=true）
    ├── index.js
    ├── src/pages/                 # 同名页面，部分带适配注释；缺少 TextInView、AnimatedDriverJsOrNative
    └── android/                   # applicationId com.rndemo0725_newArch
```

仓库中的图片只有 Android 启动图标（`android/app/src/main/res/mipmap-*`），没有界面截图。

## 环境要求

- Node.js `>= 16`（`package.json` 的 `engines`）。[Question-zh.md](./Question-zh.md) 记录作者当时使用 Node 18.19.0、Yarn 1.22.19、npm 10.2.3。
- Yarn 1（仓库带 `yarn.lock`，没有 npm lockfile）。
- Android：Android SDK，已连接的设备或模拟器。作者记录的 JDK 为 17。
- iOS：macOS、Xcode、Ruby `>= 2.6.10`、CocoaPods `~> 1.12`。
- 两个示例不要同时占用同一个 Metro 端口。旧架构 Gradle 写了 `reactNativeDevServerPort=8082`，启动 Metro 时需要带上 `--port 8082`。新架构工程使用 Metro 默认端口 8081。

## 安装与运行

在对应工程目录内安装，仓库根目录没有 `package.json`。

### 旧架构 `rnDemo0725`

```bash
cd rnDemo0725
yarn install --frozen-lockfile
yarn start --port 8082
```

另开一个终端，仍在 `rnDemo0725` 目录：

```bash
yarn android
```

iOS（仅 macOS）：

```bash
bundle install
cd ios && bundle exec pod install && cd ..
yarn ios
```

### 新架构 `rnDemo0725_NewArch`

```bash
cd rnDemo0725_NewArch
yarn install --frozen-lockfile
yarn start
```

另开终端：

```bash
yarn android
```

iOS 命令与旧架构相同。当前 `Podfile` 未打开新架构；若要在 iOS 上启用 Fabric，在 `pod install` 前设置 `RCT_NEW_ARCH_ENABLED=1`。

其他脚本（两个工程相同）：

| 命令 | 作用 |
| --- | --- |
| `yarn lint` | `eslint .` |
| `yarn test` | `jest`。当前会失败，见备注 |

### 本环境已验证的步骤

在 Linux、Node 18.20.8、Yarn 1.22.22 上验证了 `rnDemo0725`：

- `yarn install --frozen-lockfile` 成功。两个工程的 `package.json` 与 `yarn.lock` 相同。
- `yarn start --port 8082` 能启动 Metro v0.76.8。
- `yarn test` 失败：`__tests__/App.test.tsx` 引用 `../App`，工程里没有 `App.tsx` / `App.js`，实际入口是 `index.js`。`rnDemo0725_NewArch` 的测试文件相同。
- `yarn android`、`yarn ios`、`pod install` 未验证。本环境没有 Android SDK、模拟器、Xcode、Ruby 和 CocoaPods。

## 备注

- 问题清单里多数条目没有单独的 demo 页面，复现状态以 [Question-zh.md](./Question-zh.md) 表格为准。
- 新架构工程首页仍保留 `TextInView`、`AnimatedDriverJsOrNative` 两个按钮，源文件只存在于 `rnDemo0725/src/pages/`。
- 作者记录的环境信息（macOS 14.2.1、Apple M2、Xcode 15.0.1）写在问题清单开头，只说明当时的机器，不是本仓库的运行时配置。

## 参考

- [React Native 0.72 新架构说明](https://reactnative.dev/docs/0.72/new-architecture-intro)
- [Question-zh.md 中引用的 RN issue #40736](https://github.com/facebook/react-native/issues/40736)（`zIndex` 为 -1 时 iOS 崩溃）
- [Question-zh.md 中引用的 RN issue #38335](https://github.com/facebook/react-native/issues/38335)（先设 `borderColor` 再设 `borderTopColor` 无效）
- [react-native-navigation](https://wix.github.io/react-native-navigation/)
