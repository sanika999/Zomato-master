// Libraries
import express from "express";
import passport from "passport";

// Database model
import { ReviewModel } from "../../database/allModels";

const Router = express.Router();

/*
Route    /new
Des      Add new food review/rating
Params   none
BODY     review object
Access   Public
Method   POST
*/
Router.post("/new", async(req, res) => {
    try{
        const { reviewData } = req.body;

        await ReviewModel.create(reviewData);

        return res.json({ review: "Successfully created Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});

/*
Route    /delete
Des      delete food review/rating
Params   _id
BODY     none
Access   Public
Method   POST
*/
Router.delete("/delete/:_id", async (req, res) => {
    try {
        const { _id } = req.params;

        await ReviewModel.findByIdAndDelete(_id);

        return res.json({ review: "Successfully deleted the Review." });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


export default Router;