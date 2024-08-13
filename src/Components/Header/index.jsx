import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo.png'
import CountryDropDown from '../CountryDropDown';
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";
import { IoBagHandleOutline } from "react-icons/io5";
import "./index.css"

const Header = () => {
    return (<>
        <div className="headerWrapper">
            <div className="top-strip bg-purple">
                <div className="container">
                    <p className="mb-0 mt-0 text-center"><b>¡Welcome to our website, thank you for visiting us!</b></p>
                </div>
            </div>
            <header className="header">
                <div className="logoWrapper">
                    <Link to={"/"}><img src={Logo} alt='Logo'/></Link>
                </div>
                <CountryDropDown></CountryDropDown>
                <div className="col-sm-10  part2">
                    {/*header search start here */}
                    <div className="headerSearch ml-1 mr-1">
                        <input type='text' placeholder='Search for products...'></input>
                        <Button><IoMdSearch/></Button>
                    </div>
                    {/*header search end here */}
                </div>
                <Button className='userHeader mr-3'><FiUser/></Button>
                <span className='price'>$3.29</span>
                <div className='part3'>
                    <div className='ml-auto cartTab d-flex aling-items-center'>
                        <div className='position-relative ml-2'>
                            <Button className='bagHeader'><IoBagHandleOutline/></Button>
                            <span className='count d-flex aling-items-center justify-content-center'>2</span>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>)
}
export default Header;