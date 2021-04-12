import React from 'react';

import SimpleCard from 'ui/components/SimpleCard';

import strings from 'infra/resources/strings';

function UserInfoBio({bio}) {
  return bio ? (
    <SimpleCard>
      <h3>{bio || strings.fallback_text}</h3>
    </SimpleCard>
  ) : null;
}

export default UserInfoBio;
