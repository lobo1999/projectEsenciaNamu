import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Slider from "react-slick";

const cr = {lat: 9.8084883, lng: -84.281068};

export default function Map() {
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: "",
    });
    if(!isLoaded) return <NoLoaded/>;
    return <GoMap/>
}

function NoLoaded() {
    return(
        <h1>No ha cargado</h1>
    )
}


function GoMap() {
    const [selectedPlace, setSelectedPlace] = useState(null);

    let marker3 = {lat: 9.6528243, lng: -82.7423077, key: 1};
    let marker1 = {lat: 9.5700453, lng: -84.5993987, key: 2};
    let marker2 = {lat: 9.6909023, lng: -85.2051687, key: 3};
    let locations = [marker3, marker1, marker2];
    
    return(

        <GoogleMap
            options={{
                streetViewControl:false,
                fullscreenControl:false,
                mapTypeControl:false
            }}
            zoom={8}
            center={cr} 
            mapContainerClassName="mapContainer"
        >
            <Marker></Marker>
            {locations.map(place => (
                <Marker
                    key={place.key} 
                    position={{
                        lat: place.lat, lng: place.lng
                    }}
                    onClick={() => {
                        setSelectedPlace(place);
                    }}
                />
            ))}
            {selectedPlace && (
                <InfoWindow 
                    position={{
                        lat: selectedPlace.lat,
                        lng: selectedPlace.lng
                    }}
                    onCloseClick={() => {
                        setSelectedPlace(null);
                    }}
                >
                    
                    <div className="place__container">
                        <div className="place__info">
                            <h3>Nombre del lugar</h3>
                            <p className>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi non quidem, culpa temporibus rerum placeat odit. Deleniti est, dolorum rerum, tenetur tempora incidunt modi recusandae quae esse consequatur eius temporibus quibusdam odio nemo voluptas laborum fugiat excepturi illum minus distinctio.</p>
                        </div>
                        <div className="place__carousel">
                            <CarouselLoad/>
                        </div>
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>

    )
}

const ApiLoad = () => {
    const [APIstate, setAPIstate] = useState({
        loading: false,
        repos: null
    });
    let state = {photos: []};
}

const CarouselLoad = () => {
    const infiniteTrue = true;
    const speed = 700;
    const slidesToScroll = 1;
    const slidesToShow = 3;
    const [animation, setAnimation] = useState(undefined);
    const [autoplay, setAutoplay] = useState(false);
    const [cellAlign, setCellAlign] = useState("left");
    const [cellSpacing, setCellSpacing] = useState(0);
    const [heightMode, setHeightMode] = useState("max");
    const [scrollMode, setScrollMode] = useState("remainder");
    const [slideIndex, setSlideIndex] = useState(0);
    const [transitionMode, setTransitionMode] = useState("scroll");
    const [underlineHeader, setUnderlineHeader] = useState(false);
    
    return (
        <Slider
        infinite={infiniteTrue}
        speed={speed}
        slidesToShow={slidesToShow}
        slidesToScroll={slidesToScroll}>
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide1" />         
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide2" />         
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide3" />         
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide4" />         
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide5" />         
            <img src="https://via.placeholder.com/400/13b2a8/c0392b/&text=slide6" />                     
        </Slider>
    )
}
