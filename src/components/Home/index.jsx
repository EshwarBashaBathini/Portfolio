import './home.css'
import {Link} from 'react-router-dom'
import Header from '../Header'
import Bottom from '../Bottom'
import { FaGithub,FaLinkedinIn,  FaTwitter } from "react-icons/fa6";
import { MdOutlineArrowOutward } from "react-icons/md";

const Home = () => {
    return(
        <div className='bg-container'>
            <Header />
            <div className='main-height'>
            <section className='section'>
                <img src='https://res.cloudinary.com/dtc3rf1du/image/upload/v1720086903/Profile_q2xpsl.jpg'
                alt='Profile' className='home-profile' />
                <h2 className='name'>Eshwar Basha Bathini</h2>
                <p className='para'>Frontend developer who loves to buid stunning<wbr/> websites with latest technologies</p>
                <ul className='ul-bio'>
                    <li className='list-item'>
                        <a href='https://github.com/EshwarBashaBathini' target='_blank'>
                        <FaGithub className='icons' color='black' size={20} />
                        </a>
                    </li>
                    <li className='list-item'>
                        <a href='https://www.linkedin.com/in/eshwarbashabathini/' target='_blank'>
                        <FaLinkedinIn className='icons' color='black' size={20} />
                        </a>
                    </li>
                   
                </ul>
            </section>
            <section className='section1'>
                <h3 className='projects'>
                    Projects
                </h3>
                <ul>
                <li className='project-item'>
                    <h2 className='project-name'>Nxt Trendz</h2>
                    <p className='project-p'>Created a modern e-commerce experience <wbr/>with a design inspired by Amazon and Flipkart.
                    Implemented pages for Login, Products, and Product details with React Router, React components, and form inputs.        
                    </p>
                    <ul className='skills-ul'>
                        <li className='skill-items'>
                            React Js
                        </li>
                        <li className='skill-items'>
                            CSS
                        </li>
                        <li className='skill-items'>
                            Jwt Token
                        </li>
                        <li className='skill-items'>
                            Routing
                        </li>
                        
                    </ul>
                    <div className='bottom-btn-container'>
                        <a href='https://nxttrendsbasha.ccbp.tech/' target='_blank'>
                        <button type='button' className='live-btn'>
                            Live <MdOutlineArrowOutward color='white' />
                        </button>
                        </a>
                        <a href='https://github.com/EshwarBashaBathini/NxtTrends-Payment' target='_blank'>
                        <button type='buttton' className='github-btn'>
                            Github<MdOutlineArrowOutward color='rgb(19, 19, 44)' />
                        </button>
                        </a>
                    </div>
                </li>
                <li className='project-item'>
                    <h2 className='project-name'>Nxt Watch</h2>
                    <p className='project-p'>Implemented Nxt Watch application which is a clone for YouTube where users can log in and can see a list of
videos like Trending, Gaming, Saved videos, and also can search videos and view specific video details,      
                    </p>
                    <ul className='skills-ul'>
                        <li className='skill-items'>
                            React Js
                        </li>
                        <li className='skill-items'>
                            CSS
                        </li>
                        <li className='skill-items'>
                        Authentication
                        </li><li className='skill-items'>
                            Routing
                        </li>
                        <li className='skill-items'>
                        REST API Calls
                        </li>
                    </ul>
                    <div className='bottom-btn-container'>
                        <a href='https://nxtwatchbasha.ccbp.tech/' target='_blank'>
                        <button type='button' className='live-btn'>
                            Live <MdOutlineArrowOutward color='white' />
                        </button>
                        </a>
                        <a href='https://github.com/EshwarBashaBathini/nxtWatch' target='_blank'>
                        <button type='buttton' className='github-btn'>
                            Github<MdOutlineArrowOutward color='rgb(19, 19, 44)' />
                        </button>
                        </a>
                    </div>
                </li>
                <Link to='projects' className='a'>
                <li className='more-projects'>More...</li>
                </Link>
                </ul>
                
            </section>
            <Bottom />
            </div>
            
        </div>
        
        
    )
}
export default Home