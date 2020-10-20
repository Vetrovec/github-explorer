import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { ErrorMessage, DetailContainer } from "./elements";
import MainLayout from "layouts/Main";
import RepoDetails from "components/RepoDetails";
import RepoInfo from "components/RepoInfo";

function Details({ username, repo }) {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.details.error);
  const loading = useSelector(
    (state) => state.loading.effects.details.fetchDetails
  );
  const details = useSelector((state) => state.details.details, shallowEqual);
  const shouldFetch = !error && (!details || details.name !== repo);
  useEffect(() => {
    if (shouldFetch) {
      dispatch.details.fetchDetails({ username, repo });
    }
  }, [dispatch, shouldFetch, username, repo]);
  return (
    <MainLayout
      title="containers.details.title"
      loading={shouldFetch || loading}
    >
      {error && (
        <ErrorMessage>
          <FormattedMessage id={error} />
        </ErrorMessage>
      )}
      {details && (
        <DetailContainer>
          <RepoInfo name={details.name} description={details.description} />
          <RepoDetails
            language={details.language}
            license={details.license}
            fork={details.fork}
            parent={details.parent}
          />
        </DetailContainer>
      )}
    </MainLayout>
  );
}

Details.propTypes = {
  username: PropTypes.string,
  repo: PropTypes.string,
};

export default Details;
