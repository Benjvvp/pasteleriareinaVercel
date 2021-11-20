import React, { useState, useRef } from "react";
import emailjs from "emailjs-com";
import SucessAlert from "../SucessAlert/SucessAlert";

export default function ContactForm() {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const SendEmail = (e) => {
    e.preventDefault();
    SucessAlert('Mensaje enviado correctamente, gracias por contactarnos.');
    console.log(`${name}, ${email}, ${contact}, ${message}`)
    /*emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "template_nhdfxrt",
        form.current,
        "user_2ih7wm0nDhK4iHTJJsGdA"
      )
      .then(
        (result) => {
          
        },
        (error) => {
          console.log(error.text);
        }
      );*/
  };

  return (
    <form
      className="needs-validation"
      noValidate
      ref={form}
      onSubmit={SendEmail}
    >
      <div className="form-floating">
        <input
          type="text"
          className="form-control input_contact"
          id="nameFloating"
          placeholder="Benjamin"
          required
          onInput={(e) => setName(e.target.value)}
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
          onInput={(e) => setEmail(e.target.value)}
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
          onInput={(e) => setContact(e.target.value)}
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
          onInput={(e) => setMessage(e.target.value)}
        ></textarea>
        <label htmlFor="floatingTextarea">Mensaje *</label>
        <div className="valid-feedback text-start">Bien!</div>
        <div className="invalid-feedback text-start">Ingresa tu mensaje</div>
      </div>
      <button type="submit" className="input_contact_button">
        Enviar
      </button>
    </form>
  );
}
