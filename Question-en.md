# React Native New Architecture Adaptation Issues

## Preconditions

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

## Background

In early April 2024, the adaptation to the new architecture of React Native was undertaken, but some difficult issues were encountered during the adaptation process. This document is intended to record common issues with RN new architecture adaptation.

## Problem Summary

| No. | Issue                                                                                                                                   | Demo Link | Description |
| --- | --------------------------------------------------------------------------------------------------------------------------------------- | --------- | ----------- |
| 1   | `measureLayout` becomes ineffective in Animated.ScrollView                                                                              |           |             |
| 2   | Animated.ScrollView stuttering issues                                                                                                   |           |             |
| 3   | `ref` obtained from sectionList cannot perform `ref.measure`                                                                            |           |             |
| 4   | iOS app crash due to zindex being -1 [link](https://github.com/facebook/react-native/issues/40736)                                      |           |             |
| 5   | Android bold fonts being truncated                                                                                                      |           |             |
| 6   | `LayoutAnimation` not effective on iOS                                                                                                  |           |             |
| 7   | When the parent container is a View and the child element Text has `fontWeight` set to bold, the Text wraps. If `alignItems: center`... |           |             |
| 8   | Request sending failure issue (likely related to animated)                                                                              |           |             |
| 9   | `stickyHeaderIndices` feature of FlatList, initially works upon entering the page, fails after several scrolls                          |           |             |
| 10  | Animated.FlatList scrolling is not smooth, very stuttering                                                                              |           |             |
| 11  | After scrolling in ScrollView, clicking on a checkbox component causes ScrollView to flicker                                            |           |             |
| 12  | ScrollView containing a horizontal FlatList, when scrolling in FlatList triggers setState, ScrollView scrolls                           |           |             |
| 13  | Multiple Modals overlay causes freeze                                                                                                   |           |             |
| 14  | Font truncation issue                                                                                                                   |           |             |
| 15  | `borderTopColor` becomes ineffective after setting `borderColor` first [link](https://github.com/facebook/react-native/issues/38335)    |           |             |
| 16  | `fontWeight` ineffective on iOS 17.3.1                                                                                                  |           |             |
| 17  | LottieAnimation abnormal on iOS                                                                                                         |           |             |
| 18  | Possible abnormal results from `measure`                                                                                                |           |             |
| 19  | After the overlay is hidden, the overlay container is not destroyed                                                                     |           |             |
| 20  | iOS Animated.timing with `useNativeDriver: true`, the embedded button cannot be clicked                                                 |           |             |
| 21  | Android route component sets `view.setNativeProps({renderToHardwareTextureAndroid: true})`, navigating to the next page...              |           |             |
| 22  | iOS TouchableOpacity embedding Animated.View, after Animated.View starts animation to change position, it cannot be clicked             |           |             |
| 23  | zIndex property in styles may not take effect, try adding `position: relative` property to take effect                                  |           |             |
| 24  | Components need to set default width and height, otherwise layout display may get truncated                                             |           |             |
| 25  | `TextInput.defaultProps` value is `undefined`                                                                                           |           |             |
| 26  | iOS Image style setting `borderRadius` not fully displayed                                                                              |           |             |
| 27  | iOS `minimumFontScale` `maxFontSizeMultiplier` not effective                                                                            |           |             |
| 28  | Animated.View embedding Modal component, internal TouchableOpacity click does not respond                                               |           |             |
| 29  | `stickyHeaderIndices` feature of FlatList, ScrollView fails after multiple scrolls                                                      |           |             |
| 30  | Animated.View, Animated.ScrollView, `layoutAnimation` animation stuttering                                                              |           |             |
| 31  | Android FlatList calling `scrollToOffset`, FlatList scrolling stuttering.                                                               |           |             |
| 32  | `maxLength` attribute of TextInput not effective on Android                                                                             |           |             |

## Problem Identification
