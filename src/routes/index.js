import React from 'react';
import{Cart, Home, PageNotFound} from '../Page';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
const Routers = () => {
    return (<>
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
        </BrowserRouter> </>
    );
};

export default Routers;