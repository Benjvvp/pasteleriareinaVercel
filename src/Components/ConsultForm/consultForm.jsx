import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import SucessAlert from "../SucessAlert/SucessAlert";

export default function ConsultForm(props) {
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [flavor, setFlavor] = useState("");
  const [size, setSize] = useState("");
  const [design, setDesign] = useState("");
  const [commune, setCommune] = useState("");
  const [date, setDate] = useState("");
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();
    if (
      name === "" ||
      contact === "" ||
      flavor === "" ||
      size === "" ||
      design === "" ||
      commune === ""
    ) {
      return;
    }
    emailjs
      .sendForm(
        "service_5qejtlg",
        "template_nhdfxrt",
        e.target,
        "user_2ih7wm0nDhK4iHTJJsGdA"
      )
      .then(
        (result) => {
          SucessAlert(
            "Mensaje enviado correctamente, gracias por enviar tu presupuesto."
          );
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form
      className={`needs-validation ${props.isActive ? "" : "d-none"}`}
      useref={form}
      noValidate
      onSubmit={SendEmail}
    >
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="nameFloating"
          placeholder="Nombre"
          required
          onInput={(e) => setName(e.target.value)}
          name="name"
        />
        <label htmlFor="nameFloating">Nombre *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingrese su nombre
        </div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="numberFloating"
          placeholder="Contacto"
          required
          onInput={(e) => setContact(e.target.value)}
          name="contact"
        />
        <label htmlFor="numberFloating">
          Metodo de Contacto (Instagram, Facebook, Numero, etc) *
        </label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingrese su contacto
        </div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="numberFloating"
          placeholder="Sabor"
          required
          onInput={(e) => setFlavor(e.target.value)}
          name="flavor"
        />
        <label htmlFor="numberFloating">Sabor *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">Ingrese el sabor</div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="numberFloating"
          placeholder="Tamaño"
          required
          onInput={(e) => setSize(e.target.value)}
          name="size"
        />
        <label htmlFor="numberFloating">Tamaño *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingrese el tamaño de la torta
        </div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="numberFloating"
          placeholder="Diseño"
          required
          onInput={(e) => setDesign(e.target.value)}
          name="design"
        />
        <label htmlFor="numberFloating">Describa el diseño *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingresa la descripcion del diseño.
        </div>
      </div>
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="numberFloating"
          placeholder="Comuna"
          required
          onInput={(e) => setCommune(e.target.value)}
          name="office"
        />
        <label htmlFor="numberFloating">Comuna de despacho *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingresa tu comuna de despacho.
        </div>
      </div>
      <div className="form-floating">
        <input
          type="date"
          className="form-control input_contact input_date"
          id="numberFloating"
          placeholder="Fecha"
          required
          onInput={(e) => setDate(e.target.value)}
          name="date"
        />
        <label htmlFor="numberFloating">Fecha *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start mb-2">
          Ingresa la fecha para la que quieres la torta.
        </div>
      </div>
      <button type="submit" className="input_contact_button">
        Enviar
      </button>
    </form>
  );
}
