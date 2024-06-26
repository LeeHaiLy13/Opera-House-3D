import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { aboutLabelText, appName, contactLabelText, homeLabelText, modelLabelText, bookLabelText } from '../../../constants';
function NavBar() {
    const logoImage = require('../../../assets/logo/municipal_theatre.png');
    return (
        <Navbar className={styles['navbarContainer']} expand="lg">
            <Navbar.Brand className={styles["nav-brand"]} href="/home">
                <img src={logoImage} alt="Saigon Opera House" className={styles['logo-image']} />
                <p>
                    {appName}
                </p>
            </Navbar.Brand>
            <div className={styles['nav-container']}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles['nav-box']} >
                        <NavLink to="/home" activeClassName={styles.active}>{homeLabelText}</NavLink>
                        <NavLink to="/model" activeClassName={styles.active}>{modelLabelText}</NavLink>
                        <NavLink to="/about" activeClassName={styles.active}>{aboutLabelText}</NavLink>
                        <NavLink to="/book-ticket" activeClassName={styles.active}>{bookLabelText}</NavLink>
                        <NavLink to="/contact" activeClassName={styles.active}>{contactLabelText}</NavLink>
                    </Nav>
                    <Nav className={styles['login-register']}>
                        <NavLink className={styles['col']} to="/login">
                            <Button className={styles['auth-button']}>Đăng nhập</Button>
                        </NavLink>
                        <NavLink to="/register">
                            <Button className={styles['auth-button']}>Đăng ký</Button>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavBar;