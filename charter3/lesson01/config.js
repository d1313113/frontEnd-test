export function generateConfig() {
  return {
    server: 'http://localhost',
    port: 80801,
    domain: 'localhost'
  };
};

export function generateConfig2() {
  return {
    server: 'http://localhost',
    port: 80801,
    domain: 'localhost',
    time: new Date()
  };
}