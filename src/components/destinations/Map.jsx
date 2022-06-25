import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Slider from "react-slick";

const COSTA_RICA = {lat: 9.8084883, lng: -84.281068};
const API_URL = "https://api.unsplash.com/photos/?client_id=m2vzQnSBpOgGwMldmxiALVYBGuEgyW4uswPUxpBpjvA";
let places = [];


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
    const [mapInstance, setMapInstance] = useState(null);
    const RESTRICTS = {
        north: 11.36,
        south: 57.74,
        west: 48.50,
        east: -10.08
    }
    let marker3 = {lat: 9.6528243, lng: -82.7423077, key: 1};
    let marker1 = {lat: 9.5700453, lng: -84.5993987, key: 2};
    let marker2 = {lat: 9.6909023, lng: -85.2051687, key: 3};
    let locations = [marker3, marker1, marker2];

    places = GET();

    return(

        <GoogleMap
            options={{
                fullscreenControl:false,
                mapTypeControl:false,
                maxZoom:14,
                minZoom:7,
                restriction:{ latLngBounds: RESTRICTS,
                              strictBounds:false},
                streetViewControl:false
            }}
            zoom={8}
            center={COSTA_RICA} 
            mapContainerClassName="mapContainer"
            onLoad={(map) => setTimeout(() => setMapInstance(map))}
        >
            {/* 
                {mapInstance && places && places.map(places => (
                    key={place.key} 
                    position={{
                        lat: place.lat, lng: place.lng
                    }}
                    onClick={() => {
                        setSelectedPlace(place);
                    }}
                />))} 
            */} 
            {mapInstance && (locations.map(place => (
                <Marker
                    key={place.key} 
                    position={{
                        lat: place.lat, lng: place.lng
                    }}
                    onClick={() => {
                        setSelectedPlace(place);
                    }}
                />
            )))}

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

const GET = () => {

    const[array, setArray] = useState([]);

    useEffect( () => {
        
        const getApi = async () => {
            const response = await fetch(API_URL);
            const jsonResponse = await response.json();
            setArray(jsonResponse);
        }
        
        getApi();

    }, []);

    return array;
}

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
        slidesToScroll={slidesToScroll}>
            {Array.from(places).map(p => (
                <img src={p.urls.regular} />
            ))}                
        </Slider>
    )
}
