// 1. 使用mongoose连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolistdb', { useNewUrlParser: true, useUnifiedTopology: true });

// 2. 创建结构
var Schema = mongoose.Schema;

var optionSchema = new Schema({

    title: {
        type: String,
        require: true,
    },

    state: {
        type: Boolean,
        require: true,
        default: true
    },

    username: {
        type: String,
        require: true
    }
});



// 3. 生成模型并导出 
// exports.optionSchemaModal = mongoose.model("Data", optionSchema);
const toDoListSchemaModal = mongoose.model("ToDoListSchemaModal", optionSchema);
// const userSchemaModal = mongoose.model("Users", userSchema);
// module.exports = { toDoListSchemaModal }
// exports.toDoListSchemaModal = mongoose.model("toDoListSchemaModal", optionSchema);


exports.toDoListSchemaModal = toDoListSchemaModal;
