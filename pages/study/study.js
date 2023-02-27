// pages/study/study.js
const word_list = require('../../data/word-list.js')
const vocList = require('../../data/vocabulary.js')
const innerAudioContext = wx.createInnerAudioContext()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //页面的初始框架
    content: null,
    pron: null,
    definition: null,
    showNot: false,
    audioUrl: null,
    worldListMax: 999,
    vocListMax: 12346
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
  var idx = Math.floor(Math.random() * 999) + 1
  //console.log(idx)
  var word = word_list.word_list[idx]
  //console.log(word)

  if (wx.getUserProfile) {
    this.setData({
      canIUseGetUserProfile: true,
      content: word.content,
      pron: word.pron,
      definition: word.definition,
      audioUrl: null,
      
    })
  }
  
  },
  show () {
    this.setData({
      showNot: true
    })
  },

  next () {
    this.setData({
      showNot: false
    })

    const { vocListMax, content, audioUrl } = this.data

    // 从vocabulary.js中选取下一个单词
    let idx = Math.floor(Math.random() * vocListMax) + 1
    this.setData({
      content: vocList.wordList[idx],
    })

    wx.request({
      url: `https://api.shanbay.com/bdc/search/?word=${content}`,
      data: {},
      method: 'GET',
      success: res => {

        const data = res.data.data

        this.setData({
          content: data.content,
          audioUrl: data.us_audio,
          pron: data.pron,
          definition: data.definition
        })
        innerAudioContext.src = audioUrl
      }
    })
  },

  read: () => {
    if (this.data.audioUrl) {
      innerAudioContext.play()
    }
  },

  handleShowToast() {
    wx.showToast({
      title: '收藏成功', //提示的内容
      duration: 1000, //持续的时间
      icon: 'success', //图标
      mask: true //显示透明蒙层 防止触摸穿透
    })
  },
})