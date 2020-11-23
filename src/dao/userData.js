// 1. 使用mongoose连接数据库
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/todolistdb', { useNewUrlParser: true, useUnifiedTopology: true });

// 2. 创建结构
var Schema = mongoose.Schema;



var userSchema = new Schema({

    username: {
        type: String,
        require: true,
    },

    password: {
        type: String
    }
})


// 3. 生成模型并导出 
// exports.optionSchemaModal = mongoose.model("Data", optionSchema);
const userSchemaModal = mongoose.model("Options", userSchema);
// const userSchemaModal = mongoose.model("Users", userSchema);
module.exports = { userSchemaModal }
// exports.toDoListSchemaModal = mongoose.model("toDoListSchemaModal", optionSchema);
