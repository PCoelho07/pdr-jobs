
import React, { Component } from 'react';
import api from '../utils/api';

// import { Container } from './styles';

export default class Admin extends Component {

  constructor() {
    super()
    this.state = {
      username: '',
      email: 'teste@teste.com',
      resumes: []
    }
  }

  componentDidMount() {
    this.fetchResumes()
  }


  async fetchResumes() {
    try {
      const response = await api.get('/api/resumes')

      this.setState({
        resumes: response.data
      })
    }
    catch (err) {
      console.log(err)
    }
  }



  render() {

    const { email, resumes } = this.state

    return (
      <>
        <header className="admin__header">
          <nav className="admin__container">
            <p className="greeting">
              Bem vindo
            </p>
            <a href="/" className="header__navlink--last">Voltar para página inicial</a>
          </nav>
        </header>
        <section className="admin__content">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Telefone</th>
                <th scope="col">Currículo</th>
              </tr>
            </thead>
            <tbody>
              {
                resumes.map(item => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.contact}</td>
                    <td><a href={`${item.resume_full_path}`}>{item.resume_path}</a></td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </section>
      </>
    );
  }
}
