
import "./topbar.css"
import avatar from '../images/pic1.png';




export default function topbar() {
  return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topLeft'>
                <span className="logo"> Group-4 Admin </span>
            </div>
            <div className='topRight'>
                <div className="topbarIconContainer">
                    
                </div>
                <img src={avatar} alt="" className='topAvatar' />
            </div>
        </div>
    </div>
  )
}
