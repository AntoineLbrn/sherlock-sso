import React from 'react';

function MissingRedirectUri() {
  return (
    <span className="auth-succeeded">
      You are successfully logged in.
      <br />
      Please go back to your previous URL.
    </span>
  );
}

export default MissingRedirectUri;
