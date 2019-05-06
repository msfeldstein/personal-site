import React from 'react'
import styles from './Header.module.css'
import { ReactComponent as Email } from '../assets/Email.svg'
import { ReactComponent as Twitter } from '../assets/Twitter.svg'
import { ReactComponent as Github } from '../assets/Github.svg'

export default function Header(props) {
    return <div className={styles.container}>
        <div className={styles.title}>Michael Feldstein</div>
        <div className={styles.links}>
            <a href="mailto:msfeldstein@gmail.com" target="_blank"><Email /></a>
            <a href="https://twitter.com/msfeldstein" target="_blank"><Twitter /></a>
            <a href="https://github.com/msfeldstein" target="_blank"><Github /></a>
        </div>
    </div>
}