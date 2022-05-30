import React, { ReactNode, useContext } from 'react';
import { AuthenticationContext, AuthenticationStatus } from './AuthenticationContextProvider';
import MissingRedirectUri from './MissingRedirectUri';
import OAuthButtonRow from './OAuthButtonRow';

function AuthenticationStatusBox() {
  const statusContext = useContext(AuthenticationContext);

  // maps are more readable than ternary
  const mapStatusToComponent = new Map<AuthenticationStatus, ReactNode>([
    [AuthenticationStatus.NOT_STARTED, <OAuthButtonRow />],
    [AuthenticationStatus.NO_REDIRECTION, <MissingRedirectUri />],
  ]);

  return <span>{mapStatusToComponent.get(statusContext.status)}</span>;
}

export default AuthenticationStatusBox;
