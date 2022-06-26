import './App.css';
import { useState } from 'react';
import {MapContainer, TileLayer, Polygon} from 'react-leaflet'
// import Modal from './Modal/Modal'
import {Modal, Form, Button} from 'react-bootstrap'
import { parishesData } from './Data/ParishData';


const center = [18.19368269899244, -77.39527725784035];
// const [activeFE, setActiveFE] = useState(null)
function App() {
  const [show, setShow] = useState(false)
  return (
    <>
      {/* <Modal id={"Modal"} show={show} title ="Logins" onClose={()=> setShow(false)}>
        <div className='modal-body'>Logins go here</div>
        <div className='modal-body'>Logins go here</div>
      </Modal> */}
      <Modal show={show} id={"main-modal"}>
        <Modal.Header>
          <Modal.Title>
            Login Form
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <></>
        </Modal.Body>
        <Modal.Footer>
          <button onClick={() => setShow(false)}>Close Modal</button>
        </Modal.Footer>
      </Modal>
      <button id="login_button" onClick={() => setShow(true)}>Login</button>
      <MapContainer 
      center={center}
      zoom={9}
      style={{ width: '100vw', height: '100vh' }}
      scrollWheelZoom={false}>
        <TileLayer
        url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=73p7aIRQ0vUQYQlwBn1Q" //different map
        />
        <button id="login_button" onClick={() => setShow(true)}>Login</button>
        {
            parishesData.features.map((parish) => {
              const coordinates = parish.geometry.coordinates[0].map((item) => [item[1], item[0]]);
              console.log(parish.properties.name, coordinates)
              const color = (d) => {
                return d > 1000 ? '#800026' :
                      d > 500  ? '#BD0026' :
                      d > 200  ? '#E31A1C' :
                      d > 100  ? '#FC4E2A' :
                      d > 50   ? '#FD8D3C' :
                      d > 20   ? '#FEB24C' :
                      d > 10   ? '#FED976' :
                                  '#FFEDA0';
              }
              
              return (<Polygon
                pathOptions={{
                  fillColor: color(parish.properties.density),
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
                      fillColor: color(parish.properties.density),
                    });
                  },
                  click: (e) => {
                    const layer = e.target;
                    setShow(false);
                    console.log("zoom to", parish.properties.name);
                  }
                }}
              />)
            })
          }
      </MapContainer>
    </>  
  );
}

export default App;
