import { AvatarLoader } from 'common-components/Loader';
import Image from 'common-components/Image';
import React from 'react';
import styles from './index.module.css';

const Header = () => {

    return (
        <header className={styles.header}>
            <h1>Recoil-todo</h1>
            <React.Suspense fallback={<AvatarLoader />}>
                <Image />
            </React.Suspense>
        </header>
    )
}

export default Header
