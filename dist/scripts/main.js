"use strict";var VUE_BETWEEN=[903,938],CTRIP_BETWEEN=[950,978],TAOBAO_BETWEEN=[979,999],MEITUAN_BETWEEN=[1006,1084],ELE_BETWEEN=[1085,1119],TB_BETWEEN=[1120,1157],HUJ_BETWEEN=[1158,1195],PATH="http://oo5eazbg6.bkt.clouddn.com",model={vueList:[],ctripList:[],taobaoList:[],meituanList:[],eleList:[],tbList:[],hujList:[]},$view=$(".view"),$animateContainer=$(".animate-container"),isRender={vueList:!1,ctripList:!1,taobaoList:!1,meituanList:!1,eleList:!1,tbList:!1,hujList:!1},getModelList=function(i,t,e){for(var n=i;n<=t;n++){var r=n<1e3?"0"+n:n,a=PATH+"/IMG_"+r+".jpg";model[e].push(a)}};getModelList(VUE_BETWEEN[0],VUE_BETWEEN[1],"vueList"),getModelList(CTRIP_BETWEEN[0],CTRIP_BETWEEN[1],"ctripList"),getModelList(TAOBAO_BETWEEN[0],TAOBAO_BETWEEN[1],"taobaoList"),getModelList(MEITUAN_BETWEEN[0],MEITUAN_BETWEEN[1],"meituanList"),getModelList(ELE_BETWEEN[0],ELE_BETWEEN[1],"eleList"),getModelList(TB_BETWEEN[0],TB_BETWEEN[1],"tbList"),getModelList(HUJ_BETWEEN[0],HUJ_BETWEEN[1],"hujList");var _slicedToArray=function(){function i(i,t){var e=[],n=!0,r=!1,a=void 0;try{for(var o,s=i[Symbol.iterator]();!(n=(o=s.next()).done)&&(e.push(o.value),!t||e.length!==t);n=!0);}catch(i){r=!0,a=i}finally{try{!n&&s.return&&s.return()}finally{if(r)throw a}}return e}return function(t,e){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return i(t,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),shutOther=function(i){for(var t in isRender)isRender[t]=!1;isRender[i]=!0},getView=function(i){if(isRender[i])$animateContainer.show();else{$animateContainer.html("").show();var t=model[i],e=$('<div class="swiper-container"></div>'),n=$('<div class="swiper-wrapper"></div>'),r=$('<div class="swiper-pagination"></div>'),a=!0,o=!1,s=void 0;try{for(var E,d=t.entries()[Symbol.iterator]();!(a=(E=d.next()).done);a=!0){var u=_slicedToArray(E.value,2),l=(u[0],u[1]),c='<div class="swiper-slide"><img src="'+l+'"/></div>';n.append(c)}}catch(i){o=!0,s=i}finally{try{!a&&d.return&&d.return()}finally{if(o)throw s}}e.append(n),$animateContainer.append(r),$animateContainer.append(e);new Swiper(".swiper-container",{pagination:".swiper-pagination",paginationType:"progress",paginationClickable:!0});shutOther(i)}};window.onload=function(){var i={"/":function(){$view.hide(),$(".main-container").show()},"/vue":function(){$view.hide(),getView("vueList")},"/ctrip":function(){$view.hide(),getView("ctripList")},"/taobao":function(){$view.hide(),getView("taobaoList")},"/meituan":function(){$view.hide(),getView("meituanList")},"/ele":function(){$view.hide(),getView("eleList")},"/tb":function(){$view.hide(),getView("tbList")},"/huj":function(){$view.hide(),getView("hujList")}};Router(i).init("/"),$(document).on("click",".list-group-item",function(){$(this).addClass("active").siblings().removeClass("active")})};