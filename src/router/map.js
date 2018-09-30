export default [
  {
    path: '/',
    component: (resolve) => {
      require(['../views/Index'], resolve)
    }
  },
  //知识点
  {
    path: '/knowledge',
    component: (resolve) => {
      require(['../views/Index'], resolve)
    },
    children: [{
      path: 'code-html',
      component: (resolve) => {
        require(['../views/knowledge/codeHtml'], resolve)
      }
    },{
      path: 'code-css',
      component: (resolve) => {
        require(['../views/knowledge/codeCss'], resolve)
      }
    },{
      path: 'code-javascript',
      component: (resolve) => {
        require(['../views/knowledge/codeJavascript'], resolve)
      }
    },{
      path: 'code-css',
      component: (resolve) => {
        require(['../views/knowledge/codeCss'], resolve)
      }
    },{
      path: 'code-css',
      component: (resolve) => {
        require(['../views/knowledge/codeCss'], resolve)
      }
    }]
  }
]