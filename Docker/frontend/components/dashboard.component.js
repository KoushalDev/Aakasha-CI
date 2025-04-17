import React, { useState } from 'react'
import Image from 'next/image'
import HeaderComponent from './header.component'
import Layout from "./layout/index"
import SidebarComponent from './layout/sidebar.component'
// import TobarComponent from './layout/topbar.component'
import TopbarComponent from './layout/topbar.component'

const DashboardComponent = () => {
  const [showCreateFolderModal, setShowCreateFolderModal] = useState(false);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const toggleCreateFolderModal = () => {
    setShowCreateFolderModal(true);
  };

  const toggleUploadModal = () => {
    setShowUploadModal(true);
  };


  console.log("folder-model", showCreateFolderModal)
  return (
    <>
    <Layout>
      {/* <HeaderComponent /> */}

      <SidebarComponent />
     

    {/* <h2 className='text-center d-flex flex-direction-column justify-content-center'>Dashboard Page</h2> */}
    <div className="content-wrapper">
      <TopbarComponent/>
      <div className="page-header">
        <div className="row align-items-center">
          <div className="col-md-4 col-lg-6">
            <div className="page-header-title">Dashboard</div>
          </div>
          <div className="col-md-8 col-lg-6 text-right header-btns">
            <button  data-toggle="modal" data-target="#createFolderModal"  onClick={toggleCreateFolderModal}>Create Floder <span className="icon-plus"></span></button>
            <button data-toggle="modal" data-target="#uploadModal" onClick={toggleUploadModal}>Upload <span className="icon-cloud-upload"></span></button>
          </div>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-md-12 col-lg-6">
          <div className="card-box">
            <div className="card-title">My Space</div>
            <div className="row align-items-center">
              <div className="col-6 col-md-6 text-center">
                <Image src="/images/pie-chart.PNG" alt="piechart" width={150} height={150} />
              </div>
              <div className="col-6 col-md-6 text-center">
                <div className="space-text">
                  <p>Total Space = <strong>5 TB</strong></p>
                  <p>Used Space = <strong>3 TB</strong></p>
                  <p>Free Space = <strong>2 TB</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-lg-6">
          <div className="card-box">
            <div className="card-title">My Customers</div>
            <div className="customer-item">
              <div className="customer-name">
                <Image src="/images/user2.png" alt="user2" width={30}   height={30}/> Venkatesh Prasad
              </div>
              <div className="badge badge-primary">500 MB</div>
            </div>
            <div className="customer-item">
              <div className="customer-name">
                <Image src="/images/user1.png" alt="user1" width={30}  height={30} /> Srinath Kumar
              </div>
              <div className="badge badge-primary">300 MB</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-heading mt-4 mb-3">My Folders</div>

      <div className="row">
        <div className="col-6 col-md-6 col-lg-3">
          <div className="folder-item">
            <span className="icon-folder-alt"></span>
            <div className="folder-name">
              Marriage Event
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <div className="folder-item">
            <span className="icon-folder-alt"></span>
            <div className="folder-name">
              RRR Audio Release
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <div className="folder-item">
            <span className="icon-folder-alt"></span>
            <div className="folder-name">
              Birthday Function
            </div>
          </div>
        </div>
        <div className="col-6 col-md-6 col-lg-3">
          <div className="folder-item">
            <span className="icon-folder-alt"></span>
            <div className="folder-name">
              Paris Tour
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
        Copyright &copy; 2010-2024 Aakasha Pvt Ltd. All rights reserved.
      </footer>
    </div>
    {showCreateFolderModal && (
         <div className="modal" id="createFolderModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
         <div className="modal-dialog modal-dialog-centered">
           <div className="modal-content">
             <div className="modal-header">
               <h5 className="modal-title" id="exampleModalLabel">Create Folder</h5>
               <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                 <span aria-hidden="true">&times;</span>
               </button>
             </div>
             <div className="modal-body">
               <form>
                 <div className="form-group">
                   <label htmlFor="folderName">Folder Name</label>
                   <input type="text" className="form-control" id="folderName" placeholder="Enter Folder Name" />
                 </div>
                 <div className="form-group">
                   <label htmlFor="folderName">Description</label>
                   <textarea name="description" className="form-control" id="folderDes" placeholder="Enter Description" rows="3"></textarea>
                 </div>
               </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
               <button type="button" className="btn btn-primary">Create</button>
             </div>
           </div>
         </div>
       </div>
       

    )}
    { showUploadModal && (
      <div className="modal fade" id="uploadModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Upload</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label for="folder">Select Folder</label>
                <select className="form-control" id="folder">
                  <option>Select Folder</option>
                  <option>1</option>
                </select>
              </div>
              <div className="form-group">
                <label for="files">Select Files</label>
                <input type="file" multiple className="form-control-file" id="files" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
            <button type="button" className="btn btn-primary">Upload</button>
          </div>
        </div>
      </div>
    </div>

    )}
   
 
</Layout>
</>
  )
}

export default DashboardComponent