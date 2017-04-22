var url = 'mongodb://localhost:27017/datas';
var assert = require('assert');
var mongodb = require('./db.js');
var ObjectID = require('mongodb').ObjectID;

function Data(e) {
   if(!this.uid) {
     this.uid = +new Date();
   } else {
     this.uid = e.uid;
   }
   
   this.date = e.date;
   this.stime = e.stime;
   this.etime = e.etime;
   this.plan = e.task;
}

Data.prototype.save = function save(e, callback) {

  var data = new Data(e);
  
   mongodb.connect(url, (err, db) => {
      
      insertData(db, data,  ()=>{

          db.close();

      });
   })
};

var insertData = (db, data, callback) => {
    console.log(data);
    db.collection('datas').insert({uid: data.uid, date: data.date, stime: data.stime,
      etime: data.etime, task: data.plan}, (err, result)=>{       
         console.log('新增日志成功');
         callback();
    })
}

var getAllDatas = (db, callback) => {

    db.collection('datas').find({}).sort({uid: -1}).toArray((err, result) => {
      if(err) {
        console.error(err);
      } else {
        console.log('获取日志成功');
        var datas = [];
        result.forEach(function(v, index) {
          var data = v;
          datas.push(data);
        }) 
        console.log(datas);              
        callback(null, datas);
      }
    })
}

Data.get = function get(callback) {  
   
	 mongodb.connect(url, (err, db) => {    

    getAllDatas(db, (err, val)=>{
       db.close();     
       callback(err, val);   
    })
    

  })
} 

var updateData = (uid, data, db, callback) => {
    db.collection('datas').update({'uid': uid}, {$set: {plan: data.plan}}, (err) => {
      if(err) {
         console.log(err);
      } else {
         console.log('更新任务成功');
      }
    })
}

Data.update = function(uid, data, callback) {

	mongodb.connect(url, (err, db) => {
     updateData(uid, data, db, () => {
         db.close();
     }) 
  })
}


var deleteData = (uid, db, callback) => {
    db.collection('datas').remove({'_id': new ObjectID(uid)}, (err) => {
        if(err) {
            console.error(err);
        } else {
            console.log('删除成功');
           
        }
    })
}

Data.delete = function(uid, callback) {
    mongodb.connect(url, (err, db) => {
       deleteData(uid, db, () => {
          db.colse();
       })
    })
}


module.exports = Data;