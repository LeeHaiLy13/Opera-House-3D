import React, { useState } from 'react'
import InfoBlock from "./InfoBlock"
import styles from "./index.module.css"
import { info } from '../../../constants'

function InfoSection() {
    return (
        <section className={styles.container}>
            <h2>Một số điểm nổi bật</h2>
            <div className={styles.item_box}>
                {info.map(item => {
                    return (
                        <InfoBlock key={item.id} title={item.title} description={item.description} id={item.id} />
                    )
                })}
            </div>
        </section>
    )
}

export default InfoSection

