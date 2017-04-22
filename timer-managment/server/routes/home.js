var express = require('express');
var router = express.Router();

var Data = require('../model/data.js');

router.get('/', function(req, res) {
	
  Data.get(function(err, datas) {
      if(err) {
          console.error(err);
      }
      
      console.log(datas);
      res.json(datas);
  })

  //res.json('登陆成功');
});

router.post('/add', function(req, res) {
  
	let data = req.body.data;
  console.log(data);
  var dataobj = new Data(data);
 
  dataobj.save(data, function(){
      res.json({tag: true});
  })	
})

router.post('/delete', function(req, res) {
  
  let uid = req.body.uid;
  
  console.log(uid);
  Data.delete(uid, function() {
      res.json('删除成功');
  })
})

module.exports = router