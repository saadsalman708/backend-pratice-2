import User from "../models/user.model.schema.js";

const createUser = async (data) => {
    const user = await User.create(data);
    return user;
};

const getUsers = async ()=> {
    return await User.find({});  
};

const removeUser = async (id) => {
    return await User.findByIdAndDelete(id);
};

const updateUser = async (id) => {
    
}

export { createUser, getUsers , removeUser };
