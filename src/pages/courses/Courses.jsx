import React from 'react';
import OptionMenu from '../../components/UI/optionMenu/OptionMenu';
import useWindowSize from '../../hooks/useWindowSize';
import ChatSection from './content/ChatSection';
import DescriptionSection from './content/DescriptionSection';
import GradingSection from './content/GradingSection';
import TeachingSection from './content/TeachingSection';
import styles from './Courses.module.css';
import { useState } from 'react';
import { LinearAlgebraData } from '../../data/CoursesJSON';

const Courses = (props) => {
    const width = useWindowSize().width
    const [option, setOption] = useState(0)
    const options=["Linear Algebra", "Time Series", "Econometrics", "Differential Equations", "Databases", "Machine Learning 1"]

    return (
        <>
            <div className={styles.navbar}>
                <h1> Courses · {options[option]} </h1>
            </div>
            <div className={width > 1024 ? styles.scrollWide : styles.scrollNarrow}>
                <div className={styles.content}>
                    <ChatSection 
                        title='Chats'
                        chatList={LinearAlgebraData.chats}
                    />
                    <DescriptionSection 
                        title='Description'
                        description={LinearAlgebraData.description}
                    />
                    <GradingSection 
                        title='Grading Formula'
                        formula={LinearAlgebraData.formula}
                    />
                    <TeachingSection 
                        title='Teaching Staff'
                        teachers={LinearAlgebraData.teachingStaff}
                    />

                </div>
                <div className={width > 1024 ? styles.extraMenuWide : styles.extraMenuNarrow}>
                    <OptionMenu
                        options={options}
                        option={option}
                        setOption={setOption}
                    />
                </div>
            </div>
        </>
    );
};

export default Courses;