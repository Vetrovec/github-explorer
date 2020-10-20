import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import {
  Body,
  Header,
  RepoDataCell,
  RepoHeaderCell,
  RepoLink,
  StarDataCell,
  StarHeaderCell,
  Table,
} from "./elements";

function RepoList({ onRepo, repos }) {
  return (
    <Table>
      <Header>
        <tr>
          <RepoHeaderCell>
            <FormattedMessage id="components.repolist.repo" />
          </RepoHeaderCell>
          <StarHeaderCell>
            <FormattedMessage id="components.repolist.stars" />
          </StarHeaderCell>
        </tr>
      </Header>
      <Body>
        {repos.map((repo) => (
          <tr key={repo.id}>
            <RepoDataCell>
              <RepoLink
                href={"#" + repo.name}
                onClick={(e) => {
                  e.preventDefault();
                  onRepo(repo.id);
                }}
              >
                {repo.name}
              </RepoLink>
            </RepoDataCell>
            <StarDataCell>{repo.stars}</StarDataCell>
          </tr>
        ))}
      </Body>
    </Table>
  );
}

RepoList.propTypes = {
  onRepo: PropTypes.func.isRequired,
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      stars: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};

export default RepoList;
