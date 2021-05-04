import { useState } from 'react';
import { css } from '@emotion/react';
import { Button } from '@material-ui/core';

import { useGetProjectsQuery } from '@/service/api';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const { data } = useGetProjectsQuery();

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
        <div>Projects: {JSON.stringify(data)}</div>
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
