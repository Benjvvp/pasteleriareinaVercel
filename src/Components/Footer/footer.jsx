import React from "react";

import './footer.css';

export default function Footer() {
  return (
    <div className="footerSection">
        <div className="footerContainer">
            <img src="/img/largeborder.png" alt="" srcSet="" className="footerContainer__borderimg" />
            <h1 className="footerContainer__title mt-4">Siguenos</h1>
            <div className="d-flex justify-content-center mb-4">
                <a href="mailto:pasteleriareina@gmail.com"><i class="bi bi-envelope footerContainer__icon"></i></a>
                <a href="https://www.facebook.com/reinarealtentacion"><i class="bi bi-facebook footerContainer__icon"></i></a>
                <a href="https://www.instagram.com/pasteleria_reina/"><i class="bi bi-instagram footerContainer__icon"></i></a>
            </div>
            <img src="/img/largeborder.png" alt="" srcSet="" className='footerContainer__borderimg' />
            <div className="d-flex footerContainer__brand">
                <img src="/img/cakeicon.png" alt="" width="80" height="54" />
                Pasteleria Reina
            </div>
            <p className='footerContainer__copyright'>Copyright © 2021 | <a href="/politic">Politica y Privacidad</a></p>
        </div>
    </div>
  );
}
