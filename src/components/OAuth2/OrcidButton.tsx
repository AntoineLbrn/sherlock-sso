import React from 'react';

function OrcidButton() {
  return (
    <a href={`${process.env.REACT_APP_SHERLOCK_LOGIN_URL}/orcid`}>
      <input
        alt="LOGIN WITH ORCID"
        src="https://upload.wikimedia.org/wikipedia/commons/0/06/ORCID_iD.svg"
        type="image"
      />
    </a>
  );
}

export default OrcidButton;
