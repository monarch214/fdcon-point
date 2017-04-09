let getModelList = (start, end, type) => {
  let pre = 'IMG_';
  for (let i = start; i <= end; i++) {
    let query = i < 1000 ? '0' + i : i;
    let tmpPic = PATH + '/' + pre + query + '.jpg';
    model[type].push(tmpPic);
  }
};

getModelList(VUE_BETWEEN[0], VUE_BETWEEN[1], 'vueList');
getModelList(CTRIP_BETWEEN[0], CTRIP_BETWEEN[1], 'ctripList');
getModelList(TAOBAO_BETWEEN[0], TAOBAO_BETWEEN[1], 'taobaoList');
getModelList(MEITUAN_BETWEEN[0], MEITUAN_BETWEEN[1], 'meituanList');
getModelList(ELE_BETWEEN[0], ELE_BETWEEN[1], 'eleList');
getModelList(TB_BETWEEN[0], TB_BETWEEN[1], 'tbList');
getModelList(HUJ_BETWEEN[0], HUJ_BETWEEN[1], 'hujList');
