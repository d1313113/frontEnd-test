# 初始化 react 项目
```bash
npx create-react-app project-name

cd project-name

# 弹出配置文件
npm run eject
```

# 配置 jest
在弹出的配置文件中,在` package.json `中已经含有了` jest `的配置,将` jest `配置独立出来到` jest.config.js `中,方便管理

jest.config.js
```js
module.exports = {
  roots: [
    "<rootDir>/src"
  ],
  // 代码测试覆盖率文件路径
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts"
  ],
  // 在测试时需要处理的
  setupFiles: [
    "react-app-polyfill/jsdom"
  ],
  // 测试环境搭建好后需要做的
  setupFilesAfterEnv: [],
  // 测试文件的匹配项
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
  ],
  // 测试运行环境,这个插件是node下模拟dom api
  testEnvironment: "jest-environment-jsdom-fourteen",
  // 测试中使用的编译插件
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
    "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",
    "^(?!.*\\.(js|jsx|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"
  },
  // 编译忽略文件正则
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$"
  ],
  modulePaths: [],
  moduleNameMapper: {
    "^react-native$": "react-native-web",
    // 把 css module形式忽略,转成key:value形式去忽略css
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"
  },
  // 模块文件后缀
  moduleFileExtensions: [
    "web.js",
    "js",
    "web.ts",
    "ts",
    "web.tsx",
    "tsx",
    "json",
    "web.jsx",
    "jsx",
    "node"
  ],
  // 在命令行中运行 test 时的命令行插件
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname"
  ]
};
```