import React from 'react';
import logo from './logo.svg';
import AjaxForm, { intercept } from 'react-ajax-form';
import './App.css';

intercept('/login', 'POST', function (interceptor) {
  interceptor.overrideResponse({ _id: 'abc' });
});

function App() {
  return (
    <div className="App">
      <article className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </article>
      <AjaxForm
        method="POST"
        action="/login"
        onSuccess={OnSuccess}
        onFail={OnFail}
      >
        <input
          type="email"
          id="email"
          name="email"
        />
        <input
          type="password"
          id="password"
          name="password"
        />
        <button
          type="submit"
        >Log in</button>
      </AjaxForm>
    </div>
  );
}

function OnSuccess({ request, response }) {
  console.log('Success', request, response);
  return (
    <p>Successfully logged in</p>
  );
}

function OnFail({ request, response }) {
  console.log('Fail', request, response);
  return (
    <p>Could not log in</p>
  )
}

export default App;
