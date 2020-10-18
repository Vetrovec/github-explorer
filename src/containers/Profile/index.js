import React from "react";
import MainLayout from "layouts/Main";
import UsernameForm from "components/UsernameForm";

function Profile() {
  return (
    <MainLayout title={"containers.profile.title"}>
      <UsernameForm onSubmit={() => null} />
    </MainLayout>
  );
}

export default Profile;
