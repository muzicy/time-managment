var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
	var password = req.body.password;
	let savepass = '123456qwer';
	if(savepass == password) {
		let tag = true;
		let msg = '密码正确，即将跳转'
		res.json({msg: msg, tag: tag});
	} else {
		let msg = '密码错误,请重新输入'	
		let tag = false;
		res.json({msg: msg, tag: tag})		
	}
	
})

module.exports = router;
