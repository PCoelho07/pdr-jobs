import React, { Component } from 'react';

// import { Container } from './styles';

export default class Info extends Component {
  render() {
    return (
      <section className="info">
        <div className="info__box">
          <div className="info__box--title">
            Na função de Desenvolvedor Frontend aqui na Rits, você vai:
          </div>
          <ul>
            <li>
              Transformar layouts (XD e Photoshop) em montagens responsivas utilizando HTML + CSS + JS;
            </li>
            <li>
              Integrar montagem com APIs desenvolvidas por outras equipes;
            </li>
            <li>
              Manter e melhorar a base de código existente corrigindo bugs e refatorando código quando necessário.
            </li>
          </ul>
        </div>
        <div className="info__box--middle">
          <div className="info__box--title">
            Procuramos alguém que:
          </div>
          <ul>
            <li>
              Possua habilidades arquiteturais para desenvolvimento de software;
            </li>
            <li>
              Goste de trabalhar em equipe;
            </li>
            <li>
              Seja focado, proativo, tenha boa comunicação e relacionamento interpessoal.
            </li>
          </ul>
        </div>

        <div className="info__box">
          <div className="info__box--title">
            No dia a dia na Rits, você trabalhará também com:
          </div>
          <ul>
            <li>
              WordPress e sistemas em PHP em geral;
            </li>
            <li>
              Webpack e Bootstrap;
            </li>
            <li>
              Frameworks javascript modernos (Vue 2, React).
            </li>
          </ul>
        </div>

      </section>
    );
  }
}
