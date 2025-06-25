import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [color, setColor] = useState<string>('#08012D');

  const onClick = async () => {
    const [tab] = await chrome.tabs.query({
      active: true,
    });
    chrome.scripting.executeScript({
      target: {
        tabId: tab.id!,
      },
      args: [color],
      func: (color) => {
        document.body.style.backgroundColor = color;
      },
    });
  };

  return (
    <>
      <div>
        <a href='https://vite.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <input
            type={'color'}
            defaultValue={'#08012D'}
            value={color}
            onChange={(e) => setColor(e.currentTarget.value)}
          />
          <button onClick={onClick}>Set color</button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
