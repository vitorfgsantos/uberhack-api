'use strict';

const _ = require('lodash');
const MessageTemplate = require('../../src/models/messageTemplateModel').MessageTemplate;

module.exports = (files) => (
    [
        new MessageTemplate({
            key: 'welcome',
            image: _.find(files, file => file.filename === 'topo_msg_boasvindas.png').fileUrl,
            title: 'Você é um pioneiro. Aproveite!',
            appHtmlTemplate: `<p>
                  Seja bem-vindo! Você é um dos primeiros a experimentar <b>TAQE</b>, o aplicativo que está reinventando a forma dos jovens conquistarem um emprego. Por enquanto, estamos liberando o acesso para poucas pessoas.
                </p>

                <p>
                  TAQE funciona assim: por meio de testes e aulas interativas, descobrimos seu potencial, preparamos você para o mercado de trabalho e encontramos vagas que combinem com seu perfil. TAQE faz o cruzamento das suas características pessoais com a cultura e necessidades das empresas, indicando apenas as vagas que tenham a ver com você.
                </p>

                <p>
                  As vagas de emprego estão sendo inseridas pouco a pouco e você terá acesso à medida que evoluir no jogo e se seu perfil combinar com os requisitos da vaga e da empresa. Cobasi, Burger King e Linx são alguns dos parceiros que disponibilizam suas vagas no aplicativo. Você terá a oportunidade de aproveitar o app, acumular pontos e largar na frente, enquanto chegam novos candidatos e aumenta a quantidade de vagas.
                </p>

                <p>
                  Atenciosamente, <br>
                  <b>Equipe TAQE</b>
                </p>`,
            emailHtmlTemplate: `<p>
                  Seja bem-vindo! Você é um dos primeiros a experimentar <b>TAQE</b>, o aplicativo que está reinventando a forma dos jovens conquistarem um emprego. Por enquanto, estamos liberando o acesso para poucas pessoas.
                </p>

                <p>
                  TAQE funciona assim: por meio de testes e aulas interativas, descobrimos seu potencial, preparamos você para o mercado de trabalho e encontramos vagas que combinem com seu perfil. TAQE faz o cruzamento das suas características pessoais com a cultura e necessidades das empresas, indicando apenas as vagas que tenham a ver com você.
                </p>

                <p>
                  As vagas de emprego estão sendo inseridas pouco a pouco e você terá acesso à medida que evoluir no jogo e se seu perfil combinar com os requisitos da vaga e da empresa. Cobasi, Burger King e Linx são alguns dos parceiros que disponibilizam suas vagas no aplicativo. Você terá a oportunidade de aproveitar o app, acumular pontos e largar na frente, enquanto chegam novos candidatos e aumenta a quantidade de vagas.
                </p>

                <p>
                  Atenciosamente, <br>
                  <b>Equipe TAQE</b>
                </p>`
        })
    ]
);
