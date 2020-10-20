import React from "react";
import PropTypes from "prop-types";
import { Bar } from "./elements";
import { Button } from "components/Inputs";

function ProfileNav({ onClose, onOpen }) {
  return (
    <Bar>
      <Button onClick={() => onClose()}>Close</Button>
      <Button onClick={() => onOpen()}>Open</Button>
    </Bar>
  );
}

ProfileNav.propTypes = {
  onClose: PropTypes.func.isRequired,
  onOpen: PropTypes.func.isRequired,
};

export default ProfileNav;
