import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const API_PLACESPHOTOS = "https://namu-app-backend.herokuapp.com/api/image";
var photos = [];
var photosPlaces = [];

const GET_PHOTOS = (id) => {
  const getApi = async () => {
    const response = await fetch(`${API_PLACESPHOTOS}/${id}`);
    const jsonResponse = await response.json();
    photosPlaces = jsonResponse;
  };

  getApi();
};

const Gallery = () => {
  return <CarouselLoad />;
};

const photosCarousel = [
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455578/Catarata%20Nauyaca/6_ghnc9n.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455653/San%20Juan%20de%20Chic%C3%BAa/1_puhwhu.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455654/San%20Juan%20de%20Chic%C3%BAa/2_mqrfv0.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455653/San%20Juan%20de%20Chic%C3%BAa/3_uey3jn.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455608/Parque%20E%C3%B3lico%20Santa%20Ana/1_iu5ki1.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455608/Parque%20E%C3%B3lico%20Santa%20Ana/3_nkbnif.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455661/Volc%C3%A1n%20Arenal/2_t4it3c.jpg",
  "https://res.cloudinary.com/esencianamu-resonanciagaia/image/upload/v1658455599/Cr%C3%A1ter%20La%20Olla/4_rki6ca.jpg"
];

const CarouselLoad = () => {
  const infiniteTrue = true;
  const speed = 700;
  const slidesToScroll = 1;
  const slidesToShow = 3;
  return (
    <Slider
      infinite={infiniteTrue}
      speed={speed}
      slidesToShow={slidesToShow}
      slidesToScroll={slidesToScroll}
    >
      {Array.from(photosCarousel).map((p) => (
        <img src={p} />
      ))}
    </Slider>
  );
};

export default Gallery;
