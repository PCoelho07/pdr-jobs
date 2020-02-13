
import React, { Component } from 'react';

import { Formik } from 'formik';
import Axios from 'axios';
// import { Container } from './styles';

export default class FormContent extends Component {

  async handleSubmit(values) {
    /* console.log(values) */
    const formData = new FormData();

    for (const key in values) {
      if (values.hasOwnProperty(key)) {
        formData.append(key, values[key])
      }
    }

    await Axios.post('/api/resumes', formData)
  }

  render() {
    return (
      <Formik
        initialValues={{
          name: '',
          email: '',
          contact: '',
          presentation: '',
          linkedin_url: '',
          github_url: '',
          salary_target: '',
          level: '',
          resume_path: ''
        }}
        onSubmit={this.handleSubmit}
      >

        {({
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
              <section className="formcontent">
                <div className="formcontent__section">
                  <div className="formcontent__label">
                    Informações pessoais
                </div>
                  <div className="formcontent__input">
                    <span>Nome completo</span>
                    <input type="text" name="name" onChange={handleChange} value={values.name} />
                  </div>
                  <div className="formcontent__input formcontent__input--middle">
                    <span>E-mail</span>
                    <input type="email" name="email" onChange={handleChange} value={values.email} />
                  </div>
                  <div className="formcontent__input">
                    <span>Telefone(com ddd)</span>
                    <input type="text" name="contact" value={values.contact} onChange={handleChange} />
                  </div>
                </div>

                <div className="formcontent__section mt-50">
                  <div className="formcontent__label">
                    Carta de apresentação
                </div>
                  <div className="formcontent__input textarea__input">
                    <span>Conte sua motivação (opcional)</span>
                    <textarea name="presentation" onChange={handleChange} value={values.presentation}>
                    </textarea>
                  </div>
                </div>

                <div className="formcontent__section mt-50">
                  <div className="formcontent__label">
                    Últimas perguntas
                </div>
                  <div className="formcontent__input">
                    <span>url do seu linkedin</span>
                    <input type="text" name="linkedin_url" onChange={handleChange} value={values.linkedin_url} />
                  </div>
                  <div className="formcontent__input formcontent__input--middle">
                    <span>url do seu github</span>
                    <input type="text" name="github_url" onChange={handleChange} value={values.github_url} />
                  </div>
                  <div className="formcontent__input">
                    <span>pretensão salarial</span>
                    <input type="text" name="salary_target" onChange={handleChange} value={values.salary_target} />
                  </div>
                  <div className="formcontent__input formcontent__input--middle">
                    <span>Qual seu nível de inglês</span>
                    <select name="level" id="level" onChange={handleChange} defaultValue="-1" value={values.level}>
                      <option value="-1" disabled>Escolha</option>
                      <option value="iniciante" >Iniciante</option>
                      <option value="intermediario" >Intermediário</option>
                      <option value="avancado" >Avançado</option>
                    </select>
                  </div>
                </div>

                <div className="formcontent__section mt-50">
                  <div className="formcontent__label">
                    Anexe seu currículo em PDF ou DOC
                </div>
                  <label htmlFor="file" className="formcontent__inputfile--label">Escolha o arquivo</label>
                  <input
                    type="file"
                    name="resume_path"
                    id="file"
                    className="formcontent__inputfile"
                    onChange={(event) => {
                      setFieldValue('resume_path', event.currentTarget.files[0])
                    }} />
                </div>

                <div className="formcontent__section mt-50">
                  <button type="submit" className="formcontent__submit">Enviar</button>
                </div>

              </section>
            </form>
          )}


      </Formik>
    );
  }
}
