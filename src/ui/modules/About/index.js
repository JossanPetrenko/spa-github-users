import React from 'react';
import strings from 'infra/resources/strings';

function About() {
  return (
    <div>
      <h1>{strings.app.about_title}</h1>
      <h3>
        <b>{strings.app.about_sub_title}</b>
      </h3>
      <br />
      <p>{strings.app.about_description}</p>
      <br />
      <br />
      <p>
        {strings.app.version}
        <i>{strings.app.version_number}</i>
      </p>
    </div>
  );
}

export default About;
