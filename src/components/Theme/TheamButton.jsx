// import css from '../Theme/Theam.module.css';

import { SunSVG } from '../Theme/SVG/SunSVG';
import { MoonSVG } from '../Theme/SVG/MoonSVG';

import { useEffect, useState } from 'react';
import { light, dark } from '../Theme/Theme';
import { StyledThemeInput, StyledThemeLabel } from './StyledThemeButton';
// стаття про зміну теми в style-components
// https://blog.logrocket.com/build-react-theme-switcher-app-styled-components/
export function ChangeThemeButton({ handleThemeChange }) {
  const [themeValue, SetthemeValue] = useState(light);

  const [buttonStatus, SetButtonStatus] = useState(false);
  // console.log('buttonStatus: ', buttonStatus);
  // console.log('themeValue', themeValue);
  const handleInputchange = () => {
    // огорнули все в setTimeout томущо onChange функція синхронна а   SetButtonStatus
    // асинхронні тому щоб зробити все асинхронно обгорнул в setTimeout з мінімаьною затримкою
    setTimeout(() => {
      SetButtonStatus(!buttonStatus);
    }, 100);
  };
  useEffect(() => {
    SetthemeValue(() => {
      return buttonStatus ? SetthemeValue(dark) : SetthemeValue(light);
    });
    handleThemeChange(themeValue);
  }, [buttonStatus, handleThemeChange, themeValue]);
  return (
    <>
      <StyledThemeInput
        type="checkbox"
        id="darkmode-toggle"
        onChange={handleInputchange}
        checked={buttonStatus}
      />
      <StyledThemeLabel htmlFor="darkmode-toggle">
        <SunSVG />
        <MoonSVG />
      </StyledThemeLabel>
    </>
  );
}
