import './header.css'
import { Link } from 'react-router-dom'
const Header = () => {

    return (

        <nav className="nav-container">
            <Link to='/' className='link-img-header' >
                <img src='https://res.cloudinary.com/dtc3rf1du/image/upload/v1720086903/Profile_q2xpsl.jpg' alt='profile' className="header-profile" />
            </Link>
            <ul className='ul'>
                <Link className='a' to='/projects'>
                    <li className='header-li'>
                        Projects
                    </li>
                </Link>
                <li className='header-li'>
                    <a href='https://drive.google.com/file/d/1onIlzm9GrMDMfYyfjtdpK9X1NDIeVWkh/view?usp=drive_link'
                        target='_blank' className='a'>
                        Resume
                    </a>
                </li>

            </ul>
        </nav>

    )
}

export default Header