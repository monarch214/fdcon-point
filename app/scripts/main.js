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
    }
  };
  let router = Router(routes);
  router.init('/');
  $(document).on('click', '.list-group-item', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
};
