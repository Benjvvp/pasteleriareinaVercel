import React from "react";

import './testimonyCard.css';

export default function TestimonyCard(props) {
  const {testimony, name, img} = props;

  return (
    <div>
        <div className="d-flex testimonyCard__top">
            <img src={img} alt="" srcSet="" className='testimonyCard__img' />
            <p className='testimonyCard__name my-auto ms-5'>{name}</p>
        </div>
        <div className="testimonyCard__bottom">
            <p className='testimonyCard__testimony'>{testimony}</p>
        </div>
    </div>
  );
}
