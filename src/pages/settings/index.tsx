import { useState } from 'react'
import styles from './settingspage.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setTheme, setLanguage } from '../../slices/settingsSlice'
import SelectInput from '../../components/select'

function Settingspage() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.settings.theme);

  const handleThemeChange = (value: string | number) => {
    console.log("Selected theme:", value);
    dispatch(setTheme(value));
  };

  const themeOptions = [
    { value: "default", label: "Default" },
    { value: "earth", label: "Earth" },
    { value: "vintage", label: "Vintage" },
    { value: "cosmic", label: "Cosmic" },
    { value: "warm", label: "Warm" },
    { value: "modern", label: "Modern" },
  ];
  
  return (
    <div>
        <h3>Settings</h3>
      <div>
        <label htmlFor="theme">Tema</label>
        <SelectInput options={themeOptions} value={theme} onChange={handleThemeChange} />
      </div>
    </div>
  )
}

export default Settingspage
