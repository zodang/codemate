import styles from './Layout.module.css';

function Layout({children}) {
    return <div className={styles.container}>{children}</div>
}

function btnLayout({children}) {
    return <div className={styles.btnContainer}>{children}</div>
}

export {Layout, btnLayout};