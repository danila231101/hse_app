import React from 'react';
import styles from './dragAndDrop.module.css';
import { useState } from 'react';

const DragAndDrop = () => {
    const [drag, setDrag] = useState(true)

    return (
        <div className={styles}>
            {drag
                ?   <div className={styles}>

                    </div>
                :   <div className={styles}>
                        onDragStart={}
                    
                    </div>}
        </div>
    );
};

export default DragAndDrop;