import youtube_logo from '../../data/youtube_logo.png'
import styles from './Header.module.css';
import { FiMenu } from 'react-icons/fi';
import { IoSearchOutline } from 'react-icons/io5';
import { BsGrid3X3Gap } from 'react-icons/bs';
import { HiOutlineDotsVertical } from 'react-icons/hi';

//checkMenu함수 받아옴
function Header({checkMenu}) {
    return (
    <div className={styles.header}>
        <div className={styles.tab}>
            {/* 클릭시 checkMenu 적용 */}
            <FiMenu className={styles.icon} onClick={checkMenu}/>
            <img src={youtube_logo} alt="로고" className={styles.logo}></img>
        </div>
        <div className={styles['center-tab']}>
            <input className={styles.input}/>
            <IoSearchOutline className={styles['search-icon']} />
        </div>
        <div className={styles.tab}>
            <BsGrid3X3Gap />
            <HiOutlineDotsVertical />
        </div>
    </div>
    );
}

export default Header;