import User from "../models/user.model.schema.js";

const createUser = async ({ name, email, age, rich }) => {

    const user = await User.create({
      name: name,
      email: email,
      age: age,
      rich: rich,
    });
    return user;
};

const getUsers = async ()=> {
    const users = await User.find({});
    return users;
};

export { createUser, getUsers };
