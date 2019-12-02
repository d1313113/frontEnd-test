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

# 配置 enzyme
` enzyme `是用来测试` react `组件中的状态等情况的工具

```bash
npm i enzyme enzyme-adapter-react-16 -D
```

引入` enzyme `
```js
import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
```

## shallow
浅渲染,只渲染当前组件,子组件用占位符占位,并不会深度渲染,节省时间
```js
import Enzyme, { shallow } from 'enzyme';
import App from './App';

it('test', () => {
  const wrapper = shallow( <App />);
  // console.log(wrapper.debug());
  expect(wrapper.find('.App').length).toBe(1);
  expect(wrapper.find('.App').prop('title')).toBe('cumelmell');
});
```

## debug
可是使用` wrapper `下的` debug `方法来获取到渲染后的` dom `节点.
```js
const wrapper = shallow(<App />);
console.log(wrapper.debug());
```

## 测试代码解耦
使用属性选择器来解耦代码,比直接使用` className `等选择器要好,当选择器变动时,测试代码不需要要改动
```jsx
(
  <div className="App" data-test="App">
  </div>
)
```
```js
it('test', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('[data-test="App"]').length).toBe(1);
});
```

## jest-enzyme
使用` enzyme `的第三方插件提供的方法可以更高效的来进行单元测试
```bash
npm i jest-enzyme -D
```
随后配置` jest.config.js `中的` setupFilesAfterEnv `,添加上` './node_modules/jest-enzyme/lib/index.js `

## mount
如果使用` mount `的话,在集成测试中比较适合,会将子组件也挂载

## toMatchSnapshot
对内容进行快照对比