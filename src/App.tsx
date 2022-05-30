import React from 'react';
import './App.css';
import Title from './components/Title';
import Description from './components/Description';
import LoginContainer from './components/LoginContainer';
import AuthenticationBox from './components/AuthenticationBox';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginContainer>
          <Title />
          <Description />
          <AuthenticationBox />
        </LoginContainer>
      </header>
    </div>
  );
}

export default App;
