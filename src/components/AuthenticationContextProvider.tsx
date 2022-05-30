import React from 'react';

interface AuthenticationContextProviderProps {
    children: JSX.Element
}

export enum AuthenticationStatus {
    NOT_STARTED = 'not started',
    NO_REDIRECTION = 'no redirection'
}

export const AuthenticationContext = React
  .createContext<{
    status: AuthenticationStatus,
    setStatus:(status: AuthenticationStatus) => unknown
      }>({
        status: AuthenticationStatus.NOT_STARTED,
        setStatus: () => undefined,
      });

export function AuthenticationContextProvider({ children }: AuthenticationContextProviderProps) {
  const [status, setStatus] = React.useState(AuthenticationStatus.NOT_STARTED);
  const value = React.useMemo(() => ({
    status, setStatus,
  }), [status]);
  return (
    <AuthenticationContext.Provider value={value}>
      {children}
    </AuthenticationContext.Provider>
  );
}
