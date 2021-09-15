/* eslint-disable prettier/prettier */

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Footer, Navbar, Sidebar } from './components';
import {
    AboutPage,
    AuthWrapper,
    CartPage,
    CheckoutPage,
    ErrorPage,
    HomePage,
    PrivateRoute,
    ProductsPage,
    SingleProductPage
} from './pages';

function App() {
    return (
        <AuthWrapper>
            <Router>
                <Navbar />
                <Sidebar />
                <Switch>
                    <Route exact path="/">
                        <HomePage />
                    </Route>
                    <Route exact path="/about">
                        <AboutPage />
                    </Route>
                    <Route exact path="/cart">
                        <CartPage />
                    </Route>
                    <Route exact path="/products">
                        <ProductsPage />
                    </Route>
                    <Route exact path="/products/:id">
                        <SingleProductPage />
                    </Route>
                    <PrivateRoute exact path="/checkout">
                        <CheckoutPage />
                    </PrivateRoute>
                    <Route path="*">
                        <ErrorPage />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </AuthWrapper>
    );
}
export default App;
