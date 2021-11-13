import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navbar.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./contact.css";

export function ContactPage() {
  const [isActive, setIsActive] = useState(true);
  const [menu, setMenu] = useState(0);
  const [loading, setLoading] = useState(true);

  function getAPISheet() {
    const idSheets = "1TE1x120njvDHTM62LQLdOG0rm9oN8Z26qOMEJyH_Ha4";
    const apiKey = "AIzaSyA4VluaDvCq0jzMWSk9uq8AutMkrz55oFk";
    const values = "A2";
    const URL = `https://content-sheets.googleapis.com/v4/spreadsheets/${idSheets}/values/${values}?access_token=${apiKey}&key=${apiKey}`;
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setIsActive(JSON.parse(data.values.toString().toLowerCase()));
        setLoading(false);
      });
  }

  useEffect(() => {
    getAPISheet();
    const script = document.createElement("script");
    script.src = "/js/validate.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    !loading && (
      <>
        <NavBar active="contact" line="true" />
        <div
          className={`container mt-5 ${menu === 1 && isActive ? "" : "mb-5"}`}
        >
          <div className="row">
            <div className="col-4 me-3">
              <div className="d-flex flex-column d-block mx-auto w-100">
                <button
                  className={`btn btn__contact__select mt-10 fs-4 ${
                    menu === 0 ? "btn__contact__active" : ""
                  }`}
                  onClick={() => setMenu(0)}
                >
                  Contactanos
                </button>
                <button
                  className={`btn btn__contact__select mt-2 fs-4 ${
                    menu === 1 ? "btn__contact__active" : ""
                  }`}
                  onClick={() => setMenu(1)}
                >
                  Consultar Cotizacion
                </button>
              </div>
            </div>
            <div className="col">
              <div
                className={`informationSection mx-auto ${
                  menu === 0 ? "" : "d-none"
                }`}
              >
                <h1 className="informationSection__title">Contactanos</h1>
                <form className="needs-validation" noValidate>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control input_contact"
                      id="nameFloating"
                      placeholder="Benjamin"
                      required
                    />
                    <label htmlFor="nameFloating">Nombre *</label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start mb-2">
                      Ingresa tu nombre
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      type="email"
                      className="form-control input_contact"
                      id="emailFloating"
                      placeholder="Benjamin"
                      required
                    />
                    <label htmlFor="emailFloating">Correo *</label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start mb-2">
                      Ingresa tu correo
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control input_contact"
                      id="numberFloating"
                      placeholder="Benjamin"
                      required
                    />
                    <label htmlFor="numberFloating">
                      Metodo de Contacto (Instagram, Facebook, Numero, etc) *
                    </label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start mb-2">
                      Ingresa tu contacto
                    </div>
                  </div>
                  <div className="form-floating mt-4">
                    <textarea
                      className="form-control input_contact_textarea"
                      placeholder="Mensaje"
                      id="floatingTextarea"
                      required
                    ></textarea>
                    <label htmlFor="floatingTextarea">Mensaje *</label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start">
                      Ingresa tu mensaje
                    </div>
                  </div>
                  <button type="submit" className="input_contact_button">
                    Enviar
                  </button>
                </form>
              </div>
              <div
                className={`informationSection mx-auto ${
                  menu === 1 ? "" : "d-none"
                }`}
              >
                <h1 className={`informationSection__title`}>
                  {isActive
                    ? "Consultar cotizacion"
                    : "Tenemos la agenda llena, no se permite mas cotizaciones."}
                </h1>
                <form
                  className={`needs-validation ${isActive ? "" : "d-none"}`}
                  noValidate
                >
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control input_contact"
                      id="nameFloating"
                      placeholder="Benjamin"
                      required
                    />
                    <label htmlFor="nameFloating">Nombre *</label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start mb-2">
                      Ingresa tu nombre
                    </div>
                  </div>
                  <div className="form-floating">
                    <input
                      type="text"
                      className="form-control input_contact"
                      id="numberFloating"
                      placeholder="Benjamin"
                      required
                    />
                    <label htmlFor="numberFloating">
                      Metodo de Contacto (Instagram, Facebook, Numero, etc) *
                    </label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start mb-2">
                      Ingresa tu contacto
                    </div>
                  </div>
                  <div className="form-floating mt-4">
                    <textarea
                      className="form-control input_contact_textarea"
                      placeholder="Mensaje"
                      id="floatingTextarea"
                      required
                    ></textarea>
                    <label htmlFor="floatingTextarea">Mensaje *</label>
                    <div className="valid-feedback text-start">Bien!</div>
                    <div className="invalid-feedback text-start">
                      Ingresa tu mensaje
                    </div>
                  </div>
                  <button type="submit" className="input_contact_button">
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
