var { userSchemaModal, toDolistSchemaModal } = require('../dao/data')

const findAll = (res) => {

    toDolistSchemaModal.find((err, ret) => {
        if (err) {
            throw new Error('failed to get data')
        } else {
            res.send(ret);
        }
    })
}


const addNewList = (req,res) => {
    let newlist = new toDolistSchemaModal(req.body);
    newlist.save((err,ret) => {
        if(err) {
            throw new Error('保存失败');
        } else {
            res.send(ret + '保存成功')
        }
    })
}



module.exports = { findAll, addNewList}