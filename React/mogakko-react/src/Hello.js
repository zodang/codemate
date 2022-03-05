import styles from './Hello.module.css';

function Hello() {
    return (
    <div>
        <div className={styles.title}>Hello, React!</div>
    </div>
    );
}

export default Hello;