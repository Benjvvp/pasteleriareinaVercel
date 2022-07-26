import React from "react";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";
import NavBar from "../../Components/NavBar/navbar.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import "./home.css";

export function HomePage() {
  function imageClick(e, person, desc) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    let mymodal = new bootstrap.Modal(document.getElementById("galleryModal"));
    document.querySelector(".best_cakes_title").innerHTML = person;
    document.querySelector(".best_cakes_desc").innerHTML = desc;
    mymodal.show();
  }
  return (
    <>
      <NavBar active="home" />
      <img
        src="/img/homeslider01.png"
        alt=""
        srcSet=""
        className="homesliderimg"
      />
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">
            Bienvenidos a nuestra pagina
          </h1>
          <p className="informationSection__description">
            Te damos la bienvenida a nuestra página. Un mundo mágico de dulces
            sabores para esa ocasión especial. El diseño que buscas, el sabor
            que prefieras y en la comodidad de tu hogar. <b>Atrévete
            a probarnos, te sorprenderás.</b>
          </p>
        </div>
      </div>
      <div className="informationSection__container pb-0">
        <div className="informationSection mb-0">
          <h1 className="informationSection__title">Algunos de nuestros diseños</h1>
          <div className="imageGallery_imgContainer row justify-content-center">
            <div className="imageGalleryBest__imgDiv col-8 col-xl-3 col-lg-5 pb-lg-5 col-md-6">
              <img
                src="/img/best_cakes/0.jpeg"
                alt={`Imagen numero`}
                srcSet=""
                className="mx-auto d-block"
                onClick={(e) =>
                  imageClick(
                    e,
                    "Pamela Herrera",
                    "La torta mas linda del mundo para la quinceañera mas linda del mundo mundial!!"
                  )
                }
              />
            </div>
            <div className="imageGalleryBest__imgDiv col-8 col-xl-3 col-lg-5 pb-lg-5 col-md-6">
              <img
                src="/img/best_cakes/1.jpg"
                alt={`Imagen numero`}
                srcSet=""
                className="mx-auto d-block"
                onClick={(e) =>
                  imageClick(
                    e,
                    "Jackita Muñoz",
                    "Maravillosa en general la tematica y que decir el relleno 👏👏 100% recomendable."
                  )
                }
              />
            </div>
            <div className="imageGalleryBest__imgDiv col-8 col-xl-3 col-lg-5 pb-lg-5 col-md-6">
              <img
                src="/img/best_cakes/2.jpeg"
                alt={`Imagen numero`}
                srcSet=""
                className="mx-auto d-block"
                onClick={(e) =>
                  imageClick(
                    e,
                    "Carmen Molina",
                    "Hooooo se paso Carlitos, que trabajo mas hermoso felicitaciones."
                  )
                }
              />
            </div>
            <div className="imageGalleryBest__imgDiv col-8 col-xl-3 col-lg-5 pb-lg-5 col-md-6">
              <img
                src="/img/best_cakes/3.jpeg"
                alt={`Imagen numero`}
                srcSet=""
                className="mx-auto d-block"
                onClick={(e) =>
                  imageClick(
                    e,
                    "Carol",
                    "Hermosa la torta, muchas gracias. Tiene muy buena presentacion y con un excelente sabor. 100% recomendable."
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title pt-md-5 pt-5">
            Como ordenar
          </h1>
          <div className="row justify-content-center mt-5 p-4">
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img
                src="/img/calendaryicon.png"
                alt=""
                srcSet=""
                className="icon_orden"
              />
              <p className="number_orden">01</p>
              <a className="text_orden" href="/contact">
                Sabor
              </a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img
                src="/img/cakeicon.svg"
                alt=""
                srcSet=""
                className="icon_orden"
              />
              <p className="number_orden">02</p>
              <a className="text_orden" href="/contact">
                Tamaño
              </a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img
                src="/img/lettericon.png"
                alt=""
                srcSet=""
                className="icon_orden"
              />
              <p className="number_orden">03</p>
              <a className="text_orden" href="/contact">
                Diseño
              </a>
            </div>
            <div className="col col-xl-3 col-lg-5 pb-lg-5 col-md-10 pb-5">
              <img
                src="/img/presenticon.png"
                alt=""
                srcSet=""
                className="icon_orden"
              />
              <p className="number_orden">04</p>
              <a className="text_orden" href="/contact">
                Despacho
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      <div
        class="modal fade"
        id="galleryModal"
        tabindex="-1"
        aria-labelledby="galleryModal"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div
            className="modal-content bg-dark border-0"
            id="modal-content-best_cakes"
          >
            <div className="modal-body p-0" id="modal-body-best_cakes">
              <div className="container">
                <div className="row">
                  <div className="col ps-0">
                    <img
                      className="modal-img d-inline-block"
                      id="modal-img-best_cakes"
                      alt="imagen click"
                    ></img>
                  </div>
                  <div className="col p-3">
                    <h1 className="best_cakes_title text-center">
                      Juanita Carmensita
                    </h1>
                    <p className="best_cakes_desc text-center mt-5">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Numquam sequi sapiente atque unde maxime eos, obcaecati
                      rem. Repellat laboriosam molestias maiores id illum modi
                      delectus, dolor aspernatur, nihil ab ad, porro accusamus.
                      Sed aperiam perferendis in ipsum, nostrum sunt nulla,
                      velit laudantium, omnis quibusdam ad. Totam vel nemo
                      eveniet ex reiciendis enim quod obcaecati dolor fuga
                      inventore, praesentium similique ullam?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
