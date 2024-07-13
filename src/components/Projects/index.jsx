
import Header from '../Header'
import Bottom from '../Bottom'
import {MdOutlineArrowOutward} from "react-icons/md"
const Projects = () => (

    <div className='bg-container'>
          <Header />
        <div className='main-height'>

            <section className='section1'>
                <h3 className='projects'>
                    Projects
                </h3>
                <ul className='ul-projects'>
                    <li className='project-item'>
                        <h2 className='project-name'>Nxt Trendz</h2>
                        <p className='project-p'>Created a modern e-commerce experience <wbr />with a design inspired by Amazon and Flipkart.
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
                                    Github <MdOutlineArrowOutward color='rgb(19, 19, 44)' />
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
                    <li className='project-item'>
                        <h2 className='project-name'>Jobby App</h2>
                        <p className='project-p'>Constructed an all-in-one job searching platform, Jobby App.
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
                            <a href='https://jobbyappbasha.netlify.app/' target='_blank'>
                                <button type='button' className='live-btn'>
                                    Live <MdOutlineArrowOutward color='white' />
                                </button>
                            </a>
                            <a href='https://github.com/EshwarBashaBathini/Jobby-App' target='_blank'>
                                <button type='buttton' className='github-btn'>
                                    Github<MdOutlineArrowOutward color='rgb(19, 19, 44)' />
                                </button>
                            </a>
                        </div>
                    </li>
                    <li className='project-item'>
                        <h2 className='project-name'>Nxt Mart</h2>
                        <p className='project-p'>Nxt Mart Application is used for Ordering Glorious Itemsand   Implemented pages for Login, Home, and Cart details with React Router, React components, and form inputs.
                        </p>
                        <ul className='skills-ul'>
                            <li className='skill-items'>
                                React Js
                            </li>
                            <li className='skill-items'>
                                Local Storage
                            </li>
                            <li className='skill-items'>
                                Jwt Token
                            </li>
                            <li className='skill-items'>
                                Routing
                            </li>

                        </ul>
                        <div className='bottom-btn-container'>
                            <a href='https://fakeapp.ccbp.tech/' target='_blank'>
                                <button type='button' className='live-btn'>
                                    Live <MdOutlineArrowOutward color='white' />
                                </button>
                            </a>
                            <a href='https://github.com/EshwarBashaBathini/NxtMart-Application' target='_blank'>
                                <button type='buttton' className='github-btn'>
                                    Github<MdOutlineArrowOutward color='rgb(19, 19, 44)' />
                                </button>
                            </a>
                        </div>
                    </li>

                </ul>

            </section>
            <Bottom />
        </div>

    </div>
)

export default Projects