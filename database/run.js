'use strict';

const createDocuments = require('./createDocuments');
const createFiles = require('./createFiles');
const Way = require('../src/models/wayModel').Way;
const User = require('../src/models/userModel').User;
const NewsCategory = require('../src/models/news/newsCategoryModel').NewsCategory;
const OAuthClient = require('../src/models/oAuthClientModel').OAuthClient;
const _ = require('lodash');
const co = require('co');
const db = require('../db');

db.connection.on('connected', () => {
    co(function*() {
        try {
            yield new Promise((resolve, reject) => {
                db.connection.db.dropDatabase(err => {
                    if (err) throw err;
                    console.log('\t\x1b[41m', 'Database dropped', '\x1b[0m');
                    resolve();
                });
            });

            let files               = yield createFiles(require('./seeds/files/images')());
            files = files.concat(     yield createFiles(require('./seeds/files/subtitles')()));

            let scores              = yield createDocuments(require('./seeds/score')());
            let achievements        = yield createDocuments(require('./seeds/achievements')(files));
            let oauthClients        = yield createDocuments(require('./seeds/oauthClients')());
            let companies           = yield createDocuments(require('./seeds/companies')());
            let units               = yield createDocuments(require('./seeds/units')(companies));
            // let vacanciesProcess    = yield createDocuments(require('./seeds/vacancyProcess')(companies));
            let studyCategories     = yield createDocuments(require('./seeds/studyCategories')());
            let categories          = yield createDocuments(require('./seeds/categoriesLearning')());
            let testCultural        = yield createDocuments(require('./seeds/testCultural')());
            let lessons             = yield createDocuments(require('./seeds/lessons/historyLifeLesson')(files, categories, scores, achievements));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/interestsLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/yourImageLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/learnToCommunicateLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/appearanceLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/toGreetLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/groupDynamicsProcessStepsLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/professionalAttitudeLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/networkingLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/interviewLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/Aula-Atendimento-17')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/03aulacrencas')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/valueLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/10aulacurriculo')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/interviewSimulationLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/18aulaatendimento2')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/administrativeRoutinesLesson')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/19aulaatendimento3')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/20aulaapresentacaopublico')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/27aulalidarcompessoas')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/04aulasonhos')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/16aularotinasbancarias')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/21aulaapresentacao')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/23aulacriatividade')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/25otimizacao')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/26aulametodosesolucoes')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/28aulalideranca')(files, categories, scores, achievements)));
            lessons = lessons.concat( yield createDocuments(require('./seeds/lessons/29aulaadmdotempo')(files, categories, scores, achievements)));

            let tests               = yield createDocuments(require('./seeds/tests/personalityTest_1')(files, achievements, categories));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/personalityTest_2')(files, tests, achievements, categories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/testeCompetencias_1')(files, tests, achievements, categories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/testeCompetencias_2')(files, tests, achievements, categories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/portugueseTest_n1')(files, tests, achievements, categories, studyCategories)));

            // caio test
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/02test1conhecimentogerais')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/02test2conhecimentogerias')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/02test3conhecimentogerais')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/07test1matematica')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/07test2matematica')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/07test3matematica')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/portugueseTest_n2')(files, tests, achievements, categories, studyCategories)));
            tests = tests.concat(     yield createDocuments(require('./seeds/tests/portugueseTest_n3')(files, tests, achievements, categories, studyCategories)));

            let occupations         = yield createDocuments(require('./seeds/occupations')(files));
            let hollandAreas        = yield createDocuments(require('./seeds/hollandAreas')(files, occupations));
            let personalityTypes    = yield createDocuments(require('./seeds/personalityTypesSeed')(hollandAreas, files));

            let ways                = yield createDocuments(require('./seeds/ways/wayInitialSeed')(lessons, tests, files));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayArtSeed')(hollandAreas, lessons, tests, files)));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayAdmSeed')(hollandAreas, lessons, tests, files)));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayOperationSeed')(hollandAreas, lessons, tests, files)));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayScienceTechSeed')(hollandAreas, lessons, tests, files)));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayServiceSocialSeed')(hollandAreas, lessons, tests, files)));
            ways = ways.concat(       yield createDocuments(require('./seeds/ways/wayTecnicoSeed')(hollandAreas, lessons, tests, files)));

            let users               = yield createDocuments(require('./seeds/users')(ways, oauthClients));
            let recruiters          = yield createDocuments(require('./seeds/recruiters')(users, companies, units));
            let vacancies           = yield createDocuments(require('./seeds/vacancies')(companies, users));
            let vacancyCandidates   = yield createDocuments(require('./seeds/vacancyCandidates')(users, vacancies));
            let textContent         = yield createDocuments(require('./seeds/textContent')());
            // let notification        = yield createDocuments(require('./seeds/notification')(users));
            let newsFilter          = yield createDocuments(require('./seeds/news/newsFilter')());
            let newsCategory        = yield createDocuments(require('./seeds/news/newsCategory')());
            let news                = yield createDocuments(require('./seeds/news')(newsCategory));
            // let transactions        = yield createDocuments(require('./seeds/transactions')(companies, recruiters, users));
            let vacancyProfiles     = yield createDocuments(require('./seeds/vacancyProfiles')());
            let messageTemplates    = yield createDocuments(require('./seeds/messageTemplates')(files));


            // let interestAreas       = yield createDocuments(require('./seeds/interestAreas')());
            // let userTests           = yield createDocuments(require('./seeds/userTests')(users, tests));
            // let userLesson          = yield createDocuments(require('./seeds/userLesson')(users, lessons, lessonActivities));
            // let lessonComments      = yield createDocuments(require('./seeds/lessonComments')(users, lessons));
        } catch (err) {
            console.error(err.stack);
        }
        console.log('\n\t\t', ':)');
        process.exit();
    });
});
