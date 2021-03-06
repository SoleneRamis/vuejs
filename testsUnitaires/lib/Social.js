var Promise = require('promise')
var request = require('request')

module.exports = {

  twitter_url: 'http://urls.api.twitter.com/1/urls/count.json?callback=?&url=',
  facebook_url: 'http://graph.facebook.com/',

  getTwitterCount: function(url) {
    var self = this
    return new Promise(function(resolve, reject) {
      self.callAPI(self.twitter_url + url).then(function(result) {
        resolve(resulte.count)
      })
    })
  },

  getFacebookCount: function(url) {
    var self = this
    return new Promise(function(resolve, reject) {
      self.callAPI(self.facebook_url + url).then(function(result) {
        resolve(resulte.shares)
      })
    })
  },

  callAPI: function(url) {
    return new Promise(function(resolve, reject) {
      request(url, function(error, reponse, body) {
        if (!error && reponse.statusCode == 200) {
          resolve(JSON.parse(body))
        } else {
          reject(error)
        }
      })
    })
  }
}
