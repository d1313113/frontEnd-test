import { generateConfig, generateConfig2 } from "./config";

test("测试 generateConfig 函数", () => {
  expect(generateConfig()).toEqual({
    server: "http://localhost",
    port: 80801,
    domain: "localhost"
  });

  expect(generateConfig()).toMatchSnapshot();
});

test("测试 generateConfig 函数2", () => {
  expect(generateConfig2()).toMatchSnapshot({
    time: expect.any(Date)
  });
});

test("测试 generateConfig 行内inline", () => {
  expect(generateConfig2()).toMatchInlineSnapshot(
    {
      time: expect.any(Date)
    },
    `
    Object {
      "domain": "localhost",
      "port": 80801,
      "server": "http://localhost",
      "time": Any<Date>,
    }
  `
  );
});
