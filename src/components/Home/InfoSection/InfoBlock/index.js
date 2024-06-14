import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from "./index.module.css"

function InfoBlock(props) {

    function titleMarkup() {
        return { __html: props.title }
    }
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>
                <span className={styles.icons}><FontAwesomeIcon icon={faStar} size="2x" /></span>
                <div dangerouslySetInnerHTML={titleMarkup()}></div>
            </div>
            <div className={styles.description}>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default InfoBlock