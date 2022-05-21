
import './sidebar.css';

import { Link } from "react-router-dom";
import { Home, AccountCircle, TrendingUp, PersonOutline, Inventory2 } from '@mui/icons-material';


export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <div className="sidebarMenu">
            <h3 className='sidebarTitle'> Dashboard</h3>
            <ul className='sidebarList'>
            <Link to="/" className='link'>
              <li className='sidebarListItem'>
              <Home className="sidebarIcon"/> Home
              </li>
              </Link>
              <Link to="/analytics" className='link'>
              <li className='sidebarListItem'>
              <TrendingUp className="sidebarIcon"/> Analytics
              </li>
              </Link>
            </ul>
            </div>

            <div className="sidebarMenu">
             <h3 className='sidebarTitle'> User Menu  </h3>
            <ul className='sidebarList'>
              <Link to="/users" className='link'>
              <li className='sidebarListItem'>
              <AccountCircle className="sidebarIcon"/> Users
              </li>
              </Link>
            </ul>
            </div>

            <div className="sidebarMenu">
             <h3 className='sidebarTitle'> Client Menu  </h3>
            <ul className='sidebarList'>
            <Link to="/customers" className='link'>
              <li className='sidebarListItem'>
              <PersonOutline className="sidebarIcon"/> Clients
              </li>
              </Link>
            </ul>
            </div>

            <div className="sidebarMenu">
            <h3 className='sidebarTitle'> Product Menu </h3>
            <ul className='sidebarList'>
              <Link to='/products' className='link'>
              <li className='sidebarListItem'>
              <Inventory2 className="sidebarIcon"/>
                Products
              </li>
              </Link>
            </ul>
            </div>

        
          </div>
        </div>
  )
}
