import { useContext } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
import { ThemeContext } from 'styled-components';
export default function Loader() {
  const themeContext = useContext(ThemeContext);
  //   console.log('themeContext : ', themeContext);

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: 70,
      }}
    >
      <InfinitySpin width="200" color={themeContext.colors.accentColor} />
    </div>
  );
}
