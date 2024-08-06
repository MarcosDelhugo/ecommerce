import { Link } from 'react-router-dom';
import Logo from './../../assets/images/logo.png'
import CountryDropDown from '../CountryDropDown';
import { IoMdSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import { FiUser } from "react-icons/fi";

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
                            <div className="headerSearch ml-3 mr-3">
                                <input type='text' placeholder='Search for products...'></input>
                                <Button><IoMdSearch/></Button>
                            </div>
                            {/*header search end here */}
                            
                            <div className='part3 d-flex align-items-center'>
                                <Button className='circle'>
                                    <FiUser/>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    </>)
}
export default Header;