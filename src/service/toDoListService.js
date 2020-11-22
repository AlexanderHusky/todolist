var { toDoListSchemaModal } = require('../dao/data')

const findAll = (res) => {

    toDoListSchemaModal.find((err, ret) => {
        if (err) {
            throw new Error('failed to get data')
        } else {
            res.send(ret);
        }
    })
}


const addNewList = (req,res) => {
    let newlist = new toDoListSchemaModal(req.body);
    newlist.save((err,ret) => {
        if(err) {
            throw new Error('保存失败');
        } else {
            res.send(ret + '')
        }
    })
}

exports.findAll = findAll;
exports.addNewList = addNewList;