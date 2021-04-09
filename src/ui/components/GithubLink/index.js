import React from 'react';

function GithunLink({login, children}) {
  return (
    <>
      <a
        target="_blank"
        style={{cursor: 'pointer'}}
        href={`https://github.com/${login}`}
        rel="noreferrer">
        {children}
      </a>
    </>
  );
}

export default GithunLink;
