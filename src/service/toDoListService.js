var { toDoListSchemaModal} = require('../dao/data')

const findAll = (res) => new Promise((resolve,reject) => {
    toDoListSchemaModal.find((err, ret) => {
        if (err) {
            reject(res.send('404 not'));
        } else {
            resolve(res.send(ret));
        }
    })
})


const addNewList = (req,res) => new Promise((resolve,reject) => {
    let newList = new toDoListSchemaModal(req.body);

    newList.save((err,ret) => {
        if(err) {
            throw new Error('报错啦');
        } else {
            resolve(res.send(ret));
        }
    })
})

const updateList = (req, res) => new Promise((resolve, reject) => {
    toDoListSchemaModal({ title: req.body.title }, (err, ret) => {
        if (err) {
            reject(res.send('404 Not Found'))
        } else {
            resolve(res.send(ret));
        }
    })
})

const deleteListByTitle = (req, res) => new Promise((resolve, reject) => {
    toDoListSchemaModal.remove({ title: req.body.title }, (err, ret) => {
        if (err) {
            reject(res.send('删除错误'));
        } else {
            resolve(res.send(ret));
        }
    })
})

const deleteAllLists = (req, res) => new Promise((resolve, reject) => {
    toDoListSchemaModal.remove((err, ret) => {
        if (err) {
            reject(res.send('删除错误'));
        } else {
            resolve(res.send(ret))
        }
    })
})



exports.findAll = findAll;
exports.addNewList = addNewList;
exports.updateList = updateList;
exports.deleteListByTitle = deleteListByTitle;
exports.deleteAllLists = deleteAllLists;