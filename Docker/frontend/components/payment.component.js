import React from 'react'
import Image from 'next/image'
import Link from "next/link"
import styles from "../styles/main.module.css";
import {Edit2, Edit3, Delete, Trash, Trash2, Search} from "react-feather";
import HeaderComponent from './header.component';
import Layout from './layout/index';
import SidebarComponent from './layout/sidebar.component';
import TopbarComponent from './layout/topbar.component';

const paymentCmponent = () => {
  return (
    <>
      <Layout>
       
      <SidebarComponent />
      
    <div className="content-wrapper">
      <TopbarComponent/>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-6">
            <div className="page-header-title">Payment History</div>
          </div>
          <div className="col-md-8 col-lg-6 text-right header-btns">
            <Link href="#" className='btn'>Download <span className="icon-cloud-download"></span></Link>
          </div>
        </div>
      </div>
      <div className="card-box p-4 mh-62">
        <div className="table-responsive">
            <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    <th scope="col">Last</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td className='action-btns'>
                        <button className="btn btn-outline-primary btn-sm rounded-circle mr-1">
                            {/* <span className="icon-pencil"></span> */} 
                            <Edit2 color='blue' size={20}  />
                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle mr-1">
                            {/* <span className="icon-trash"></span> */}
                            <Trash2 color='red' size={20} />
                        </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td className='action-btns'>
                        <button className="btn btn-outline-primary btn-sm rounded-circle mr-1">
                            {/* <span className="icon-pencil"></span> */}
                            <Edit2 color='blue' size={20} />
                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle mr-1">
                            {/* <span className="icon-trash"></span> */}
                            <Trash2 color='red' size={20} />
                        </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>Otto</td>
                    <td className='action-btns'>
                        <button className="btn btn-outline-primary btn-sm rounded-circle mr-1">
                            {/* <span className="icon-pencil"></span>
                             */}
                            <Edit2 color='blue' size={20} />

                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle mr-1">
                            {/* <span className="icon-trash"></span> */}
                            <Trash2 color='red' size={20} />

                        </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">4</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>Otto</td>
                    <td className='action-btns'>
                        <button className="btn btn-outline-primary btn-sm rounded-circle mr-1">
                            {/* <span className="icon-pencil"></span> */}
                            <Edit2 color='blue' size={20} />

                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle mr-1">
                            {/* <span className="icon-trash"></span> */}
                            <Trash2 color='red' size={20} />

                        </button>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">5</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>Otto</td>
                    <td className='action-btns'>
                        <button className="btn btn-outline-primary btn-sm rounded-circle mr-1">
                            {/* <span className="icon-pencil"></span> */}
                            <Edit2 color='blue' size={20} />

                        </button>
                        <button className="btn btn-outline-danger btn-sm rounded-circle mr-1">
                            {/* <span className="icon-trash"></span> */}
                            <Trash2 color='red' size={20} />

                        </button>
                    </td>
                  </tr>
                </tbody>
              </table>
        </div>
          <nav>
            <ul className="pagination justify-content-end mb-0">
              <li className="page-item disabled">
                <Link className="page-link">Previous</Link>
              </li>
              <li className="page-item active"><Link className="page-link" href="#">1</Link></li>
              <li className="page-item"><Link className="page-link" href="#">2</Link></li>
              <li className="page-item"><Link className="page-link" href="#">3</Link></li>
              <li className="page-item">
                <Link className="page-link" href="#">Next</Link>
              </li>
            </ul>
          </nav>
      </div>

      <footer className="footer">
        Copyright &copy; 2010-2024 Aakasha Pvt Ltd. All rights reserved.
      </footer>
    </div>
    </Layout>
    </>
  )
}

export default paymentCmponent