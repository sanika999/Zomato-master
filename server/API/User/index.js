// Libraries
import express from "express";
import passport from "passport";

// Database model
import { UserModel } from "../../database/allModels";

// validation
import { ValidateUser, ValidateUpdateUser } from "../../validation/user";

const Router = express.Router();

/*
Route    /:_id
Des      Get user data
Params   _id
BODY     none
Access   Public
Method   GET
*/
Router.get("/:_id", async (req, res) => {
  try {
    await ValidateUser(req.params);
    const { _id } = req.params;
    const getUser = await UserModel.findById(_id);

    return res.json({ user: getUser });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

/*
Route    /update
Des      update user id
Params   _id
BODY     user data
Access   Public
Method   PUT
*/
Router.put("/update/:userId", async (req, res) => {
  try {
    await ValidateUpdateUser(req.params);
    const { _userId } = req.params;
    const { userData } = req.body;

    const updateUserData = await UserModel.findByIdAndUpdate(
        _userId, 
        {
            $set: userData,
        },
    { new: true }  
    );

    return res.json({ user: updateUserData });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
});

export default Router;
