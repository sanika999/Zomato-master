import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TiStarOutline } from "react-icons/ti";
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

// components
import RestaurantNavbar from "../Components/Navbar/restaurantNavbar";
import ImageGrid from "../Components/restaurant/ImageGrid";
import RestaurantInfo from "../Components/restaurant/RestaurantInfo";
import InfoButtons from "../Components/restaurant/InfoButtons";
import TabContainer from "../Components/restaurant/Tabs";

const RestaurantLayout = (props) => {
  return (
    <>
      {" "}
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 pb-10">
        <ImageGrid
          images={[
            "https://b.zmtcdn.com/data/pictures/chains/3/19623813/949bec736f3b90adebc9363b4d373d80.jpg?output-format=webp&fit=around",
            "https://b.zmtcdn.com/data/pictures/chains/3/19623813/949bec736f3b90adebc9363b4d373d80.jpg?output-format=webp&fit=around",
            "https://b.zmtcdn.com/data/pictures/chains/3/19623813/949bec736f3b90adebc9363b4d373d80.jpg?output-format=webp&fit=around",
            "https://b.zmtcdn.com/data/pictures/chains/3/19623813/949bec736f3b90adebc9363b4d373d80.jpg?output-format=webp&fit=around",
            "https://b.zmtcdn.com/data/pictures/chains/3/19623813/949bec736f3b90adebc9363b4d373d80.jpg?output-format=webp&fit=around",
          ]}
        />
        <RestaurantInfo
          name="Mumbai Xpress"
          restaurantRating="3.5"
          deliveryRating="3.2"
          cuisine="Street Food, Fast Food, Chinese, Desserts, Beverages"
          address="Tardeo, Mumbai"
        />
        <div className="my-4 flex flex-wrap gap-3">
          <InfoButtons isActive>
            <TiStarOutline /> Add Review
          </InfoButtons>
          <InfoButtons >
            <RiDirectionLine /> Direction
          </InfoButtons>
          <InfoButtons >
            <BiBookmarkPlus /> Bookmark
          </InfoButtons>
          <InfoButtons >
            <RiShareForwardLine /> Share
          </InfoButtons>
        </div>
        <div className="my-10">
          <TabContainer></TabContainer>
        </div>
        <div className="relative">{props.children}</div>
      </div>
    </>
  );
};

export default RestaurantLayout;
