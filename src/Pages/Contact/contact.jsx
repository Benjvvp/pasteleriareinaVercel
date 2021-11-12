import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navbar.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./contact.css";

export function ContactPage() {
  const [isActive, setIsActive] = useState(true);
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
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    !loading && (
      <>
        <NavBar active="contact" line="true" />
        <div className="container mt-5">
          <div className="informationSection w-75 mx-auto">
            <h1 className="informationSection__title">
              {isActive ? "Contactanos" : "Tenemos la agenda llena"}
            </h1>
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
        </div>
        <Footer />
      </>
    )
  );
}
