import React from 'react';
import SubjectMenu from '../../components/UI/subjectMenu/SubjectMenu';
import ChatSection from './content/ChatSection';
import DescriptionSection from './content/DescriptionSection';
import GradingSection from './content/GradingSection';
import TeachingSection from './content/TeachingSection';
import styles from './Courses.module.css';
import useWindowSize from '../../hooks/useWindowSize';

const Courses = (props) => {
    const width = useWindowSize().width

    return (
        <>
            <div className={styles.navbar}>
                <h1> Courses · Linear Algebra </h1>
            </div>
            <div className={width > 1024 ? styles.scrollWide : styles.scrollNarrow}>
                <div className={styles.content}>
                    <ChatSection 
                        title='Chats'
                    />
                    <DescriptionSection 
                        title='Description'
                        description="The course introduces students to the elements of linear algebra and analytic geometry, provides the foundations for understanding some of the main concepts of modern mathematics. There is a strong emphasis in this course on complete proofs of almost all results.

                        We will approach the subject from both a practical point of view (learning methods and acquiring computational skills relevant for problem solving) and a theoretical point of view (learning a more abstract and theoretical approach that focuses on achieving a deep understanding of the different abstract concepts).

                        Topics covered include: matrix algebra, systems of linear equations, permutations, determinants, complex numbers, fields, abstract vector spaces, bilinear and quadratic forms, Euclidean spaces, some elements of analytic geometry, linear operators. It took mathematicians at least two hundred years to comprehend these objects. We plan to accomplish this in one year."
                    />
                    <GradingSection 
                        title='Grading Formula'
                        formula="0.25*(0.3*Exam1 + 0.7*(0.3125*Oral1 + 0.25*W1 + 0.25*Q1 + 0.1875*H1)) +  0.75*(0.3*Exam2 + 0.7*(0.3125*Oral2 + 0.25*W2 + 0.25*Q2 + 0.1875*H2)))"
                    />
                    <TeachingSection 
                        title='Teaching Staff'
                    />

                </div>
                <div className={width > 1024 ? styles.extraMenuWide : styles.extraMenuNarrow}>
                    <SubjectMenu />
                </div>
            </div>
        </>
    );
};

export default Courses;