import React, { Component } from 'react';
import {NavLink, Link} from 'react-router-dom';

class Sidebar extends Component{
    render(){
        return(
            <div className="app-sidebar sidebar-shadow">
                <div className="app-header__logo">
                    <div className="logo-src"></div>
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
                <div className="scrollbar-sidebar">
                    <div className="app-sidebar__inner">
                        <ul className="vertical-nav-menu">
                            {/* <li className="app-sidebar__heading">Dashboards</li>
                            <li>
                                <a href="index.html">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Dashboard Example 1
                                </a>
                            </li> */}
                              {/* <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    Add Live Schedule
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-rocket"></i>
                                    List All Live Schedule
                                </a>
                            </li> */}
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    <li className= "app-sidebar__heading" >Dashboard </li>
                                    {/* <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i> */}
                                </a>
                                {/* <ul>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon"></i>
                                            Add Live Schedule 
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon"></i>
                                            List All Live Schedule 
                                        </a>
                                    </li>
                                </ul> */}
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    <li className= "app-sidebar__heading" >Live Schedule Management </li>
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <NavLink to="/add-live-schedule" activeClassName="selected">
                                            <i className="metismenu-icon"></i>
                                            Add Live Schedule 
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/list-live-schedule" activeClassName="selected">
                                            <i className="metismenu-icon"></i>
                                            List All Live Schedule 
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    <li className= "app-sidebar__heading" >Users Management </li>
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <NavLink to="/list-users" activeClassName="selected">
                                            <i className="metismenu-icon"></i>
                                            List All Users 
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    <li className= "app-sidebar__heading" >On-Demand Management </li>
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <NavLink to="/on-demand" activeClassName="selected">
                                            <i className="metismenu-icon"></i>
                                            List On-Demand
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    <li className= "app-sidebar__heading" >Club Ready Management </li>
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <NavLink to="/club-ready-users" activeClassName="selected">
                                            <i className="metismenu-icon"></i>
                                            List Users
                                        </NavLink>
                                    </li>
                                </ul>
                            </li>
                          
                            {/* <li className="app-sidebar__heading">UI Components</li>
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-diamond"></i>
                                    Elements
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="elements-buttons-standard.html">
                                            <i className="metismenu-icon"></i>
                                            Buttons
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-dropdowns.html">
                                            <i className="metismenu-icon">
                                            </i>Dropdowns
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-icons.html">
                                            <i className="metismenu-icon">
                                            </i>Icons
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-badges-labels.html">
                                            <i className="metismenu-icon">
                                            </i>Badges
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-cards.html">
                                            <i className="metismenu-icon">
                                            </i>Cards
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-list-group.html">
                                            <i className="metismenu-icon">
                                            </i>List Groups
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-navigation.html">
                                            <i className="metismenu-icon">
                                            </i>Navigation Menus
                                        </a>
                                    </li>
                                    <li>
                                        <a href="elements-utilities.html">
                                            <i className="metismenu-icon">
                                            </i>Utilities
                                        </a>
                                    </li>
                                </ul>
                            </li>  */}
                    

                            {/* 
                            <li>
                                <a href="#">
                                    <i className="metismenu-icon pe-7s-car"></i>
                                    Components
                                    <i className="metismenu-state-icon pe-7s-angle-down caret-left"></i>
                                </a>
                                <ul>
                                    <li>
                                        <a href="components-tabs.html">
                                            <i className="metismenu-icon">
                                            </i>Tabs
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-accordions.html">
                                            <i className="metismenu-icon">
                                            </i>Accordions
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-notifications.html">
                                            <i className="metismenu-icon">
                                            </i>Notifications
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-modals.html">
                                            <i className="metismenu-icon">
                                            </i>Modals
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-progress-bar.html">
                                            <i className="metismenu-icon">
                                            </i>Progress Bar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-tooltips-popovers.html">
                                            <i className="metismenu-icon">
                                            </i>Tooltips &amp; Popovers
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-carousel.html">
                                            <i className="metismenu-icon">
                                            </i>Carousel
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-calendar.html">
                                            <i className="metismenu-icon">
                                            </i>Calendar
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-pagination.html">
                                            <i className="metismenu-icon">
                                            </i>Pagination
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-scrollable-elements.html">
                                            <i className="metismenu-icon">
                                            </i>Scrollable
                                        </a>
                                    </li>
                                    <li>
                                        <a href="components-maps.html">
                                            <i className="metismenu-icon">
                                            </i>Maps
                                        </a>
                                    </li>
                                </ul>
                            </li> 
                            */}
                            {/* 
                            <li>
                                <a href="tables-regular.html">
                                    <i className="metismenu-icon pe-7s-display2"></i>
                                    Tables
                                </a>
                            </li>
                            <li className="app-sidebar__heading">Widgets</li>
                            <li>
                                <a href="dashboard-boxes.html">
                                    <i className="metismenu-icon pe-7s-display2"></i>
                                    Dashboard Boxes
                                </a>
                            </li>
                            <li className="app-sidebar__heading">Forms</li>
                            <li>
                                <a href="forms-controls.html">
                                    <i className="metismenu-icon pe-7s-mouse">
                                    </i>Forms Controls
                                </a>
                            </li>
                            <li>
                                <a href="forms-layouts.html" className="mm-active">
                                    <i className="metismenu-icon pe-7s-eyedropper">
                                    </i>Forms Layouts
                                </a>
                            </li>
                            <li>
                                <a href="forms-validation.html">
                                    <i className="metismenu-icon pe-7s-pendrive">
                                    </i>Forms Validation
                                </a>
                            </li>
                            <li className="app-sidebar__heading">Charts</li>
                            <li>
                                <a href="charts-chartjs.html">
                                    <i className="metismenu-icon pe-7s-graph2">
                                    </i>ChartJS
                                </a>
                            </li>
                            <li className="app-sidebar__heading">PRO Version</li>
                            <li>
                                <a href="https://dashboardpack.com/theme-details/architectui-dashboard-html-pro/" target="_blank">
                                    <i className="metismenu-icon pe-7s-graph2">
                                    </i>
                                    Upgrade to PRO
                                </a>
                            </li> 
                            */}
                        </ul>
                    </div>
                </div>
            </div> 
        )
    }
}

export default Sidebar;