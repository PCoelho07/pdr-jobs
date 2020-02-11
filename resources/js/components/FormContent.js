
import React, { Component } from 'react';

// import { Container } from './styles';

export default class FormContent extends Component {
  render() {
    return (
      <section className="formcontent">
        <div className="formcontent__section">
          <div className="formcontent__label">
            Informações pessoais
          </div>
          <div className="formcontent__input">
            <span>Nome completo</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input formcontent__input--middle">
            <span>E-mail</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input">
            <span>Telefone(com ddd)</span>
            <input type="text" name="name" />
          </div>
        </div>

        <div className="formcontent__section mt-50">
          <div className="formcontent__label">
            Carta de apresentação
          </div>
          <div className="formcontent__input">
            <span>Nome completo</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input formcontent__input--middle">
            <span>E-mail</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input">
            <span>Telefone(com ddd)</span>
            <input type="text" name="name" />
          </div>
        </div>

        <div className="formcontent__section mt-50">
          <div className="formcontent__label">
            Últimas perguntas
          </div>
          <div className="formcontent__input">
            <span>url do seu linkedin</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input formcontent__input--middle">
            <span>url do seu github</span>
            <input type="text" name="name" />
          </div>
          <div className="formcontent__input">
            <span>pretensão salarial</span>
            <input type="text" name="name" />
          </div>
        </div>

        <div className="formcontent__section mt-50">
          <div className="formcontent__label">
            Anexe seu currículo em PDF ou DOC
          </div>
          <label htmlFor="file" className="formcontent__inputfile--label">Escolha o arquivo</label>
          <input type="file" name="file" id="file" className="formcontent__inputfile" />
        </div>

        <div className="formcontent__section mt-50">
          <button type="submit" className="formcontent__submit">Enviar</button>
        </div>

      </section>
    );
  }
}
