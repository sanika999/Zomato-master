import React from "react";
import { Route } from "react-router-dom";

// Layout
import HomeLayout from "../Layout/Home.layout";

const HomeLayoutHOC = ({ component: Component, ...rest }) => {
  return (
  <>
    <Route
      {...rest}
      component={(props) => (
        <HomeLayout>
          <component {...props} />
        </HomeLayout>
      )}
    />
  </>
  );
};

export default HomeLayoutHOC;
