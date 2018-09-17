export default [
  {
    path: '/',
    component: (resolve) => {
      require(['../views/Index'], resolve)
    }
  }
]