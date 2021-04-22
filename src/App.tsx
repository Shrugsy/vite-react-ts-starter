import React, { useState } from 'react';
import { css } from '@emotion/react';
import './App.css';
import { Button } from '@material-ui/core';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p
          css={css`
            color: yellow;
          `}
        >
          Hello Vite + React!
        </p>
        <button>hello</button>
        <p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
