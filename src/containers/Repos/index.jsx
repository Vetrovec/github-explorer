import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage } from "react-intl";
import { ErrorMessage, ListContainer, ReposContainer } from "./elements";
import MainLayout from "layouts/Main";
import RepoFilter from "components/RepoFilter";
import RepoList from "components/RepoList";

function Repos({ username }) {
  const [owner, setOwner] = useState(null);
  const [filterName, setFilterName] = useState("");
  const [filterSortStars, setFilterSortStars] = useState(false);
  const dispatch = useDispatch();
  const error = useSelector((state) => state.repos.error);
  const loading = useSelector(
    (state) => state.loading.effects.repos.fetchRepos
  );
  const repos = useSelector((state) => state.repos.repos, shallowEqual);
  const shouldFetch = !loading && !error && (!repos || owner !== username);
  useEffect(() => {
    if (shouldFetch) {
      dispatch.repos.fetchRepos(username);
      setOwner(username);
    }
  }, [dispatch, setOwner, username, shouldFetch]);
  const mappedRepos =
    Array.isArray(repos) &&
    repos
      .slice()
      .filter(({ name }) => name.startsWith(filterName))
      .sort((a, b) => {
        const sortBy = filterSortStars ? "stars" : "id";
        return b[sortBy] - a[sortBy];
      })
      .map((repo) => ({
        id: repo.id,
        name: repo.fullName,
        description: repo.description,
        stars: repo.stars,
      }));
  return (
    <MainLayout title="containers.repos.title" loading={shouldFetch || loading}>
      {error && (
        <ErrorMessage>
          <FormattedMessage id={error} />
        </ErrorMessage>
      )}
      {Array.isArray(repos) && (
        <ReposContainer>
          <RepoFilter
            onNameChange={setFilterName}
            onSortChange={setFilterSortStars}
          />
          <ListContainer>
            <RepoList
              onRepo={(id) => repos.find((repo) => repo.id === id)}
              repos={mappedRepos}
            />
          </ListContainer>
        </ReposContainer>
      )}
    </MainLayout>
  );
}

Repos.propTypes = {
  username: PropTypes.string,
};

export default Repos;
