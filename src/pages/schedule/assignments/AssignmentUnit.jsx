import React from 'react';
import { dateTimeHandler, dateDateHandler } from '../../../utils/dateHandler';
import styles from './assignmentUnit.module.css';
import { useState } from 'react';
import Modal from '../../../components/modal/Modal';
import TeacherUnit from '../../../components/UI/teacher/TeacherUnit';

const AssignmentUnit = ({subject, name, deadlineTime, submissionTime}) => {
    const [modal, setModal] = useState(false)

    const userReference = {
        'id':1,
        'role':'Seminarist',
        'name':'Nikita',
        'surname':'Medved',
        'picture':''
    }

    const detailedInfo = {
        'id':'1',
        'deadlineType':'hw',
        'assignmentName':'Homework #1',
        'courseName':'SAS technologies',
        'description':'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet, nunc, purus, gravida suspendisse a libero nisl. Ut faucibus elementum diam arcu vel amet, nulla et. Non eget ac a, at. Varius in sit congue dignissim sed arcu. Elementum amet, sagittis a urna. Lacus tempus eget est eu molestie amet. Risus, mi malesuada nunc diam convallis phasellus non. Bibendum sed rhoncus, urna volutpat urna, nunc ipsum. Volutpat arcu quis pulvinar amet ut. Duis semper at sit vel, quis praesent leo consectetur. Mattis eu, vitae sed pharetra, diam nec.',
        'deadlineTime':'2022-06-10T16:30:00.000Z',
        'submissionTime':'2022-06-10T16:30:00.000Z',
        'createdAt':'2022-06-10T16:30:00.000Z',
        'updatedAt':'2022-06-10T16:30:00.000Z',
        'postedBy': {
                        'id':1,
                        'role':'Seminarist',
                        'name':'Nikita',
                        'surname':'Medved',
                        'picture':''
                    },
        'taskFiles':[],
        'submissionFiles':[]
    }

    return (
        <div className={styles.assignment} onClick={() => setModal(true)}>
            <Modal visible={modal} setVisible={setModal}>
                <div className={styles.header}>
                    <h5>
                        {detailedInfo.courseName.toUpperCase()}
                    </h5>
                    <h1>
                        {detailedInfo.assignmentName}
                    </h1>
                    <h2 style={{color: 'var(--secondary)'}}>
                        {detailedInfo.deadlineType} {detailedInfo.id}
                    </h2>
                </div>

                <div className={styles.section}>
                    <h3>Description</h3>
                    <h4 className={styles.secondaryText}>
                        {detailedInfo.description}
                    </h4>
                </div>

                <div className={styles.section}>
                    <h3>Publication</h3>
                    <div className={styles.timeSection}>
                        <h3 className={styles.secondaryText}>{dateTimeHandler(detailedInfo.createdAt)}</h3>
                        <h3 className={styles.secondaryText}>{dateDateHandler(detailedInfo.createdAt)}</h3>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Deadline</h3>
                    <div className={styles.timeSection}>
                        <h3 className={styles.secondaryText}>{dateTimeHandler(detailedInfo.createdAt)}</h3>
                        <h3 className={styles.secondaryText}>{dateDateHandler(detailedInfo.createdAt)}</h3>
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Task File</h3>
                    {
                        detailedInfo.taskFiles.length === 0 
                        ?
                        <div className={styles.taskFile}>
                            <h3 className={styles.primaryText}>No task file</h3>
                        </div>
                        :
                        detailedInfo.taskFiles.map((task, index) => {
                            return(
                                <div className={styles.taskFile}>
                                    <h3 className={styles.primaryText}>Task file {index}</h3>
                                </div>
                            )
                        })
                    }
                </div>

                <div className={styles.section}>
                    <h3>Created by</h3>
                    <div>
                        <TeacherUnit 
                            teacherName={detailedInfo.postedBy.name}
                            teacherSurname={detailedInfo.postedBy.surname}
                            teacherPhoto={detailedInfo.postedBy.picture}
                            teacherRole={detailedInfo.postedBy.role}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <h3>Submission</h3>
                    {
                        detailedInfo.submissionFiles.length === 0 
                        ?
                        <div className={styles.taskArea}>
                            <h3 style={{color: 'var(--secondary)'}}>No task file</h3>
                        </div>
                        :
                        detailedInfo.taskFiles.map((submission, index) => {
                            return(
                                <div className={styles.taskArea}>
                                    <h3 style={{color: 'var(--secondary)'}}>Task file {index}</h3>
                                </div>
                            )
                        })
                    }

                </div>

                <div className={styles.section}>
                    <div className={styles.submitButton} onClick={() => setModal(false)}>
                    <h3 className={styles.onPrimaryText}>
                        Submit work
                    </h3>
                    </div>
                </div>
            </Modal>

            <div className={styles.separator}></div>
            <div className={styles.content}>
                <h5 className={styles.subjectName}>
                    {subject.toUpperCase()}
                </h5>
                <h3>
                    {name}
                </h3>
                <div className={styles.rows}>
                    <li className={styles.beige}>
                        <h4>
                            Till {dateTimeHandler(deadlineTime)}
                        </h4>
                    </li>
                    <li className={styles.beige}>
                        {submissionTime == null 
                        ? <h4>Not submitted</h4>
                        : <h4>Submitted at {dateTimeHandler(submissionTime)}</h4>}
                    </li>
                </div>
            </div>
        </div>
    );
};

export default AssignmentUnit;