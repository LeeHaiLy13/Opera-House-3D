import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from "./index.module.css";
import { NavLink } from "react-router-dom";
import { aboutLabelText, appName, contactLabelText, homeLabelText, modelLabelText } from '../../../constants';

function NavBar() {
    return (
        <Navbar className={styles['nav-bg']} expand="lg">
            <Navbar.Brand className={styles["branch-color"]} href="/home">{appName}</Navbar.Brand>
            <div className={styles['nav-container']}>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className={styles['nav-box']} >
                        <NavLink to="/home" activeClassName={styles.active}>{homeLabelText}</NavLink>
                        <NavLink to="/model" activeClassName={styles.active}>{modelLabelText}</NavLink>
                        <NavLink to="/contact" activeClassName={styles.active}>{contactLabelText}</NavLink>
                        <NavLink to="/about" activeClassName={styles.active}>{aboutLabelText}</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavBar;