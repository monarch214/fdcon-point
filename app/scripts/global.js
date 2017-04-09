/*model*/
const VUE_BETWEEN = [903, 938];
const CTRIP_BETWEEN = [950, 978];
const TAOBAO_BETWEEN = [979, 999];
const MEITUAN_BETWEEN = [1006, 1084];
const ELE_BETWEEN = [1085, 1119];
const TB_BETWEEN = [1120, 1157];
const HUJ_BETWEEN = [1158, 1195];
const PATH = 'http://oo5eazbg6.bkt.clouddn.com';
let model = {
  vueList: [],
  ctripList: [],
  taobaoList: [],
  meituanList: [],
  eleList: [],
  tbList: [],
  hujList: []
};

/*view*/
let $view = $('.view');
let $animateContainer = $('.animate-container');
let isRender = {
  vueList: false,
  ctripList: false,
  taobaoList: false,
  meituanList: false,
  eleList: false,
  tbList: false,
  hujList: false
};
