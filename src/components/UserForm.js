// ./components/UserForm.js

import React from 'react';
import { Control, Form, actions } from 'react-redux-form';

class UserForm extends React.Component {
  handleSubmit(user) {
    const { dispatch } = this.props;

    // Do whatever you like in here.
    // You can use actions such as:
    // dispatch(actions.submit('user', somePromise));
    // etc.
  }
  render() {
    return (
      <Form model="user"
        onSubmit={(user) => this.handleSubmit(user)}>
        <label>First name:</label>
        <Control.text model="user.firstName" />

        <label>Last name:</label>
        <Control.text model="user.lastName" />

        <button type="submit">
          Finish registration!
        </button>
      </Form>
    );
  }
}

export default UserForm;