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
            Somos una pastelería con más de 20 años de experiencia. Pasteleros
            capacitados constantemente buscando perfeccionar las técnicas para
            alcanzar los mayores standares, con insumos de alta calidad, y con
            diseños personalizados originales o replicas de diseños. Nuestro fin
            es llevarte magia y dulzura a la puerta de tu casa, para que puedas
            preocuparte solo de festejar.
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
                Uno de nuestros colaboradores te contactará para determinar
                especificaciones del pedido (Sabor, Tamaño, Diseño y Comuna del
                despacho)
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
                Se realiza el agendamiento. Para esto se solicita el depósito
                previo del 50% del valor del producto
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
                Se inicia proceso de producción
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
                Entrega de producto el día, hora y dirección acordada.
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
                  className="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block mt-3"
                        alt=""
                        srcSet=""
                      />
                      <h1 className="numberAdvantage text-center">01</h1>
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title titleAdvantage">Diseño</h5>
                        <p className="card-text descAdvantage">
                          Hacemos diseños originales y también replicamos alguno
                          de tu preferencia. Se analiza la factibilidad para
                          poder realizar la ejecución de cada proyecto.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12 pt-lg-5">
                <div
                  className="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block mt-3"
                        alt=""
                        srcSet=""
                      />
                      <h1 className="numberAdvantage text-center">02</h1>
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title titleAdvantage">
                          Responsabilidad
                        </h5>
                        <p className="card-text descAdvantage">
                          Tendrás la tranquilidad de recibir tu pedido tal como
                          se acordó, el día y la hora solicitada.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                <div
                  className="card mb-3 border-0 text-start"
                  style={{ maxWidth: 700 + "px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block mt-3"
                        alt=""
                        srcSet=""
                      />
                      <h1 className="numberAdvantage text-center">03</h1>
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title titleAdvantage">Calidad</h5>
                        <p className="card-text descAdvantage">
                          Utilizamos ingredientes de alta calidad, siguiendo las
                          normas establecidas para que recibas un producto
                          óptimo y fresco garantizando la seguridad de tu
                          familia.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6 col-md-7 col-sm-12">
                <div
                  className="card mb-3 border-0 text-start"
                  style={{ maxWidth: 800 + "px" }}
                >
                  <div className="row g-0">
                    <div className="col-md-2">
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block mt-3"
                        alt=""
                        srcSet=""
                      />
                      <h1 className="numberAdvantage text-center">04</h1>
                      <img
                        src="/img/border.png"
                        className="mx-auto d-block"
                        alt=""
                        srcSet=""
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title titleAdvantage">
                          Precios Justos
                        </h5>
                        <p className="card-text descAdvantage">
                          Nuestros precios están establecidos de acuerdo a
                          sabor, estructura base y complejidad del diseño.
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
