import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { DataCell, HeaderCell, Table } from "./elements";

function DetailRow({ name, value, last }) {
  return (
    <tr>
      <HeaderCell last={last}>
        <FormattedMessage id={name} />
      </HeaderCell>
      <DataCell last={last}>{value}</DataCell>
    </tr>
  );
}

DetailRow.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  last: PropTypes.bool.isRequired,
};

function RepoDetails({ language, license, fork, parent }) {
  const details = [
    {
      name: "components.repodetails.content.language",
      value: language || "-",
    },
    {
      name: "components.repodetails.content.license",
      value: license || "-",
    },
    {
      name: "components.repodetails.content.forked",
      value: fork ? "\u2713" : "\u2716",
    },
    {
      name: "components.repodetails.content.parent",
      value: parent || "-",
    },
  ];
  return (
    <Table>
      <tbody>
        {details.map(({ name, value }, i) => (
          <DetailRow
            key={name}
            name={name}
            value={value}
            last={details.length === i + 1}
          />
        ))}
      </tbody>
    </Table>
  );
}

RepoDetails.propTypes = {
  language: PropTypes.string,
  license: PropTypes.string,
  fork: PropTypes.bool.isRequired,
  parent: PropTypes.string,
};

export default RepoDetails;
