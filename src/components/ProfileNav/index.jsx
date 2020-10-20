import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Bar } from "./elements";
import { Button } from "components/Inputs";

function ProfileNav({ onClose, onOpen }) {
  return (
    <Bar>
      <Button onClick={() => onClose()}>
        <FormattedMessage id="components.profilenav.inputs.close" />
      </Button>
      <Button onClick={() => onOpen()}>
        <FormattedMessage id="components.profilenav.inputs.open" />
      </Button>
    </Bar>
  );
}

ProfileNav.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ProfileNav;
