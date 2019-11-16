#初始化 jest
```bash
npm i jest@24.8.0 -D
```

初始化 jest配置
```bash
npx jest --init
```

配置jest的babel
```bash
npm i @babel/preset-env@7.4.5 @babel/core@7.4.5 -D
```

配置 .babelrc
```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "node": "current"
        }
      }
    ]
  ]
}
```