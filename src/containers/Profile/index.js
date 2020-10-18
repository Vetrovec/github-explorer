import React from "react";
import { Helmet } from "react-helmet-async";
import { useIntl } from "react-intl";

function Profile() {
  const intl = useIntl();
  return (
    <div>
      <Helmet>
        <title>{intl.messages["containers.profile.title"]}</title>
      </Helmet>
      <h1>{intl.messages["containers.profile.title"]}</h1>
    </div>
  );
}

export default Profile;
