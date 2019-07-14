var express = require('express');
var qs = require('qs');
var axios = require('axios');
var config = require('../config');
var router = express.Router();

router.get('/', function(req, res) {
  axios.get(config.base_url + '/get_memes').then(function(response) {
    res.send(response.data);
  });
});

router.post('/', function(req, res) {
  var param = req.body;
  var texts = param.texts.map(function(text) {
    return { text: text };
  });
  var payload = {
    template_id: param.memeId,
    username: process.env.USERID,
    password: process.env.PW,
    boxes: texts
  };

  var reqConfig = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  };
  axios
    .post(config.base_url + '/caption_image', qs.stringify(payload), reqConfig)
    .then(function(response) {
      res.send(response.data);
    });
});

module.exports = router;
