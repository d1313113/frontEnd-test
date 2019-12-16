const undolist = {
  success: true,
  data: [
    {
      status: 'div',
      value: 'cumelmell'
    },
    {
      status: 'div',
      value: '123'
    }
  ]
}

export default {
  get(url) {
    if (url === '/getUndolist.json') {
      return new Promise((resolve, reject) => {
        resolve(undolist);
      });
    }
  }
}
