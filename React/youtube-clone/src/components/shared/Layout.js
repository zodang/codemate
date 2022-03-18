import styles from './Layout.module.css';
import Header from './Header';
import Menu from './Menu';
import React, {useState} from 'react';

function Layout({children, activeMenu}) {

    //checkMenu 기능 추가
    const [menu, setMenu] = useState(true);   
    
    function checkMenu() {
        setMenu(!menu);
    }
    
    return (
        <div className={styles.container}>
             <Header checkMenu={checkMenu}/> {/*Header에 checkMenu 데이터 전달 */}
            <div className={styles.layout}>
                {/*menu가 true이면 원래 메뉴, false이면 빈 태그 */}
                {menu ? <Menu activeMenu={activeMenu}/> : <div></div>}  
                <div className={styles.contents}>{children}</div>
            </div>
        </div>
    );
}

export default Layout;