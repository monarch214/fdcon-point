window.onload = function () {
  let routes = {
    '/': () => {
      viewShutUpHandler();
      $('.main-container').show();
      $forkMe.show();
      console.log('index');
    },
    '/vue': () => {
      viewShutUpHandler();
      getView('vueList');
    },
    '/ctrip': () => {
      viewShutUpHandler();
      getView('ctripList');
    },
    '/taobao': () => {
      viewShutUpHandler();
      getView('taobaoList');
    },
    '/meituan': () => {
      viewShutUpHandler();
      getView('meituanList');
    },
    '/ele': () => {
      viewShutUpHandler();
      getView('eleList');
    },
    '/tb': () => {
      viewShutUpHandler();
      getView('tbList');
    },
    '/huj': () => {
      viewShutUpHandler();
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
