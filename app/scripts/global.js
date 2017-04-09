/*model*/
const VUE_BETWEEN = [903, 938];
const CTRIP_BETWEEN = [950, 978];
const TAOBAO_BETWEEN = [979, 999];
const PATH = '../images';
let model = {
  vueList: [],
  ctripList: [],
  taobaoList: []
}

/*view*/
let $view = $('.view');
let $animateContainer = $('.animate-container');
let isRender = {
  vueList: false,
  ctripList: false,
  taobaoList: false
}
