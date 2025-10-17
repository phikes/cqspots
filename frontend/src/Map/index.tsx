import { LocateControl } from "./LocateControl"
import Styles from "./index.module.scss"
import "leaflet/dist/leaflet.css"
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"

export const Map = () => {
  return <MapContainer className={Styles.map} center={[30, 0]} zoom={3} scrollWheelZoom={false} preferCanvas>
    <LocateControl />
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        new Array(1000).fill(null).map((_, index) => 
        <Marker key={index} position={[51.505 + (index % 2 === 0 ? (0.0001 * index) : 0), -0.09 + (index % 2 !== 0 ? (0.0001 * index) : 0)]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      )
      }
    </MapContainer>
}
