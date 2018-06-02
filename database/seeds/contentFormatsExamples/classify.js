'use strict';

const _ = require('lodash');

module.exports = (files) => ({
    title: 'Clique arraste',
    text: 'Você é o vendedor de uma loja de eletrônicos e vai ter que se virar para não perder o cliente! Valendo!.',
    time: 60,
    questions: [{
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_a.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Físico'
            },
            right: {
                option: 'Eletrônico'
            }
        },
        correctAnswer: 'left'
    }, {
        // feedbacks: [{
        //     title: 'Muito bem!',
        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
        //     type: 'positive'
        // }, {
        //     title: 'Ooops!',
        //     text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
        //     type: 'negative'
        // }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_b.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Não precisa',
            },
            right: {
                option: 'Tem que ter'
            }
        },
        correctAnswer: 'left'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_c.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Aqui',
            },
            right: {
                option: 'Ali'
            }
        },
        correctAnswer: 'left'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_d.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_e.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_f.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_g.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_h.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_h.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_h.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_h.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }, {
        feedbacks: [{
            title: 'Muito bem!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'positive'
        }, {
            title: 'Ooops!',
            text: 'Aqui aparece o reforço de conceito que irá garantir ao usuário uma maior absorção do conteúdo.',
            type: 'negative'
        }],
        image: _.find(files, file => file.filename === 'Aula05_Aparencia_at3_h.png').fileUrl,
        alternativesType: 'text',
        alternatives: {
            left: {
                option: 'Esquerda',
            },
            right: {
                option: 'Direita'
            }
        },
        correctAnswer: 'right'
    }]
});
