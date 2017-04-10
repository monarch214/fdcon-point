window.onload = function () {
  let routes = {
    '/': () => {
      $view.hide();
      $control.hide();
      $('.main-container').show();
      console.log('index');
    },
    '/vue': () => {
      $view.hide();
      $control.hide();
      getView('vueList');
    },
    '/ctrip': () => {
      $view.hide();
      $control.hide();
      getView('ctripList');
    },
    '/taobao': () => {
      $view.hide();
      $control.hide();
      getView('taobaoList');
    },
    '/meituan': () => {
      $view.hide();
      $control.hide();
      getView('meituanList');
    },
    '/ele': () => {
      $view.hide();
      $control.hide();
      getView('eleList');
    },
    '/tb': () => {
      $view.hide();
      $control.hide();
      getView('tbList');
    },
    '/huj': () => {
      $view.hide();
      $control.hide();
      getView('hujList');
    }
  };
  let router = Router(routes);
  router.init('/');
  $(document).on('click', '.list-group-item', function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  $(document).on('click', '.previous', function () {
    mySwiper.slidePrev();
  });
  $(document).on('click', '.next', function () {
    mySwiper.slideNext();
  });
};
