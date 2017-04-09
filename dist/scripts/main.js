"use strict";
var VUE_BETWEEN = [903, 938], CTRIP_BETWEEN = [950, 978], TAOBAO_BETWEEN = [979, 999], PATH = "./images", model = {
  vueList: [],
  ctripList: [],
  taobaoList: []
}, $view = $(".view"), $animateContainer = $(".animate-container"), isRender = {
  vueList: !1,
  ctripList: !1,
  taobaoList: !1
}, getModelList = function (i, e, t) {
  for (var n = i; n <= e; n++) {
    var r = n < 1e3 ? "0" + n : n, a = PATH + "/IMG_" + r + ".JPG";
    model[t].push(a)
  }
};
getModelList(VUE_BETWEEN[0], VUE_BETWEEN[1], "vueList"), getModelList(CTRIP_BETWEEN[0], CTRIP_BETWEEN[1], "ctripList"), getModelList(TAOBAO_BETWEEN[0], TAOBAO_BETWEEN[1], "taobaoList");
var _slicedToArray = function () {
  function i(i, e) {
    var t = [], n = !0, r = !1, a = void 0;
    try {
      for (var o, s = i[Symbol.iterator](); !(n = (o = s.next()).done) && (t.push(o.value), !e || t.length !== e); n = !0);
    } catch (i) {
      r = !0, a = i
    } finally {
      try {
        !n && s.return && s.return()
      } finally {
        if (r)throw a
      }
    }
    return t
  }

  return function (e, t) {
    if (Array.isArray(e))return e;
    if (Symbol.iterator in Object(e))return i(e, t);
    throw new TypeError("Invalid attempt to destructure non-iterable instance")
  }
}(), shutOther = function (i) {
  for (var e in isRender)isRender[e] = !1;
  isRender[i] = !0
}, getView = function (i) {
  if (isRender[i])$animateContainer.show(); else {
    $animateContainer.html("").show();
    var e = model[i], t = $('<div class="swiper-container"></div>'), n = $('<div class="swiper-wrapper"></div>'), r = $('<div class="swiper-pagination"></div>'), a = !0, o = !1, s = void 0;
    try {
      for (var c, d = e.entries()[Symbol.iterator](); !(a = (c = d.next()).done); a = !0) {
        var l = _slicedToArray(c.value, 2), v = (l[0], l[1]), u = '<div class="swiper-slide"><img src="' + v + '"/></div>';
        n.append(u)
      }
    } catch (i) {
      o = !0, s = i
    } finally {
      try {
        !a && d.return && d.return()
      } finally {
        if (o)throw s
      }
    }
    t.append(n), $animateContainer.append(r), $animateContainer.append(t);
    new Swiper(".swiper-container", {
      effect: "coverflow",
      pagination: ".swiper-pagination",
      paginationType: "progress",
      paginationClickable: !0
    });
    shutOther(i)
  }
};
window.onload = function () {
  var i = {
    "/": function () {
      $view.hide(), $(".main-container").show()
    }, "/vue": function () {
      $view.hide(), getView("vueList")
    }, "/ctrip": function () {
      $view.hide(), getView("ctripList")
    }, "/taobao": function () {
      $view.hide(), getView("taobaoList")
    }
  };
  Router(i).init("/"), $(document).on("click", ".list-group-item", function () {
    $(this).addClass("active").siblings().removeClass("active")
  })
};
