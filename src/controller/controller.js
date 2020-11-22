var express = require('express');
var router = express.Router();
var { findAll, addNewList } = require('../service/toDoListService');


const pathToDoList = '/list';
const pathUser = '/user';
/*   toDoListController  */ 
// 返回所有信息
const getAllToDoListApi = (pathToDoList) => {

    router.get(pathToDoList, (req, res) => {
        findAll(res);
    });
}

getAllToDoListApi(pathToDoList);


router.post(pathToDoList, (req,res) => {
    addNewList(req,res);
})



/*  userController  */
// router.post(pathUser,(req,res) => {

//     // 新增一个数据
//     let newUser = new userSchemaModal(req.body);
//     // 保存
//     newUser.save((err,ret) => {
//         if(err) {
//             res.send('保存失败');
//         } else {
//             res.send(ret);
//         }
//     })
// })




module.exports = router;
