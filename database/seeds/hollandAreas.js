'use strict';

const _ = require('lodash');
const HollandArea = require('../../src/models/hollandAreaModel').HollandArea;

module.exports = (files, occupations) => (
    [
        new HollandArea({
            title: 'Administração e Vendas',
            image: _.find(files, file => file.filename === 'categoria_adm_vendas.png').fileUrl,
            occupations: [
                 _.find(occupations, occupation => occupation.name === 'Marketing e Vendas')._id,
                 _.find(occupations, occupation => occupation.name === 'Bens e Serviços')._id,
                 _.find(occupations, occupation => occupation.name === 'Administração Pública')._id,
                 _.find(occupations, occupation => occupation.name === 'Recursos humanos')._id,
                // _.find(occupations, occupation => occupation.name === 'Regulamento & Inspetor')._id,
            ]
        }),
        new HollandArea({
            title: 'Artes',
            image: _.find(files, file => file.filename === 'categoria_artes.png').fileUrl,
            occupations: [
                 _.find(occupations, occupation => occupation.name === 'Artes Visuais')._id,
                 _.find(occupations, occupation => occupation.name === 'Música')._id,
                 _.find(occupations, occupation => occupation.name === 'Artes Cênicas')._id,
                  _.find(occupations, occupation => occupation.name === 'Comunicação e Informação')._id,
                // _.find(occupations, occupation => occupation.name === 'Artes')._id,
                // _.find(occupations, occupation => occupation.name === 'Artes Aplicadas')._id,

            ]
        }),
        new HollandArea({
            title: 'Ciência e Tecnologia',
            image: _.find(files, file => file.filename === 'categoria_ciencias_tec.png').fileUrl,
            occupations: [
                _.find(occupations, occupation => occupation.name === 'Engenharia')._id,
                _.find(occupations, occupation => occupation.name === 'Computação e Dados')._id,
                _.find(occupations, occupation => occupation.name === 'Ciências Exatas')._id,
                _.find(occupations, occupation => occupation.name === 'Saúde')._id,
                // _.find(occupations, occupation => occupation.name === 'Artes Aplicadas')._id,
            ]
        }),
        new HollandArea({
            title: 'Operações de Negócios',
            image: _.find(files, file => file.filename === 'categoria_operacao_negocios.png').fileUrl,
            occupations: [
                 _.find(occupations, occupation => occupation.name === 'Logística e distribuição')._id,
                 _.find(occupations, occupation => occupation.name === 'Finanças')._id,
                 _.find(occupations, occupation => occupation.name === 'Administração')._id,
                // _.find(occupations, occupation => occupation.name === 'Comunicações e Captador de e Controle de Registros')._id,
                // _.find(occupations, occupation => occupation.name === 'Transações Financeiras')._id
            ]
        }),
        new HollandArea({
            title: 'Serviço Social',
            image: _.find(files, file => file.filename === 'categoria_servico_social.png').fileUrl,
            occupations: [
                 _.find(occupations, occupation => occupation.name === 'Serviço Social')._id,
                 _.find(occupations, occupation => occupation.name === 'Ciências Sociais e Humanas')._id,
                 _.find(occupations, occupation => occupation.name === 'Educação')._id,
                 _.find(occupations, occupation => occupation.name === 'Segurança Pública')._id,
            ]
        }),
        new HollandArea({
            title: 'Técnico',
            image: _.find(files, file => file.filename === 'categoria_tecnico.png').fileUrl,
            occupations: [
                 _.find(occupations, occupation => occupation.name === 'Reparação e Manutenção')._id,
                 _.find(occupations, occupation => occupation.name === 'Agronomia')._id,
                 _.find(occupations, occupation => occupation.name === 'Produção de Bens Industriais')._id,
                // _.find(occupations, occupation => occupation.name === 'Computador e Informações Especialidades')._id,
            ]
        })
    ]
);
