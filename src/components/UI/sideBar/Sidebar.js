import React from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../../../hooks/useWindowSize';
import { AccountInfo } from '../../../pages/account/AccountData';
import styles from './sidebar.module.css';
import { SidebarBottomData, SidebarMiddleData } from './SidebarData';

const Sidebar = () => {
    const width = useWindowSize().width

    return (
        <>
            <div className={width > 800 ? styles.sideBarWide : styles.sideBarNarrow}>
                {/* <ul className={styles.topSection}>
                    <div className={styles.account}>
                        <div className={styles.photo} />
                        { width > 800 ? <div className={styles.accountInfo}>
                            <h3> {AccountInfo.name} {AccountInfo.surname} </h3>
                            <h5> {AccountInfo.type} </h5>
                        </div> : null }
                    </div>
                </ul> */}

                <ul className={styles.middleSection}>
                    {SidebarMiddleData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? val.cNameActive : val.cName }
                                to={val.path}
                                >
                                    {val.icon}
                                    { width > 800 ? <div className={styles.title}>{val.title}</div> : null }
                            </NavLink>
                        )
                    })}
                </ul>
                <ul className={styles.bottomSection}>
                    {SidebarBottomData.map((val, key) => {
                        return (
                            <NavLink
                                key={key}
                                className={({ isActive }) => isActive ? val.cNameActive : val.cName }
                                to={val.path}
                                >
                                    {val.icon}
                                    { width > 800 ? <div className={styles.title}>{val.title}</div> : null }
                            </NavLink>
                        )
                    })}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;