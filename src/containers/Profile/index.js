import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";
import MainLayout from "layouts/Main";

function Profile() {
  const intl = useIntl();
  return (
    <MainLayout title={intl.messages["containers.profile.title"]}>
      <Helmet>
        <title>{intl.messages["containers.profile.title"]}</title>
      </Helmet>
    </MainLayout>
  );
}

export default Profile;
