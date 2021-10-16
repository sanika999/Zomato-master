import React from "react";

const ReviewCard = () => {
  return (
    <>
      <div className="">
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full">
              <img
                src="https://b.zmtcdn.com/data/user_profile_pictures/1c0/ccc3382ccee3063e4435a979773861c0.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
                alt="avatar"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col ">
              <h3 className="text-lg font-semibold">Sanika Dalvi</h3>
              <small className="text-gray-500">5 Reviews &#8226; 3 Followers </small>
            </div>
            <button className="text-zomato-400 border border-zomato-400">
              Follow
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewCard;
