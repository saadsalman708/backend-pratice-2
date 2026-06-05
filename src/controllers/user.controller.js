import { createUser , getUsers , removeUser } from "../services/user.service.js";

const create = async (req, res) => {
  try {
    const user = await createUser(req.body)
    res.status(200).json({
        message: "User created!",
        user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const get = async (req, res) => {
  try {
    const users = await getUsers();    
    res.status(200).json({
      users,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const remove = async (req , res) => {
  try {
    await removeUser(req.params.id);
    res.status(200).json({
      message: "User Deleted Successfully!"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
}

export { create , get , remove };
