import React from "react";
import NavBar from "../../Components/NavBar/navbar.jsx";
import Footer from "../../Components/Footer/footer.jsx";
import bootstrap from "bootstrap/dist/js/bootstrap.bundle.min";

import "./cakes.css";

export function CakesPage() {
  function exportImages() {
    const imgURL = [];
    for (var i = 1; i < 35; i++) {
      imgURL.push(`/img/instagram/${i}.jpeg`);
    }
    return imgURL;
  }
  function imageClick(e) {
    const src = e.target.getAttribute("src");
    document.querySelector(".modal-img").src = src;
    let mymodal = new bootstrap.Modal(document.getElementById("galleryModal"));
    mymodal.show();
  }

  return (
    <>
      <NavBar active="cakes" line="true" />
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">Variedad de pasteles</h1>
          <p className="informationSection__description">
            Además de tortas, elaboramos diferentes tipos de pasteles, como pie
            de limón, küchen de manzana, tartaleta de frutas, chessecake, etc.
          </p>
        </div>
      </div>
      <div className="imageGallery">
        <h1 className="imageGallery__title">Galeria</h1>
        <div className="imageGallery_imgContainer row">
          {exportImages().map((img, index) => (
            <div className="imageGallery__imgDiv col" key={index}>
              <img
                src={img}
                alt={`Imagen numero ${index}`}
                srcSet=""
                onClick={(e) => imageClick(e)}
                className="mx-auto d-block"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="informationSection">
          <h1 className="informationSection__title">¿ Porque elegirnos ?</h1>
          <p className="informationSection__description">
            Porque en Pastelería Reina podrás encontrar experiencia y dedicación
            en cada uno de nuestros productos, diseños desde el más simple al
            más complejo, variedad de sabores y productos de excelente calidad.
          </p>
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
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-body p-0">
              <img className="modal-img" alt="imagen click"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
