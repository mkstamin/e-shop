import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { useProductsContext } from '../../context/products_context';
import { useUserContext } from '../../context/user_context';
import { links } from '../../utils/constants';
import CartButtons from '../cartButtons/CartButtons';
import SidebarContainer from './Sidebar.style';

const Sidebar = () => {
    const { isSidebarOpen, closeSidebar } = useProductsContext();
    const { myUser } = useUserContext;

    return (
        <SidebarContainer>
            <aside className={`${isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}`}>
                <div className="sidebar-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button className="close-btn" type="button" onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        const { id, text, url } = link;
                        return (
                            <li key={id}>
                                <Link to={url} onClick={closeSidebar}>
                                    {text}
                                </Link>
                            </li>
                        );
                    })}
                    {myUser && (
                        <li>
                            <Link to="/checkout" onClick={closeSidebar}>
                                checkout
                            </Link>
                        </li>
                    )}
                </ul>
                <CartButtons />
            </aside>
        </SidebarContainer>
    );
};

export default Sidebar;
