import { ReactComponent as IconArrow } from './icons/arrow-right.svg';
import { ReactComponent as IconAward } from './icons/award.svg';
import { ReactComponent as IconCalendar } from './icons/calendar.svg';
import { ReactComponent as IconServer } from './icons/server.svg';
import { ReactComponent as IconSettings } from './icons/settings.svg';


export const SidebarMiddleData = [
    {
        title: 'Schedule',
        path: 'schedule',
        icon: <IconCalendar/>,
        cName: 'nav-text'
    },
    {
        title: 'Courses',
        path: 'courses',
        icon: <IconServer/>,
        cName: 'nav-text'
    },
    {
        title: 'Grades',
        path: 'grades',
        icon: <IconAward/> ,
        cName: 'nav-text'
    }
]

export const SidebarBottomData = [
    {
        title: 'Log out',
        path: 'login',
        icon: <IconArrow />,
        cName: 'nav-text'
    },
    {
        title: 'Settings',
        path: 'settings',
        icon: <IconSettings />,
        cName: 'nav-text'
    }
]