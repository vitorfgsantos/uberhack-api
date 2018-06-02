'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    questions: [{
        title: 'Dando um oi por aí',
        text: 'Seu dia começa em casa e você passa por muitos lugares até a noite. Será que você cumprimenta todo mundo certinho? Quer testar? Clique nos lugares e descubra!',
        time: 60,
        clicks: 5,
        background: _.find(files, file => file.filename === 'Teste_CG_nivel3.png').fileUrl,
        baseResolution: {
            width: 1080,
            height: 860
        },
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Quase lá!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'intermediate'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        layers: [{
            image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8J.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8C.png').fileUrl,
            mapping: {
                coordinates: '466,411,487,395,503,380,516,355,522,332,515,316,499,309,484,304,470,291,460,275,456,261,454,242,459,220,468,205,484,194,502,188,526,186,570,185,604,185,629,189,645,196,658,213,661,232,663,260,653,283,642,296,625,304,606,308,587,310,566,318,555,326,545,342,539,356,524,374,503,392,488,402',
                shape: 'poly'
            }
        }, {
            image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8I.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8E.png').fileUrl,
            mapping: {
                coordinates: '452,542,452,559,462,571,482,583,498,589,514,605,529,624,547,635,568,638,601,638,644,637,679,637,705,634,723,626,731,607,733,580,728,562,712,553,680,547,575,547,540,549,519,555,504,562,486,563,471,559,461,550',
                shape: 'poly'
            }
        }, {
            image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8H.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8D.png').fileUrl,
            mapping: {
                coordinates: '463,479,484,475,510,461,538,448,570,430,593,423,611,418,644,417,687,417,725,413,744,410,762,399,771,377,769,346,758,330,737,321,709,317,655,318,620,319,601,321,589,328,580,340,574,351,571,368,563,386,551,404,538,419,523,432,509,445,499,454,484,465',
                shape: 'poly'
            }
        }, {
            image: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8F.png').fileUrl,
            icon: _.find(files, file => file.filename === 'Teste_CG_nivel3_Q8A.png').fileUrl,
            mapping: {
                coordinates: '286,159,300,150,317,144,336,145,358,145,382,147,407,144,424,147,442,157,447,170,447,183,448,203,443,219,432,228,419,236,410,242,398,247,395,257,394,272,394,285,391,298,385,310,385,298,380,278,369,264,356,250,342,247,321,242,301,236,285,229,273,210,270,197,274,174',
                shape: 'poly'
            }
        }]
    }]
});
