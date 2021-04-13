import React, { Component } from 'react';
import {withRouter, Link} from 'react-router-dom';
import {toast} from "react-toastify";
toast.configure()
class Header extends Component{
    constructor(props){
        super(props);
        console.log(props)
        this.state ={
            first_name:'',
            last_name:'',
        }
    }
    
    componentDidMount(){
        if(localStorage.getItem('userData')){
            this.username = JSON.parse(localStorage.getItem('userData'))
            this.setState({
                first_name:this.username.first_name,
                last_name:this.username.last_name
            })
        }
    }

    handleLogout = (e)=>{
        e.preventDefault();
        localStorage.removeItem('userData');
        toast.success("Logged Out Successfully", { position: toast.POSITION.TOP_RIGHT, hideProgressBar: true });
        this.props.history.push('/login');
        console.log('jabksjdbk')
    }

    // .app-header__logo .logo-src{height:23px;width:97px;background:url(/assets/images/logo-inverse.png)}
    render(){
        return(
            <div className="app-header header-shadow">
                <div className="app-header__logo">
                    <div className="logo-src">
                        <img src="assets/images/Hardcore-LIVE_Logo.png"/>
                    </div>
                    <div className="header__pane ml-auto">
                        <div>
                            <button type="button" className="hamburger close-sidebar-btn hamburger--elastic" data-class="closed-sidebar">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner"></span>
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="app-header__mobile-menu">
                    <div>
                        <button type="button" className="hamburger hamburger--elastic mobile-toggle-nav">
                            <span className="hamburger-box">
                                <span className="hamburger-inner"></span>
                            </span>
                        </button>
                    </div>
                </div>
                <div className="app-header__menu">
                    <span>
                        <button type="button" className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav">
                            <span className="btn-icon-wrapper">
                                <i className="fa fa-ellipsis-v fa-w-6"></i>
                            </span>
                    </button>
                    </span>
                </div>
                <div className="app-header__content">
                    {/* <div className="app-header-left">
                        <div className="search-wrapper">
                            <div className="input-holder">
                                <input type="text" className="search-input" placeholder="Type to search"/>
                                <button className="search-icon"><span></span></button>
                            </div>
                            <button className="close"></button>
                        </div>
                        <ul className="header-menu nav">
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-link-icon fa fa-database"> </i> Statistics
                                </a>
                            </li>
                            <li className="btn-group nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-link-icon fa fa-edit"></i> Projects
                                </a>
                            </li>
                            <li className="dropdown nav-item">
                                <a href="#" className="nav-link">
                                    <i className="nav-link-icon fa fa-cog"></i> Settings
                                </a>
                            </li>
                        </ul>
                    </div> */}
                    <div className="app-header-right">
                        <div className="header-btn-lg pr-0">
                            <div className="widget-content p-0">
                                <div className="widget-content-wrapper">
                                    <div className="widget-content-left">
                                        <div className="btn-group">
                                            <a data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="p-0 btn">
                                                <img width="42" className="rounded-circle" src="assets/images/avatars/1.jpg" alt=""/>
                                                <i className="fa fa-angle-down ml-2 opacity-8"></i>
                                            </a>
    
                                            <div role="menu" aria-hidden="true" className="dropdown-menu dropdown-menu-right">
                                                <button tabIndex="-1" className="dropdown-item" onMouseDown={(e)=>{this.handleLogout(e)}}>Logout</button>
                                                {/* <button type="button" tabIndex="0" className="dropdown-item">Settings</button>
                                                <h6 tabIndex="-1" className="dropdown-header">Header</h6>
                                                <button type="button" tabIndex="0" className="dropdown-item">Actions</button>
                                                <div tabIndex="-1" className="dropdown-divider"></div>
                                                <button type="button" tabIndex="0" className="dropdown-item">Dividers</button> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="widget-content-left  ml-3 header-user-info">
                                        <div className="widget-heading">
                                            {this.state.first_name +" "+ this.state.last_name}
                                        </div>
                                        <div className="widget-subheading">
                                            Owner
                                        </div>
                                    </div>
                                    <div className="widget-content-right header-user-info ml-3">
                                        {/* <button type="button" className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example">
                                            <i className="fa text-white fa-calendar pr-1 pl-1"></i>
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Header);