/** @jsxRuntime classic */
/** @jsx jsx */
import { useState } from 'react';
import { css, jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

import { useGetProjectsQuery } from '@/service/api';

const AppContainer = styled('div')`
  text-align: center;
`;

const AppHeader = styled('header')`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

function App() {
  const [count, setCount] = useState(0);
  const { data, isFetching, isError, isSuccess, refetch } = useGetProjectsQuery();

  return (
    <AppContainer>
      <AppHeader>
        <p
          css={css`
            color: yellow;
          `}
        >
          Hello Vite + React!
        </p>
        <div>
          <p>
            {isFetching
              ? 'Fetching projects...'
              : isError
              ? 'Error fetching projects!'
              : isSuccess
              ? 'Successfully fetched projects!'
              : ''}
          </p>
        </div>
        <div
          css={css`
            opacity: ${isFetching ? 0.5 : 1};
          `}
        >
          Projects: {JSON.stringify(data)}
        </div>
        <Button variant="contained" color="primary" onClick={refetch}>
          Re-fetch projects
        </Button>
        <p>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setCount((count) => count + 1)}
          >
            count is: {count}
          </Button>
        </p>
      </AppHeader>
    </AppContainer>
  );
}

export default App;
