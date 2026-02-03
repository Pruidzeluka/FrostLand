import React, { useTransition } from 'react';
import { MapContainer, TileLayer, LayersControl, ZoomControl } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useTranslation } from 'react-i18next';

function Satellite() {

  const {t} = useTranslation()

  const API_KEY = "e7688e77154867fa28c9e579175e1974";
  const center = [42.0, 44.0];

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden">

      <MapContainer
        center={center}
        zoom={6}

        scrollWheelZoom={true}
        zoomControl={false} 
        className="h-full w-full"
      >
        <LayersControl position="bottomright">
          <LayersControl.BaseLayer checked name={t('Standart Map')}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; OpenStreetMap contributors'
            />
          </LayersControl.BaseLayer>

          <LayersControl.BaseLayer name={t("Satelite (Google)")}>
            <TileLayer
              url="https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}"
              attribution='&copy; Google Satellite'
            />
          </LayersControl.BaseLayer>

          <LayersControl.Overlay name={t("Clouds")} checked>
            <TileLayer
              url={`https://tile.openweathermap.org/map/clouds_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.8}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name={t("Humidity (Rain/Snow)")}>
            <TileLayer
              url={`https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.8}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name={t("Temperature")}>
            <TileLayer
              url={`https://tile.openweathermap.org/map/temp_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.6}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name={t("Wind speed and orientation")}>
            <TileLayer
              url={`https://tile.openweathermap.org/map/wind_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.8}
            />
          </LayersControl.Overlay>

          <LayersControl.Overlay name={t("Atmospheric preasure")}>
            <TileLayer
              url={`https://tile.openweathermap.org/map/pressure_new/{z}/{x}/{y}.png?appid=${API_KEY}`}
              opacity={0.6}
            />
          </LayersControl.Overlay>
        </LayersControl>

        <ZoomControl position="bottomright" />
      </MapContainer>

    </div>
  );
}

export default Satellite;