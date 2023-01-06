import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flexdirection: column;
  height: 100vh;
`;

const NavBar = styled.div`
  background-color: #fbfbfb;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 20px;
  align-items: center;
  box-shadow: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)';
  display: flex;
`;

const NavItem = styled.a`
  margin-right: 80px;
  text-decoration: none;
  font: normal normal bold 22px/24px;
  letter-spacing: 0px;
  color: #3e3e3e;
`;

const TextInput = styled.input`
  border-idth: 1px;
  border-color: #d0dbe2;
  border-radius: 8px;
  width: 450px;
  height: 50px;
  background: #f3f7f9 0% 0% no-repeat padding-box;
`;

const LogInForm = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  padding: 40px;
  border-radius: 8px;
  margin: auto;
  background: #ffffff 0% 0% no-repeat padding-box;
`;

function App() {
  return (
    <Container>
      <NavBar>
        <span style={{ fontWeight: 'bold', fontSize: '18px' }}>React</span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexGrow: 1,
          }}
        >
          <NavItem href="">About us</NavItem>
          <NavItem href="">Pricing</NavItem>
          <NavItem href="">Documentation</NavItem>
        </div>
        <button
          style={{
            padding: '8px 15px',
            background: 'none',
            border: 'none',
            borderRadius: '7px',
            backgroundColor: '#E1E1E1',
            cursor: 'pointer',
          }}
        >
          Sign up
        </button>
      </NavBar>

      <LogInForm>
        <span
          style={{
            fontSize: '29px',
            fontWeight: '500',
            color: '#3E3E3E',
            alignSelf: 'center',
          }}
        >
          Welcome Back!
        </span>

        <label
          htmlFor="username"
          style={{
            marginTop: '36px',
            marginBottom: '5px',
            fontSize: '18px',
            fontWeight: 'normal',
          }}
        >
          Username
        </label>
        <TextInput type="text" name="username" />

        <label
          htmlFor="password"
          style={{
            marginTop: '10px',
            marginBottom: '5px',
            fontSize: '18px',
            fontWeight: 'normal',
          }}
        >
          Password
        </label>
        <TextInput type="text" name="password" />

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '30px',
          }}
        >
          <input
            type="checkbox"
            style={{
              borderWidth: '1px',
              borderColor: '#D0DBE2',
              borderRadius: '7px',
              marginRight: '10px',
              height: '24px',
              width: '24px',
            }}
          />
          <span
            style={{
              fontSize: '18px',
              fontWeight: 'normal',
            }}
          >
            Remember me
          </span>
          <div style={{ flexGrow: 1 }} />
          <span
            style={{
              color: '#3E3E3E',
              fontSize: '18px',
              fontWeight: 'normal',
            }}
          >
            Forgot your password?
          </span>
        </div>

        <button
          style={{
            border: 'none',
            borderRadius: '8px',
            marginTop: '30px',
            backgroundColor: '#035884',
            color: 'white',
            padding: '20px',
          }}
        >
          LOG IN
        </button>
      </LogInForm>
    </Container>
  );
}

export default App;
