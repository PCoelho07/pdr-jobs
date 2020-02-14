
import React, { Component } from 'react';
import { Formik } from 'formik';
import api from '../utils/api';

// import { Container } from './styles';

export default class Login extends Component {

  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  async handleSubmit(values) {
    try {
      const response = await api.post('/api/auth/login', values)
      const token = response.data.token

      localStorage.setItem('jobs@token', token)

      this.props.history.push('/admin')
    }
    catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <section className="login__container">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          onSubmit={this.handleSubmit}
        >
          {
            ({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              setFieldValue
            }) => (
                <form onSubmit={handleSubmit}>
                  <div className="loginform__section">
                    <label htmlFor="email">Email:</label>
                    <input type="text" name="email" value={values.email} onChange={handleChange} />
                  </div>
                  <div className="loginform__section">
                    <label htmlFor="password">Password:</label>
                    <input type="password" name="password" value={values.password} onChange={handleChange} />
                  </div>
                  <div className="loginform__section">
                    <button type="submit">Entrar</button>
                  </div>
                </form>
              )
          }
        </Formik>
      </section>
    );
  }
}
