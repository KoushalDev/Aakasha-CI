import React from 'react'
import Link from "next/link"
import { Wallet, ChevronsRight, Airplay, Grid, Layout, UserPlus, Users, List, Home, Briefcase, Database, Hash, DollarSign, Share, Folder, Clock, Layers, Image, CreditCard } from "react-feather";

const TopbarComponent = () => {
    return (
        <div className="top-bar">
            <div id="sidebarToggleTop" className="hamburger d-sm-none" data-menu="15">
                <div className="icon"></div>
            </div>
            <div className='d-flex justify-content-between align-items-center w-100'>
                <div className="search-bar">
                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." />
                    <i className="icon-magnifier search-icon"></i>
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown no-arrow d-sm-none">
                        <Link className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="icon-search"></i>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                            aria-labelledby="searchDropdown">
                            <form className="form-inline mr-auto w-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>

                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle fs-18" href="#" id="alertsDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <i className="icon-question"></i>
                        </Link>

                    </li>

                    <li className="nav-item dropdown no-arrow">
                        <Link className="nav-link dropdown-toggle fs-18" href="#" id="messagesDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <i className="icon-bell"></i>
                        </Link>
                    </li>

                    <li className="nav-item dropdown no-arrow user-menu">
                        <Link className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown"
                            aria-haspopup="true" aria-expanded="false">
                            <span className="user-avatar-icon">VK</span>
                            <span className="d-none d-lg-inline text-gray-600 small">VIJAY KUMAR</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                            <Link className="dropdown-item" href="#">
                                <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                Profile
                            </Link>
                            <Link className="dropdown-item" href="#">
                                <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                Settings
                            </Link>
                            <Link className="dropdown-item" href="#">
                                <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                Activity Log
                            </Link>
                            <div className="dropdown-divider"></div>
                            <Link className="dropdown-item" href="login.html">
                                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                Logout
                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default TopbarComponent;