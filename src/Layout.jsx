import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux'
import Footer from './components/Footer/Footer'

const Layout = () => {
    const theme = useSelector((state) => state.theme.theme);
    return (
        <>
            <div className={`${theme} theme-container`} mode={theme}>
                <Header />
                    <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default Layout
