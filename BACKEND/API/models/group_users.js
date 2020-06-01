import mongoose, { mongo } from "mongoose";
const Schema = mongoose.Schema;

const GroupUsers = new Schema({
    code_group:{type: Schema.ObjectId,ref:'groups'},
    code_user:{type:Schema.ObjectId,ref:'users'}
});

module.exports = mongoose.model('group_users',GroupUsers);
