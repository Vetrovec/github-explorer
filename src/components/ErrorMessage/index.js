import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Message } from "./elements";

function ErrorMessage({ children }) {
  return (
    <Message>
      <FormattedMessage id={children.toString()} />
    </Message>
  );
}

ErrorMessage.propTypes = {
  children: PropTypes.string.isRequired,
};

export default ErrorMessage;
