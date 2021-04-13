import React, { Component } from 'react';

class Footer extends Component{
    render(){
        return(
            <div className="app-footer">
                <div className="app-footer__inner">
                    {/* <div className="app-footer-left">
                        <ul className="nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Footer Link 1
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    Footer Link 2
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="app-footer-right">
                        <ul className="nav">
                            <li className="nav-item">
                                © 2020 Hardcore Fitness Franchise Group,LLC.
                            </li>
                            <li className="nav-item">
                                {/* <a href="#" className="nav-link">
                                    <div className="badge badge-success mr-1 ml-0">
                                        <small>NEW</small>
                                    </div>
                                </a> */}
                                All Right Reserved
                            </li>
                        </ul>
                    </div>
                </div>
            </div>  
        )
    }
}

export default Footer;