import User from "../models/user.model.schema.js";

const createUser = async (data) => {
    const user = await User.create(data);
    return user;
};

const getUsers = async ()=> {
    const users = await User.find({});    
    return users;
};

export { createUser, getUsers };
