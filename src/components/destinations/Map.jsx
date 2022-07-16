import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState, useEffect } from "react";
import {GoogleMap, useLoadScript, Marker, InfoWindow} from "@react-google-maps/api";
import Slider from "react-slick";

const COSTA_RICA = {lat: 9.8084883, lng: -84.281068};
const API_PLACES = "https://namu-app-backend.herokuapp.com/api/places";
const API_COORDINATES = "https://namu-app-backend.herokuapp.com/api/coordinates";
const API_PLACESPHOTOS = "https://namu-app-backend.herokuapp.com/image";
var places = [];
var coordinates = [];
var photos = [];


export default function Map() {
    
    const { isLoaded } = useLoadScript ({
        googleMapsApiKey: "AIzaSyAHvYObiEXhY8VTbWGNGDkZahQozhsne70",
    });

    if(!isLoaded) return <NoLoaded/>;
    return <GoMap/>

}

function NoLoaded() {
    return(
        <h1>No ha cargado</h1>
    )
}

const GET_PLACES = () => {

    const[array, setArray] = useState([]);

    useEffect( () => {
        
        const getApi = async () => {
            const response = await fetch(API_PLACES);
            const jsonResponse = await response.json();
            setArray(jsonResponse);
        }
        
        getApi();

    }, []);
    
    return array;
}

const GET_COORDINATES = () => {

    const[array, setArray] = useState([]);

    useEffect( () => {
        
        const getApi = async () => {
            const response = await fetch(API_COORDINATES);
            const jsonResponse = await response.json();
            setArray(jsonResponse);
        }
        
        getApi();

    }, []);
    return array;
}

const GET_PHOTOS = (id) => {

    const[array, setArray] = useState(null);

    const getApi = async () => {

        const response = await fetch(`${API_PLACESPHOTOS}/${id}`);
        const imgBlob = await response.blob();
        const reader = new FileReader();
        reader.readAsDataURL(imgBlob);
        reader.onloadend = () => {
            const base64data = reader.result;
            setArray(base64data);
        }

    }
    
    getApi();

    return array;
}

function GoMap() {

    const [selectedPlace, setSelectedPlace] = useState(null);
    const [selectedCoords, setSelectedCoords] = useState(null)
    const [mapInstance, setMapInstance] = useState(null);
    places = GET_PLACES();
    coordinates = GET_COORDINATES();
    var placeAtCord = null;

    return(

        <GoogleMap
            options={{
                fullscreenControl:false,
                mapTypeControl:false,
                maxZoom:14,
                minZoom:7,
                streetViewControl:false
            }}
            zoom={8}
            center={COSTA_RICA} 
            mapContainerClassName="mapContainer"
            onLoad={(map) => setTimeout(() => setMapInstance(map))}
        >

            {mapInstance && (places.map(place => (
                placeAtCord = coordinates.find(c => c.id === place.idCoordinate),
                <Marker
                    key={place.id} 
                    position={{
                        lat: Number(placeAtCord.latitude), 
                        lng: Number(placeAtCord.longitude)
                    }}
                    onClick={() => {
                        setSelectedPlace(place);
                        setSelectedCoords(placeAtCord);
                    }}
                />
            )))}
            
            {selectedPlace && (
                
                <InfoWindow 
                    position={{
                        lat: Number(selectedCoords.latitude),
                        lng: Number(selectedCoords.longitude)
                    }}
                    onCloseClick={() => {
                        setSelectedPlace(null);
                        setSelectedCoords(null);
                    }}
                >
                    
                    <div className="place__container">
                        <div className="place__info">
                            <h3>{selectedPlace.name}</h3>
                            <p className="place__description">{selectedPlace.description}</p>
                            <hr/>
                            <p className="place__extra">
                                Horario: {selectedPlace.schedule}
                                <br/>
                                Precio: {selectedPlace.priceEntry}
                            </p>
                        </div>
                        <div className="place__carousel">
                        </div>
                    </div>
                </InfoWindow>
            )}
            
        </GoogleMap>

    )
}


const CarouselLoad = (photos) => {

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
            {Array.from(photos).map(p => (
                <img src={p.image} />
            ))}                
        </Slider>
    )
}
