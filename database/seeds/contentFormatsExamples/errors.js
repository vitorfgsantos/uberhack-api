'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Dando um oi por aí',
        text: 'Seu dia começa em casa e você passa por muitos lugares até a noite. Será que você cumprimenta todo mundo certinho? Quer testar? Clique nos lugares e descubra!',
        time: 120,
        clicks: 4,
        baseResolution: {
            width: 1080,
            height: 1140
        },
        background: _.find(files, file => file.filename === 'Teste_CG_nivel1.png').fileUrl,
        mappings: [{
            coordinates: '251,327,278,327,303,333,323,344,338,356,352,371,363,391,372,416,373,438,370,455,364,476,356,496,344,518,332,537,319,551,305,565,288,581,268,599,252,616,244,632,241,641,235,624,226,609,214,592,198,579,179,565,159,547,143,532,132,516,123,497,117,476,116,451,119,427,126,407,137,386,153,366,172,351,192,341,210,332,230,326',
            shape: 'poly',
            tickPosition: {
                x: 300,
                y: 568
            },
            feedback: {
                title: 'Muito bem!',
                text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                type: 'positive'
            }
        }, {
            coordinates: '662,61,706,63,746,82,769,107,787,149,786,195,775,229,758,259,733,290,705,316,678,342,668,352,657,374,634,332,605,306,574,281,550,253,534,214,533,174,548,131,574,99,599,79,627,69',
            shape: 'poly',
            tickPosition: {
                x: 720,
                y: 279
            },
            feedback: {
                title: 'Muito bem!',
                text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                type: 'positive'
            }
        }]
    },
    {
        title: 'Dando um oi por aí',
        text: 'Seu dia começa em casa e você passa por muitos lugares até a noite. Será que você cumprimenta todo mundo certinho? Quer testar? Clique nos lugares e descubra!',
        time: 120,
        clicks: 4,
        background: _.find(files, file => file.filename === 'Aula05_Aparencia_01.png').fileUrl,
        baseResolution:{
            width: 1080,
            height: 1020
        },
        mappings: [{
            coordinates: '408,66,424,66,442,70,458,78,469,83,477,93,483,106,485,123,483,139,475,149,465,158,454,165,441,174,430,180,420,190,415,197,414,182,407,175,393,169,380,167,367,160,356,152,348,142,343,128,339,113,346,96,358,81,375,71,392,66',
            shape: 'poly',
            tickPosition: {
                x: 453,
                y: 170
            },
            feedback: {
                title: 'Muito bem!',
                text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                type: 'positive'
            }
        },{
            coordinates: "736,394,757,395,775,400,789,404,803,411,814,421,822,431,829,445,831,461,829,477,822,493,811,504,798,517,781,525,769,531,757,542,748,551,745,556,744,543,738,533,726,526,709,520,690,517,678,507,663,494,657,479,651,464,654,444,661,430,673,415,689,405,708,397",
            shape: 'poly',
            tickPosition: {
                x: 787,
                y: 522
            },
            feedback: {
                title: 'Muito bem!',
                text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                type: 'positive'
            }
        }, {
            coordinates: "285,533,301,535,316,538,332,542,346,549,357,556,368,567,376,578,380,591,379,608,377,622,371,633,360,645,348,655,333,664,319,673,306,684,297,692,292,699,291,682,277,670,261,663,244,660,226,653,213,638,204,624,197,606,198,587,207,569,221,555,233,546,251,539,267,535",
            shape: 'poly',
            tickPosition: {
                x: 334,
                y: 663
            },
            feedback: {
                title: 'Muito bem!',
                text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
                type: 'positive'
            }
        }]
    }]
});
