import React from 'react';
import styles from './optionMenu.module.css';
import useWindowSize from '../../../hooks/useWindowSize';

const OptionMenu = ({options, option, setOption}) => {
    const width = useWindowSize().width
    
    return (
        <div className={width > 1024 ? styles.menuWide : styles.menuNarrow}>
            {options.map((value, index) => {
                return (
                    <div 
                        key={index}
                        className={option === index ? styles.itemActive : styles.item}
                        onClick={() => setOption(index)}> 
                        {value}
                    </div>
                )
            })}
        </div>
    );
};

export default OptionMenu;