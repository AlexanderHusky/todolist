
const { findAll, addNewList } = require('../service/toDoListService');
var { utoDolistSchemaModal } = require('../dao/data')

const mockFind = jest.fn();

jest.mock('../dao/data.js',() => {
  return jest.fn().mockImplementation(() => {
    return {
      find:mockFind
    };
  });
});
// jest.mock('../dao/data.js', () => {
//     return {
//         optionSchemaModal: {
//             find: jest.fn(),
//             // save: jest.fn(),
//         }
//     }
// });


describe('Servicec', () => {
    describe('toDoListService', () => {
      it('findAll method', () => {
         
      })
    })
})