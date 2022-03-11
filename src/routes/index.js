import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '../components';
const Home = React.lazy(() => import("../Page/Home"));
const Cart = React.lazy(() => import("../Page/Cart"));
const PageNotFound = React.lazy(() => import("../Page/PageNotFound"));
const Routers = () => {
    return (<>
     <React.Suspense fallback={<Loading/>}>
        <BrowserRouter >
            <Routes >
                <Route path='/'
                    exact element={< Home />}
                />
                <Route path='/Booking'
                    exact element={< Home />}
                />
                <Route path='/Booking/Payment'
                    exact element={< Cart />}
                />
                <Route path='*'
                    element={< PageNotFound />}
                />
            </Routes >
        </BrowserRouter> </React.Suspense></>
    );
};

export default Routers;