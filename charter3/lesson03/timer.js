export function timer1(callback) {
  setTimeout(() => {
    callback();
  }, 3000);
};

export function timer2(callback) {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
};
