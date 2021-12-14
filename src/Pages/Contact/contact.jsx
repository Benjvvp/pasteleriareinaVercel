import React, { useEffect, useState } from "react";
import NavBar from "../../Components/NavBar/navbar.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./contact.css";
import ContactForm from "../../Components/ContactForm/contactForm.jsx";
import ConsultForm from "../../Components/ConsultForm/consultForm.jsx";

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
            <div className="col-xl-4 col-lg-5 pb-lg-5 col-md-12 col-12 me-3 me-md-0 mb-md-5">
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
                <ContactForm />
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
                <ConsultForm isActive={isActive}/>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </>
    )
  );
}
