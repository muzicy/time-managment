var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

//连接test数据库
var url = 'mongodb://localhost:27017/datas';
MongoClient.connect(url, (err,db) => {
    assert.equal(null,err);
    console.log('连接成功');
    db.close();
});

module.exports = MongoClient;