import React, { useContext, useState, useRef, useEffect } from 'react'
import './Navbar.css'
import { assets } from '../../assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../context/StoreContext'

const Navbar = ({ setShowLogin }) => {

    const [menu, setMenu] = useState("menu")
    const [isSearchExpanded, setIsSearchExpanded] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const searchInputRef = useRef(null)

    const { getTotalCartAmount } = useContext(StoreContext)

    // Focus input when search expands
    useEffect(() => {
        if (isSearchExpanded && searchInputRef.current) {
            searchInputRef.current.focus()
        }
    }, [isSearchExpanded])

    const handleSearchIconClick = () => {
        setIsSearchExpanded(true)
    }

    const handleSearchBlur = () => {
        if (!searchValue) {
            setIsSearchExpanded(false)
        }
    }

    const handleSearch = () => {
        if (searchValue) {
            console.log('Searching for:', searchValue)
            // Add your search logic here
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch()
        }
    }

    return (
        <div className='navbar'>
            <Link to='/'> <img src={assets.logo} alt="" className="logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</a>
                <a href='#app-download' onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</a>
                <a href='#footer' onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</a>
            </ul>
            <div className='navbar-right'>
                {/* Expandable Search */}
                <div className={`navbar-search-container ${isSearchExpanded ? 'expanded' : ''}`}>
                    <img
                        src={assets.search_icon}
                        alt=""
                        onClick={handleSearchIconClick}
                        style={{ cursor: 'pointer' }}
                    />
                    <input
                        ref={searchInputRef}
                        type="text"
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onBlur={handleSearchBlur}
                        onKeyPress={handleKeyPress}
                        placeholder="Search..."
                        className="navbar-search-input"
                    />
                </div>

                <div className="navbar-search-icon">
                    <Link to='/cart'> <img src={assets.basket_icon} alt="" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>signIn</button>
            </div>
        </div>
    )
}

export default Navbar