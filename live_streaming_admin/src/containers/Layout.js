import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import Sidebar from './Sidebar';
import ROUTES, { RenderRoutes } from "../routes";

class Layout extends Component{
    render(){
        return(
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <Header/>
                <div className="app-main">
                    <Sidebar/>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <RenderRoutes routes={ROUTES} />
                        </div>
                        <div className="app-wrapper-footer">
                            <Footer/>
                        </div>
                    </div>   
                </div>
            </div>
        )
    }
}

export default Layout;