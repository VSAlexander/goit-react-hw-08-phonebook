import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './Layout';
import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import * as operations from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

// import { HomePage } from 'pages/HomePage';
const HomePage = lazy(() => import('pages/HomePage'));

// import { ContactsPage } from 'pages/ContactsPage';
const ContactsPage = lazy(() => import('pages/ContactsPage'));

// import { LoginPage } from 'pages/LoginPage';
const LoginPage = lazy(() => import('pages/LoginPage'));

// import { RegisterPage } from 'pages/RegisterPage';
const RegisterPage = lazy(() => import('pages/RegisterPage'));

// import { ContactForm } from './ContactForm/ContactForm';
// import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';

export function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(operations.refresh());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <BrowserRouter basename="goit-react-hw-08-phonebook">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="/contacts"
              element={
                <PrivateRoute component={ContactsPage} redirectTo="/login" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRoute
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/login"
              element={
                <RestrictedRoute component={LoginPage} redirectTo="/contacts" />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    )
  );
}
