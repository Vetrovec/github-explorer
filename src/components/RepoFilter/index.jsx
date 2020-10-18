import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { Form, Label } from "./elements";
import { TextInput } from "components/Inputs";

function RepoFilter({ onNameChange, onSortChange }) {
  return (
    <Form>
      <Label>
        <FormattedMessage id="components.repofilter.inputs.name" />
        <TextInput
          id="repoName"
          name="repoName"
          onChange={(e) => onNameChange(e.target.value)}
        />
      </Label>
      <Label>
        <input
          type="checkbox"
          id="sortStars"
          name="sortStars"
          onChange={(e) => onSortChange(e.target.checked)}
        />
        <FormattedMessage id="components.repofilter.inputs.sort" />
      </Label>
    </Form>
  );
}

RepoFilter.propTypes = {
  onNameChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
};

export default RepoFilter;
