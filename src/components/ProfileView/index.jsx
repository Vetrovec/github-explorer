import React from "react";
import PropTypes from "prop-types";
import { Avatar, Bio, Name, ProfileDetails, ViewContainer } from "./elements";

function ProfileView({ name, bio, avatarUrl }) {
  return (
    <ViewContainer>
      <Avatar src={avatarUrl} alt="Avatar" />
      <ProfileDetails>
        <Name>{name}</Name>
        <Bio>{bio}</Bio>
      </ProfileDetails>
    </ViewContainer>
  );
}

ProfileView.propTypes = {
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  avatarUrl: PropTypes.string,
};

export default ProfileView;
