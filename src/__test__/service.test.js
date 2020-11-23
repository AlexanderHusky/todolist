
// const { findAll, addNewList } = require('../service/toDoListService');
// var { toDoListSchemaModal } = require('../dao/data');
// var { userSchemaModal } =require('../dao/userData')
// var { UserTest } = require('../model/UserTest')
var { getData } = require('./getDataTest')
var axios = require('axios');
const { resolve } = require('path');

jest.mock('axios')
// const mockFind = jest.fn();

// const mockSave = jest.fn();

// jest.mock('../dao/data.js',() => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       find:mockFind,
//       save:mockSave
//     };
//   });
// });

// jest.mock('../dao/data.js', () => {
//   return {
//     toDoListSchemaModal: {
//       find: jest.fn(),
//       // save: jest.fn(),
//     }
//   }
// });




const mockRun = jest.fn().mockReturnValue('true')
const mockInject = jest.fn();

// mock 一个类试试

// jest.mock('../model/UserTest.js', () => {
//   const mockUserTest = jest.fn().mockImplementation(() => {
//     const returnValue = {
//       run: mockRun,
//       inject:mockInject
//     }
//     return returnValue;
//   })
//   return mockUserTest;
// })

// jest.mock('../model/UserTest.js',() => {
//   return jest.fn().mockImplementation(() => {
//     return {
//       run : mockRun,
//       inject: mockInject
//     }
//   })
// })



// ========================




// beforeEach(() => {
//   mockRun.mockClear();
//   mockInject.mockClear();
// })

describe('Servicec', () => {
    describe('toDoListService', () => {
      it('findAll method', async () => {

        const res = {}
        const callbck = jest.fn()
        const path = 'http://localhost:3000/user'
        // toDoListSchemaModal.find = jest.fn(callbck).Implementation(callbck(err,res));
        // let result = await findAll(res);
        
        
        const result = axios.get.mockResolvedValue({'data':'hello'});

        // console.log(result);

        const result_2 = await getData().then().then(res=>console.log(res));

        
        

        // expect(toDoListSchemaModal.find).toHaveBeenCalled();
        

      

        /* 模拟模块 */ 
      })
    })
})