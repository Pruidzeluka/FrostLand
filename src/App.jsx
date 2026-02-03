import React from 'react'
import Header from './components/header.jsx'
import Weather from './pages/weather.jsx'
import Alerts from './pages/alerts.jsx'
import 'leaflet/dist/leaflet.css';
import Satelite from './pages/satelite.jsx'
import { Routes, Route } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './i18n';


export default function App() {
  const {t, i18n} = useTranslation()
  const isGeorgian = i18n.language === "ka"

  return (
    <div className={`${isGeorgian?"font-georgian":"sans-serif"}`}>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Weather />} />
          <Route path="/alerts" element={<Alerts />} />
          <Route path="/satellites" element={<Satelite />} />
        </Routes>
      </main>

    </div>
  )
}

