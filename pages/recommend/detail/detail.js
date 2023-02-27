// pages/recommend/detail/detail.js
const short_essay = require('../../../data/short-essay.js')
Page({
  data: {
    short_essay_en_title:null,
    short_essay_en_text:null,
    short_essay_zh_title:null,
    short_essay_zh_text:null,
  },
  onLoad(options) {
    var idx = decodeURIComponent(options.idx);
    //console.log(idx)
    this.setData({
      short_essay_en_title:short_essay.short_essay[idx].short_essay_en_title,
      short_essay_en_text:short_essay.short_essay[idx].short_essay_en_text,
      short_essay_zh_title:short_essay.short_essay[idx].short_essay_zh_title,
      short_essay_zh_text:short_essay.short_essay[idx].short_essay_zh_text,
    })

  }
})
