import React, { useEffect, useState } from 'react'
import './Nav.css'
import NavItem from '../../NavArea/NavItem/NavItem'
import SearchBar from '../../NavArea/SearchBar/SearchBar'
import Filter from '../../NavArea/Filter/Filter'
import { Spinner } from 'react-bootstrap'
import { useAppSelector } from '../../../app/hooks'
import { selectStatus } from '../../../Redux/productsSlice'
import Loading from '../../SharedArea/Loading/Loading'


const Nav = () => {
  
  return (
    <div className='Nav  navbar-expand-lg'>
        
        <Loading/>
        <ul className='navbar-nav'>
          <SearchBar/>
          <NavItem title={'Bookmarks'} type={"bookmarks"}/>
          <NavItem title={'Featured'} type={"new_releases"}/>
          <Filter/>

        </ul>
        <span></span>
    </div>
  )
}

export default Nav





// <div className="container-fluid">
//           <span className="navbar-brand">Navbar</span>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon">dssds</span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav  me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="#">Home</a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="#">Link</a>
//               </li>
//               <li className="nav-item dropdown">
//                 <button className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                   Dropdown
//                 </button>
//                 <ul className="dropdown-menu " aria-labelledby="navbarDropdown">
//                   <li><a className="dropdown-item" href="#">Action</a></li>
//                   <li><a className="dropdown-item" href="#">Another action</a></li>
//                   <li><hr className="dropdown-divider"/></li>
//                   <li><a className="dropdown-item" href="#">Something else here</a></li>
//                 </ul>
//               </li>
//               <li className="nav-item ">
//                 <a className="nav-link disabled" href="#" tabIndex={-1} aria-disabled="true">Disabled</a>
//               </li>
//             </ul>
//             <form className="d-flex ">
//               <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
//               <button className="btn btn-outline-success" type="submit">Search</button>
//             </form>
//           </div>
//         </div>