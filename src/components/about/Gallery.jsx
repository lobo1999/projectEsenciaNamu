import React from "react";
import { useEffect, useState } from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";

const API_PLACESPHOTOS = "https://namu-app-backend.herokuapp.com/api/image";
var photos = [];

const GET_PHOTOS = (id) => {

  const[array, setArray] = useState([]);

  const getApi = async () => {
      
      const response = await fetch(`${API_PLACESPHOTOS}/${id}`);
      const buffer = await response.arrayBuffer();
      const binaryString = Array.from(new Uint8Array(buffer), byte => String.fromCharCode(byte)).join("");
      const theImage = btoa(binaryString);
      setArray(theImage);
  }

  useEffect(() => {
      getApi();
  }, []);
  
  return array;
}

const images = [
    {
      original: 'https://media.discordapp.net/attachments/959854421842481157/992209553905164308/2.jpg?width=490&height=613',
      thumbnail: 'https://media.discordapp.net/attachments/959854421842481157/992209553905164308/2.jpg?width=490&height=613',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ];
  
  class Gallery extends React.Component {
    render() {
      
      return <ImageGallery items={images} />;

    }
    
  }

  export default Gallery;
