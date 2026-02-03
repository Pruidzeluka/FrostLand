import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoMdClose } from "react-icons/io";
import LanguageSwitcher from "../components/languageSwitcher.jsx"
import { useTranslation } from 'react-i18next';
import { Link,useLocation } from 'react-router-dom';
import { useState } from 'react';


function Header() {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isGeorgian = i18n.language === 'ka';
  const isHomePage = location.pathname === '/';
  const textColor = isHomePage ? 'text-white' : 'text-black';

  const open = () =>{
    setIsMobileMenuOpen(true)
  }
  const close = () =>{
    setIsMobileMenuOpen(false)
  }

  return (
    <header className="absolute top-0 left-0 w-full flex flex-col lg:flex-row justify-between items-start lg:items-center py-4 px-6 z-50 bg-transparent">
      
      <div className="flex items-center justify-between w-full ">
        <Link to="/">
          <h1 className={`text-xl Archivo lg:text-2xl ${textColor} transition-colors duration-300`}>
            FrostLand
          </h1>
        </Link>

        <div className="flex items-center gap-4 xl:hidden ">
          <LanguageSwitcher />
          {isMobileMenuOpen===false?<GiHamburgerMenu onClick={open} className={`text-3xl  cursor-pointer ${isHomePage ? 'text-white lg:text-black ' : 'text-black'}`}/> : <IoMdClose onClick={close} className={`text-3xl  cursor-pointer ${isHomePage ? 'text-white lg:text-black ' : 'text-black'}`} /> }
          {isMobileMenuOpen === true ? (
            <>

              <div 
                className="fixed inset-0 bg-black/60 z-40" 
                onClick={close}
              />
              <nav className="fixed top-0 left-0 right-0 h-1/3 bg-slate-700 z-50 text-white flex flex-col items-center justify-center gap-5 text-lg shadow-2xl opacity-90">
                <button 
                  onClick={close}
                  className="absolute top-6 right-6 text-4xl hover:text-gray-900 transition"
                >
                  <IoMdClose />
                </button>

                <Link to="/" onClick={close} className="font-medium">
                  {t('Weather')}
                </Link>
                <Link to="/alerts" onClick={close} className="font-medium">
                  {t('Alerts')}
                </Link>
                <Link to="/satellites" onClick={close} className="font-medium">
                  {t('Satellites')}
                </Link>
              </nav>
            </>
          ) : (
            <p className='hidden'></p>
          )}
        </div>
      </div>

      <div className="hidden xl:flex items-center gap-6">
        <nav className={`flex justify-center items-center gap-6 xl:gap-8 ${isGeorgian ? 'text-sm' : 'text-base'}`}>
          <Link to="/" className="text-black hover:text-gray-900 transition font-medium">{t('Weather')}</Link>
          <Link to="/alerts" className="text-black hover:text-gray-900 transition font-medium">{t('Alerts')}</Link>
          <Link to="/satellites" className="text-black hover:text-gray-900 transition font-medium">{t('Satellites')}</Link>
        </nav>

        <LanguageSwitcher />
      </div>

    </header>
  );
}

export default Header;