//import { useState } from 'react'
import styles from './settingspage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setLanguage } from '../../slices/settingsSlice'
import type { RootState } from '../../store/store'
import SelectInput from '../../components/select'

function Settingspage() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.settings.theme);

  const handleThemeChange = (value: string | number) => {
    console.log("Selected theme:", value);
    dispatch(setTheme(value));
  };

  const handleLanguageChange = (value: string | number) => {
    console.log("Selected language:", value);
    dispatch(setLanguage(value));
  };

  const themeOptions = [
    { value: "default", label: "Default" },
    { value: "earth", label: "Earth" },
    { value: "vintage", label: "Vintage" },
    { value: "cosmic", label: "Cosmic" },
    { value: "warm", label: "Warm" },
    { value: "modern", label: "Modern" },
  ];

  const languageOptions = [
    { value: "en", label: "English" },
    { value: "it", label: "Italiano" },
    { value: "sp", label: "Spagnolo" },
  ];
  
  return (
    <div className={styles.settings_page}>
        <h3>Settings</h3>
      <div>
        <label htmlFor="theme">Tema</label>
        <SelectInput options={themeOptions} value={theme} onChange={handleThemeChange} />
      </div>
      <div>
        <label htmlFor="language">Lingua</label>
        <SelectInput options={languageOptions} value={theme} onChange={handleLanguageChange} />
      </div>
    </div>
  )
}

export default Settingspage
