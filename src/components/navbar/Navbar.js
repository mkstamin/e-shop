import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';
import { links } from '../../utils/constants';
import CartButtons from '../cartButtons/CartButtons';
import NavContainer from './Navbar.style';

const Nav = () => {
    const { openSidebar } = useProductsContext();
    const { myUser } = useUserContext();

    return (
        <NavContainer>
            <div className="nav-center">
                <div className="nav-header">
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                    <button type="button" className="nav-toggle" onClick={openSidebar}>
                        <FaBars />
                    </button>
                </div>
                <ul className="nav-links">
                    {links.map((link) => {
                        const { id, text, url } = link;

                        return (
                            <li key={id}>
                                <Link to={url}>{text}</Link>
                            </li>
                        );
                    })}

                    {myUser && (
                        <li>
                            <Link to="/checkout">checkout</Link>
                        </li>
                    )}
                </ul>
                <CartButtons />
            </div>
        </NavContainer>
    );
};

export default Nav;
