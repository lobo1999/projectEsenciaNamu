import React from "react";
import ImageGallery from 'react-image-gallery';
import { Link } from "react-router-dom";

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
