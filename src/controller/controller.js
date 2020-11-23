var express = require('express');
var router = express.Router();
var { findAll, addNewList,updateList,deleteListByTitle,deleteAllLists } = require('../service/toDoListService');
var { userSchemaModal}  = require('../dao/userData');
var { findAllUsers, saveUser, updateUser, deleteUserById, deleteAllUsers }  = require('../service/userService');
const pathToDoList = '/list';
const pathUser = '/user';
/*   toDoListController  */ 
// 返回所有信息
router.get(pathToDoList,(req,res) => {
    findAll(res);
});

router.post(pathToDoList, (req,res) => {
    addNewList(req,res);
});

router.put(pathToDoList, (req,res) => {
    updateList(req,res)
});

router.delete(pathToDoList,(req,res) => {
    deleteListByTitle(req,res);
});

router.delete('/alllists',(req,res) => {
    console.log(1)
    deleteAllLists(req,res);
})


router
/*  userController  */

router.get(pathUser,(req,res) => {
    findAllUsers(res);
})

router.post(pathUser,(req,res) => {
    saveUser(req,res);
})

router.put(pathUser,(req,res) => {
    updateUser(req,res);
})

router.delete('/allusers',(req,res) => {
    deleteAllUsers(req,res);
})

router.delete(pathUser,(req,res) => {
    deleteUserById(req,res);
})


module.exports = router;
