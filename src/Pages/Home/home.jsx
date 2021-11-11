import React from "react";
import NavBar from "../../Components/NavBar/navbar.jsx";
import TestimonyCard from "../../Components/TestimonyCard/testimonyCard.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./home.css";

export function HomePage() {
  return (
    <>
      <NavBar active='home' />
      <img
        src="/img/homeslider01.png"
        alt=""
        srcset=""
        className="homesliderimg"
      />
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">
            Bienvenidos a nuestra pagina
          </h1>
          <p className="informationSection__description">
            Nos consediremas la mejor pasteleria, nos importa cada uno de los
            detalles en todas las tortas que hacemos para satisfacer a nuestro
            cliente. Hemos crecido gracias a todos nuestros clientes los cuales
            ya son mas de 500 y todos estos nos han recomendado de forma
            positiva, que esperas.. Agenda ya tu torta!.
          </p>
        </div>
      </div>
      <div className="testimonySection">
        <h1 className="testimonySection__title">Testimonios</h1>
        <div class="row justify-content-around align-items-center mt-3">
          <div class="col">
            <TestimonyCard
              img="/img/testimonyIMG01.jpg"
              name="Jacqueline Muñoz"
              testimony="“I've been eating their business lunches for past 7 years. Not even once have I had any unpleasant experience. And the dishes always taste fresh and good!​​​​​”"
            />
          </div>
          <div class="col"><TestimonyCard
              img="/img/testimonyIMG02.jpg"
              name="Alejandro Mellado"
              testimony="“I've been eating their business lunches for past 7 years. Not even once have I had any unpleasant experience. And the dishes always taste fresh and good!​​​​​”"
            /></div>
          <div class="col"><TestimonyCard
              img="/img/testimonyIMG03.jpg"
              name="Lilly Piraud"
              testimony="“I've been eating their business lunches for past 7 years. Not even once have I had any unpleasant experience. And the dishes always taste fresh and good!​​​​​”"
            /></div>
        </div>
      </div>
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title pt-md-5 pt-5">
            Como ordenar
          </h1>
          <div className="row justify-content-center mt-5 p-4">
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img src="/img/calendaryicon.png" alt="" srcset="" className='icon_orden' />
              <p className="number_orden">01</p>
              <a className="text_orden" href='/contact'>Definir fecha</a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img src="/img/cakeicon.svg" alt="" srcset="" className='icon_orden' />
              <p className="number_orden">02</p>
              <a className="text_orden" href='/contact'>Definir torta</a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img src="/img/lettericon.png" alt="" srcset="" className='icon_orden' />
              <p className="number_orden">03</p>
              <a className="text_orden" href='/contact'>Definir propuesta</a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img src="/img/presenticon.png" alt="" srcset="" className='icon_orden' />
              <p className="number_orden">04</p>
              <a className="text_orden" href='/contact'>Llegada a tu hogar</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
