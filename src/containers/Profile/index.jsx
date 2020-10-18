import React from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import { FormattedMessage } from "react-intl";
import { ErrorBox, ProfileContainer } from "./elements";
import MainLayout from "layouts/Main";
import ProfileView from "components/ProfileView";
import UsernameForm from "components/UsernameForm";

function Profile() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.profile.error);
  const loading = useSelector(
    (state) => state.loading.effects.profile.fetchProfile
  );
  const profile = useSelector((state) => state.profile.profile, shallowEqual);
  return (
    <MainLayout title={"containers.profile.title"} loading={loading}>
      {error && (
        <ErrorBox>
          <FormattedMessage id={error} />
        </ErrorBox>
      )}
      <ProfileContainer>
        {profile ? (
          <ProfileView
            name={profile.name || profile.login}
            bio={profile.bio}
            avatarUrl={profile.avatarUrl}
          />
        ) : (
          <UsernameForm
            onSubmit={({ username }) => dispatch.profile.fetchProfile(username)}
          />
        )}
      </ProfileContainer>
    </MainLayout>
  );
}

export default Profile;
