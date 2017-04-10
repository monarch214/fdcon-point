let shutOther = (type) => {
  for (let i in isRender) {
    isRender[i] = false;
  }
  isRender[type] = true;
};

let getView = (type) => {
  if (isRender[type]) {
    $animateContainer.show();
  } else {
    $animateContainer.html('').show();
    let list = model[type];
    let $swiperContainer = $('<div class="swiper-container"></div>');
    let $swiperWrapper = $('<div class="swiper-wrapper"></div>');
    let $swiperPagination = $('<div class="swiper-pagination"></div>');
    for (let [i, e] of list.entries()) {
      let swiperEle = `<div class="swiper-slide"><img src="${e}"/></div>`;
      $swiperWrapper.append(swiperEle);
    }
    $swiperContainer.append($swiperWrapper);
    $animateContainer.append($swiperPagination);
    $animateContainer.append($swiperContainer);
    mySwiper = new Swiper('.swiper-container', {
      pagination: '.swiper-pagination',
      paginationType: 'progress',
      paginationClickable: true
    });
    shutOther(type);
  }
  $control.show();
};
