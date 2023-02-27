// pages/recommend/recommend.js3
var app = getApp()
const short_essay = require('../../data/short-essay.js')
const every_sentence = require('../../data/every_sentence.js')
var idx = Math.floor(Math.random() * 8) + 1; //共8篇短文
Page({

  /**
   * 页面的初始数据
   */
  data: {
    every_sentence_en_text:null,
    every_sentence_zh_text:null,
    short_essay_en_title:null,
    short_essay_en_text_short:null,
    short_essay_zh_title:null,
    short_essay_zh_text_short:null,
    
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    var every_sentence_idx = Math.floor(Math.random() * 10) + 1 //共10个句子
    var short_essay_idx = Math.floor(Math.random() * 8) + 1 //共8篇短文
    console.log(short_essay_idx)
    app.idx_middle = short_essay_idx
    //console.log(idx_middle)
    //console.log(every_sentence_idx)
    var every_sentence_all = every_sentence.every_sentence[every_sentence_idx]
    var short_essay_all = short_essay.short_essay[short_essay_idx]
    //console.log(short_essay_all)
    //console.log(every_sentence_all)

    if (wx.getUserProfile) {
      this.setData({
        canIUseGetUserProfile: true,
        every_sentence_en_text:every_sentence_all.en_text,
        every_sentence_zh_text:every_sentence_all.zh_text,
        short_essay_en_title:short_essay_all.short_essay_en_title,
        short_essay_en_text_short:short_essay_all.short_essay_en_text_short,
        short_essay_zh_title:short_essay_all.short_essay_zh_title,
        short_essay_zh_text_short:short_essay_all.short_essay_zh_text_short,
      })
    }

  },

  every_sentence_refresh () {
    var every_sentence_idx = Math.floor(Math.random() * 10) + 1 //共10个句子
    this.setData({
      every_sentence_en_text:every_sentence.every_sentence[every_sentence_idx].en_text,
      every_sentence_zh_text:every_sentence.every_sentence[every_sentence_idx].zh_text,
    })
  },

  short_essay_refresh () {
    this.setData({
      short_essay_en_title:short_essay.short_essay[idx].short_essay_en_title,
      short_essay_en_text_short:short_essay.short_essay[idx].short_essay_en_text_short,
      short_essay_zh_title:short_essay.short_essay[idx].short_essay_zh_title,
      short_essay_zh_text_short:short_essay.short_essay[idx].short_essay_zh_text_short,
    })
    app.idx_middle = idx
  },

  read_more(){            //阅读详情
    wx.navigateTo({           //微信wx的.导航/到navigateTo({url:''})
      url: './detail/detail?idx=' + encodeURIComponent(app.idx_middle),  //url地址
  })
  },

}) 