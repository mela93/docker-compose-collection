// 使用方式 mongo < initdb.js
db.adminCommand('listDatabases');
db = db.getSiblingDB('admin');
//创建超级管理员
db.createUser({user : "admin",pwd : "admin",roles: [ { role : "root", db : "admin" }]});
db.auth("admin","admin");
// 给test库 添加test用户 读写数据
db = db.getSiblingDB('test');
db.createUser({user : "test",pwd : "test1234",roles: [ { role : "readWrite", db : "test" }]});
// 查看用户
db = db.getUsers()