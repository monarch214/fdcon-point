window.onload = function () {
  let routes = {
    '/': () => {
      $view.hide();
      $('.main-container').show();
      console.log('index');
    },
    '/vue': () => {
      $view.hide();
      getView('vueList');
    },
    '/ctrip': () => {
      $view.hide();
      getView('ctripList');
    },
    '/taobao': () => {
      $view.hide();
      getView('taobaoList');
    },
    '/meituan': () => {
      $view.hide();
      getView('meituanList');
    },
    '/ele': () => {
      $view.hide();
      getView('eleList');
    },
    '/tb': () => {
      $view.hide();
      getView('tbList');
    },
    '/huj': () => {
      $view.hide();
      getView('hujList');
    }
  };
  let router = Router(routes);
  router.init('/');
  $(document).on('click', '.list-group-item', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
};
