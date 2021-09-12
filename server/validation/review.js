import joi from "joi";

export const ValidateFoodReview = ( foodReview ) => {
    const Schema = joi.object({
        food: joi.string().required(),
        restaurant: joi.string().required(),
        user: joi.string().required(),

    });
     
    return Schema.validateAsync(foodReview);
};

export const ValidateDeleteFoodReview = ( deleteReview ) => {
    const Schema = joi.object({
        _id: joi.string().required(),
    });
     
    return Schema.validateAsync(deleteReview);
};
