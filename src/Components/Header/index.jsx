import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo.png'
import CountryDropDown from '../CountryDropDown';
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
const Header = () => {
    return (<>
        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"><b>¡Welcome to our website, thank you for visiting us!</b></p>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="logoWrapper d-flex align-items-center col-sm-2">
                            <Link to={"/"}><img src={Logo} alt='Logo'/></Link>
                        </div>

                        <div className="col-sm-10 d-flex align-items-center part2">
                            <CountryDropDown></CountryDropDown>
                            {/*header search start here */}
                            <div className="headerSearch ml-1 mr-1">
                                <input type='text' placeholder='Search for products...'></input>
                                <Button><IoMdSearch/></Button>
                            </div>
                            {/*header search end here */}
                            
                            <div className='part3 d-flex align-items-center ml-auto'>
                                <Button className='circle mr-3'><FiUser/></Button>
                                <div className='ml-auto cartTab d-flex aling-items-center'>
                                    <span className='price'>$3.29</span>
                                    <div className='position-relative ml-2'>
                                        <Button className='circle'><IoBagHandleOutline/></Button>
                                        <span className='count d-flex aling-items-center justify-content-center'>
                                           1 
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>)
}
export default Header;