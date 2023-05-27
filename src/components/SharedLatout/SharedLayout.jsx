import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import { Link, List, Header, Main, Nav } from './SharedLayout.styled';
import Loader from '../Loader/Loader';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Nav>
          <List>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/movies">Movies</Link>
            </li>
          </List>
        </Nav>
      </Header>
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </>
  );
};
export default SharedLayout;
