import "./Main.css";
import React from "react";
import PropTypes from "prop-types";
import AnimationLoading from "components/AnimationLoading";

function MainLayout({ title, loading, children }) {
  return (
    <div className="Main">
      <div className="wrapper">
        <div className="title">
          <h1>{title}</h1>
        </div>
        {loading ? (
          <div className="loading-container">
            <div className="loading-inner-container">
              <AnimationLoading />
            </div>
          </div>
        ) : (
          <div className="container">{children}</div>
        )}
      </div>
    </div>
  );
}

MainLayout.propTypes = {
  title: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

MainLayout.defaultProps = {
  loading: false,
};

export default MainLayout;
