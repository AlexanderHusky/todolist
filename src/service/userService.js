const router = require('../controller/controller')
var { userSchemaModal } = require('../dao/userData')

const findAllUsers = (res) => new Promise((resolve,reject) => {
    userSchemaModal.find((err,ret) => {
        if(err){
            reject(err);
        } else {
            resolve(res.send(ret));
        }
    })
})

const saveUser = (req,res) => new Promise((resolve,reject) => {
        // 新增一个数据
        let newUser = new userSchemaModal(req.body);
        // 保存
        newUser.save((err, ret) => {
            if (err) {
                reject(res.send('保存失败'));
            } else {
                resolve(res.send(ret));
        }
    })
})

const updateUser = (req,res) => new Promise((resolve,reject) => {
    userSchemaModal.update({ title: req.body.title},(err,ret) => {
        if(err) {
            reject(res.send('404 Not Found'))
        } else {
            resolve(res.send(ret));
        }
    })
})

const deleteUserById = (req,res) => new Promise((resolve,reject) => {
    userSchemaModal.remove({ title: req.body.title },(err,ret) => {
        if(err) {
            reject(res.send('删除错误'));
        } else {
            resolve(res.send(ret));
        }
    })
})

const deleteAllUsers = (req,res) => new Promise((resolve,reject) => {
    userSchemaModal.remove((err,ret) => {
        if(err) {
            reject(res.send('删除错误'));
        } else {
            resolve(res.send(ret))
        }
    })
})


exports.findAllUsers = findAllUsers;
exports.saveUser = saveUser;
exports.updateUser = updateUser;
exports.deleteUserById = deleteUserById;
exports.deleteAllUsers = deleteAllUsers;