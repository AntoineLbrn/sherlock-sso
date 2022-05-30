import React, { ReactFragment } from 'react';

interface LoginContainerProps {
    children: ReactFragment
}

function LoginContainer({ children }: LoginContainerProps) {
  return (
    <div className="login-box-outer">
      <div className="login-box-inner">
        {children}
      </div>
    </div>
  );
}

export default LoginContainer;
