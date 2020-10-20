import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";

function ErrorMessage({ children, className }) {
  return (
    <span className={className}>
      <FormattedMessage id={children.toString()} />
    </span>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default ErrorMessage;
