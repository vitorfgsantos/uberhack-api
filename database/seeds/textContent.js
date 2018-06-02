'use strict';

const TextContent = require('../../src/models/textContentModel').TextContent;

module.exports = () => (
    [
        new TextContent({
            key: 'help',
            text: `    <div class="padding">
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eget pharetra dui. Aenean et viverra nisl.
                  </h4>

                </div>

                <div class="row item-number-list purple">
                  <div class="col-20">

                    <h1 class="text-center">01</h1>
                  </div>
                  <div class="col">
                    <p>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div class="row item-number-list purple">
                  <div class="col-20">

                    <h1 class="text-center">02</h1>
                  </div>
                  <div class="col">
                    <p>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>
                <div class="row item-number-list purple">
                  <div class="col-20">

                    <h1 class="text-center">03</h1>
                  </div>
                  <div class="col">
                    <p>
                      <strong>Lorem ipsum dolor sit amet,</strong> consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                  </div>
                </div>`
        }),
        new TextContent({
            key: 'about',
            text: `    <div id="about">
                <div class="row bg-purple about-intro">
                  <div class="col-33">
                    <img src="img/icon-taqe-full.svg">
                    </button>
                  </div>
                  <div class="col">
                    <p>
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                      dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                  </div>
                </div>

                <div class="row">
                  <div class="col about-how-work">
                      <h3>Como funciona?</h3>
                      <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
                        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                      </p>
                  </div>
                </div>
              </div>`
        }),
        new TextContent({
            key: 'terms',
            text: `  <div id="terms" class="padding">
            <h2>
              Termos de Serviço
            </h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h4>
                " <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. <br>
                "
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>`
        }),
        new TextContent({
            key: 'privacy',
            text: `  <div id="terms" class="padding">
              <h2>
                Política de Privacidade
              </h2>
              <h4>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>

              <h4>
                " <br>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. <br>
                "
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>`
        })
    ]
);
