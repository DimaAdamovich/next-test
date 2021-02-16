import React from 'react';
import Link from "next/link";
import styles from '../styles/link.module.scss'

const A = ({href, title}) => {
    return (
        <Link href={href} >
            <a className={styles.link}>{title}</a>
        </Link>
    );
};

export default A;
