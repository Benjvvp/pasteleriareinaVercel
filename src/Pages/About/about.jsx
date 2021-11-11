import React from "react";
import NavBar from "../../Components/NavBar/navbar";
import Footer from "../../Components/Footer/footer.jsx";

import "./about.css";

export function AboutPage() {
  return (
    <>
      <NavBar line="true" active="about" />
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">Acerca de nosotros</h1>
          <p className="informationSection__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            aliquam harum minima reprehenderit eius quae delectus illo, cum
            minus dolorem. Illo minima in eaque, dolorem aspernatur nulla
            eligendi consectetur aliquid ipsum, laboriosam perferendis! Impedit
            ipsa asperiores maxime blanditiis magnam vitae!
          </p>
        </div>
      </div>
      <div className="howtoworkingSection">
        <div className="container">
          <h1 className="howtoworkingSection__title pt-md-5 pt-5 text-center">
            Como Trabajamos
          </h1>
          <div className="row justify-content-center mt-5 p-4">
            <div className="col-xl-3 col-lg-5 pb-lg-5 pt-lg-5 col-md-0 pb-5 howtoworkingCard">
              <img
                src="/img/icons/chat.png"
                alt="Icon Chat"
                srcSet=""
                className="icon_working mx-auto d-block"
              />
              <p className="number_working">01</p>
              <p className="text_working" href="#">
                Primero que todo charlas con uno de nuestros integrantes para
                hacer la agendacion del producto.
              </p>
            </div>
            <div className="col-xl-3 col-lg-5 pb-lg-5 pt-lg-5 col-md-10 pb-5 howtoworkingCard">
              <img
                src="/img/icons/watch.png"
                alt="Icon Watch"
                srcSet=""
                className="icon_working mx-auto d-block"
              />
              <p className="number_working">02</p>
              <p className="text_working" href="#">
                Se agenda la torta en nuestro calendario para tenerla en cuenta
                proximamente.
              </p>
            </div>
            <div className="col-xl-3 col-lg-5 pb-lg-5 pt-lg-5 col-md-10 pb-5 howtoworkingCard">
              <img
                src="/img/icons/stars.png"
                alt="Icon Stars"
                srcSet=""
                className="icon_working mx-auto d-block"
              />
              <p className="number_working">03</p>
              <p className="text_working" href="#">
                Se inicia la produccion de la torta para la entrega a tiempo del
                producto.
              </p>
            </div>
            <div className="col-xl-3 col-lg-5 pb-lg-5 pt-lg-5 col-md-10 pb-5 howtoworkingCard">
              <img
                src="/img/icons/present.png"
                alt="Icon Present"
                srcSet=""
                className="icon_working mx-auto d-block"
              />
              <p className="number_working">04</p>
              <p className="text_working" href="#">
                Se entrega en su hogar el producto de manera correcta.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">Nuestras Ventajas</h1>
          <div className="container-fluid">
            <div className="row justify-content-center">
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 pb-lg-5 pt-lg-5">
                <div
                  class="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-2">
                      <img src="/img/border.png" className='mx-auto d-block mt-3' alt="" srcset="" />
                      <h1 className="numberAdvantage text-center">01</h1>
                      <img src="/img/border.png" className='mx-auto d-block' alt="" srcset="" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title titleAdvantage">Local</h5>
                        <p class="card-text descAdvantage">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, a habitasse aenean dui auctor hendrerit
                          ridiculus tortor, vulputate viverra id cras volutpat
                          platea. Himenaeos fermentum pellentesque augue
                          ultrices ante iaculis fusce facilisi, integer
                          hendrerit purus turpis montes vehicula ullamcorper
                          vestibulum, hac vitae gravida cum erat urna justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 pt-lg-5">
                <div
                  class="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-2">
                      <img src="/img/border.png" className='mx-auto d-block mt-3' alt="" srcset="" />
                      <h1 className="numberAdvantage text-center">02</h1>
                      <img src="/img/border.png" className='mx-auto d-block' alt="" srcset="" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title titleAdvantage">Experiencia</h5>
                        <p class="card-text descAdvantage">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, a habitasse aenean dui auctor hendrerit
                          ridiculus tortor, vulputate viverra id cras volutpat
                          platea. Himenaeos fermentum pellentesque augue
                          ultrices ante iaculis fusce facilisi, integer
                          hendrerit purus turpis montes vehicula ullamcorper
                          vestibulum, hac vitae gravida cum erat urna justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                <div
                  class="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-2">
                      <img src="/img/border.png" className='mx-auto d-block mt-3' alt="" srcset="" />
                      <h1 className="numberAdvantage text-center">03</h1>
                      <img src="/img/border.png" className='mx-auto d-block' alt="" srcset="" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title titleAdvantage">
                          Precios Justos
                        </h5>
                        <p class="card-text descAdvantage">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, a habitasse aenean dui auctor hendrerit
                          ridiculus tortor, vulputate viverra id cras volutpat
                          platea. Himenaeos fermentum pellentesque augue
                          ultrices ante iaculis fusce facilisi, integer
                          hendrerit purus turpis montes vehicula ullamcorper
                          vestibulum, hac vitae gravida cum erat urna justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                <div
                  class="card mb-3 border-0 text-start"
                  style={{ maxWidth: 800 + "px" }}
                >
                  <div class="row g-0">
                    <div class="col-md-2">
                      <img src="/img/border.png" className='mx-auto d-block mt-3' alt="" srcset="" />
                      <h1 className="numberAdvantage text-center">04</h1>
                      <img src="/img/border.png" className='mx-auto d-block' alt="" srcset="" />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title titleAdvantage">
                          Rompemos los Estandares
                        </h5>
                        <p class="card-text descAdvantage">
                          Lorem ipsum dolor sit amet consectetur adipiscing
                          elit, a habitasse aenean dui auctor hendrerit
                          ridiculus tortor, vulputate viverra id cras volutpat
                          platea. Himenaeos fermentum pellentesque augue
                          ultrices ante iaculis fusce facilisi, integer
                          hendrerit purus turpis montes vehicula ullamcorper
                          vestibulum, hac vitae gravida cum erat urna justo.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
