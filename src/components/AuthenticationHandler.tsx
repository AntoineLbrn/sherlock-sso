import React, { useContext, useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { AuthenticationContext, AuthenticationStatus } from './AuthenticationContextProvider';

interface AuthenticationHandlerProps {
    children: JSX.Element
}

function AuthenticationHandler({ children } : AuthenticationHandlerProps): JSX.Element {
  const statusContext = useContext(AuthenticationContext);
  const [cookies, setCookie, removeCookie] = useCookies(['REDIRECT_URI', 'JWT']);
  const query = new URLSearchParams(window.location.search);
  const redirectUri = query.get('redirect-uri');

  useEffect(() => {
    if (window.location.pathname === '/redirect') {
      if (cookies.REDIRECT_URI) {
        // When doing request from another domain, use Credentials : include (https://developer.mozilla.org/en-US/docs/Web/API/Request/credentials)
        window.location.replace(cookies.REDIRECT_URI);
        removeCookie('REDIRECT_URI');
      } else if (cookies.JWT) {
        statusContext.setStatus(AuthenticationStatus.NO_REDIRECTION);
      }
    }
  }, [window.location.pathname]);

  if (redirectUri) {
    setCookie('REDIRECT_URI', redirectUri, {
      path: '/',
    });
  }

  return children;
}

export default AuthenticationHandler;
