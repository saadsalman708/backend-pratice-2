import userSchema from "../models/user.model.schema.js";

const createUser = async (req , res) => {
    try {
        const user = await userSchema.create(req.body);
        res.status(200).json({
            user,
            message: "User created!"
        });
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

const getUsers = async (req , res) => {
   try {
    const users = await userSchema.find({});
    res.status(200).json({
    users
   });
   } catch (error) {
    res.status(500).json({
        message: error.message
    })
   }
};


export {createUser , getUsers};