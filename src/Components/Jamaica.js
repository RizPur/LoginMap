import {MapContainer, TileLayer, Polygon} from 'react-leaflet'
import { parishesData } from '../Data/ParishData';
import React from 'react'

const center = [18.19368269899244, -77.39527725784035];
// const PORTLAND = [18.120342265793937, -76.49998468843953]


const color = (d) => { //based on amount logged in at once 
    return d > 10 ? '#800026' :
            d > 5  ? '#BD0026' :
            d > 3  ? '#E31A1C' :
            // d > 0  ? '#FC4E2A' :
            d > 0  ? '#FD8D3C' :
            // d > 0   ? '#FEB24C' :
            // d > 0   ? '#FED976' :
                        '#FFEDA0';
}

const Jamaica = ({setShow, filterParish, setFilterParish, logBar, setLogBar, logs}) =>{
    
    const getCount = (id) => {
        return logs.filter(log=>log.CI.substring(0,2) === id && log.Status).length
        // returns count of employees logged into parish
    }

    return (
    <MapContainer 
        center={center}
        zoom={9}
        style={{ width: '100vw', height: '100vh' }}
        scrollWheelZoom={false}
        zoomControl={false}>
            {/* <MyComponent /> */}
            <TileLayer
            url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=73p7aIRQ0vUQYQlwBn1Q" //different map
            />
            {
            parishesData.features.map((parish) => {
                const coordinates = parish.geometry.coordinates[0].map((item) => [item[1], item[0]]);
                // console.log(parish.properties.name, coordinates)
                
                return (<Polygon
                pathOptions={{
                    fillColor: color(getCount(parish.id)),
                    fillOpacity: 0.7,
                    weight: 2,
                    opacity: 1,
                    dashArray: 3,
                    color: 'white'
                }}
                positions={coordinates}
                eventHandlers={{
                    mouseover: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                        dashArray: "",
                        fillColor: "#BD0026",
                        fillOpacity: 0.7,
                        weight: 2,
                        opacity: 1,
                        color: "white",
                    })
                    },
                    mouseout: (e) => {
                    const layer = e.target;
                    layer.setStyle({
                        fillOpacity: 0.7,
                        weight: 2,
                        dashArray: "3",
                        color: 'white',
                        fillColor: color(getCount(parish.id)),
                    });
                    },
                    click: (e) => {
                    // setFilterParish('')
                    setShow(false);
                    console.log("zoom to", parish.id, logs);
                    setLogBar(logBar)
                    setFilterParish(parish.id)
                    // console.log(getCount(parish.id, logs))
                    }
                }}
                />)
            })
            }
        </MapContainer>
    )
}

export default Jamaica;