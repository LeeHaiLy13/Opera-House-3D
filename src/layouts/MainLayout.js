import React, { useEffect, useState } from 'react'
import NavBar from '../components/Header/Nav'
import Footer from "../components/Footer"
import styles from './MainLayout.module.css'


function MainLayout(props) {
    const [showBackToTop, setShowBackToTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowBackToTop(window.scrollY > 56);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <header className={styles.header}><NavBar /></header>
            {/* <div className={styles.block}></div> */}
            <main className={styles.content}>{props.children}</main>
            <footer className={styles.footer}><Footer /></footer>
            {showBackToTop && (
                <button className={`${styles.backtoTopBtn} ${showBackToTop ? styles.show : ''}`} id="backtoTopBtn" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="16"
                        viewBox="0 0 512 512">
                        <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z" />
                    </svg>
                </button>
            )}
            {/* <Button className={styles.backtoTopBtn} onClick={backtoTop}></Button> */}
        </>
    )
}

export default MainLayout