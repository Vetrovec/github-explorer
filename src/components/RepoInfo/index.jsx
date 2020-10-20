import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Description, Info, Title } from "./elements";

function RepoInfo({ name, description }) {
  return (
    <Info>
      <Title>{name}</Title>
      <Description>
        {description || (
          <FormattedMessage id="components.repoinfo.content.nodescription" />
        )}
      </Description>
    </Info>
  );
}

RepoInfo.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string,
};

export default RepoInfo;
