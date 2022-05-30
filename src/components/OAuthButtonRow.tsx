import React from 'react';
import OrcidButton from './OAuth2/OrcidButton';

function OAuthButtonRow() {
  return (
    <div className="oauth-button-row">
      <div className="oauth-button-group">
        <OrcidButton />
        <div className="oauth-title">
          <img src="https://upload.wikimedia.org/wikipedia/commons/1/14/ORCID_logo.svg" alt="orcid logo" />
        </div>
      </div>
    </div>

  );
}

export default OAuthButtonRow;
