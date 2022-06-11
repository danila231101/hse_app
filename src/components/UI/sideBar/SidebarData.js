import React from 'react';
import { ReactComponent as IconArrow } from '../../../assets/icons/arrow-right.svg';
import { ReactComponent as IconAward } from '../../../assets/icons/award.svg';
import { ReactComponent as IconCalendar } from '../../../assets/icons/calendar.svg';
import { ReactComponent as IconServer } from '../../../assets/icons/server.svg';
import { ReactComponent as IconSettings } from '../../../assets/icons/settings.svg';
import styles from './sidebar.module.css';

export const SidebarUpperData = [
    {
        
    }
]

export const SidebarMiddleData = [
    {
        title: 'Schedule',
        path: '/schedule',
        icon: <IconCalendar/>,
        cName: styles.defaultButton,
        cNameActive: styles.defaultButtonActive,
        // cNameContainer: styles.blueContainer
    },
    {
        title: 'Courses',
        path: 'courses',
        icon: <IconServer/>,
        cName: styles.defaultButton,
        cNameActive: styles.defaultButtonActive,
        // cNameContainer: styles.blueContainer
    },
    {
        title: 'Grades',
        path: 'grades',
        icon: <IconAward/> ,
        cName: styles.defaultButton,
        cNameActive: styles.defaultButtonActive,
        // cNameContainer: styles.blueContainer
    }
]

export const SidebarBottomData = [
    {
        title: 'Log out',
        path: 'login',
        icon: <IconArrow />,
        cName: styles.redButton,
        cNameActive: styles.redButton,
        // cNameContainer: styles.redContainer
    },
    {
        title: 'Account',
        path: 'account',
        icon: <IconSettings />,
        cName: styles.defaultButton,
        cNameActive: styles.defaultButtonActive,
        // cNameContainer: styles.blueContainer
    }
]