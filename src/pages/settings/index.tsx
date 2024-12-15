//import { useState } from 'react'
import styles from './settingspage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setLanguage } from '../../slices/settingsSlice'
import type { RootState } from '../../store/store'
import SelectInput from '../../components/select'
import classNames from 'classnames'

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
    <div className={classNames(
      styles.settings_page,
      {
        [styles.settings_bg_default]: theme === 'default',
        [styles.settings_bg_earth]: theme === 'earth',
        [styles.settings_bg_vintage]: theme === 'vintage',
        [styles.settings_bg_cosmic]: theme === 'cosmic',
        [styles.settings_bg_warm]: theme === 'warm',
        [styles.settings_bg_modern]: theme === 'modern'
    }
      )}>
        <h3>Impostazioni</h3>
        <div className={styles.settings_container}>
          <div className={styles.settings_select}>
            <label htmlFor="theme">Tema</label>
            <SelectInput options={themeOptions} value={theme} onChange={handleThemeChange} />
          </div>
          <div className={styles.settings_select}>
            <label htmlFor="language">Lingua</label>
            <SelectInput options={languageOptions} value={theme} onChange={handleLanguageChange} />
          </div>
        </div>
    </div>
  )
}

export default Settingspage
