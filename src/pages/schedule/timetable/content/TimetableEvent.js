import React from 'react';
// import {ReactComponent as IconRecording} from './recording.svg';
import './timetableEvent.css'

const TimetableEvent = () => {
    return (
        <div className='event__content'>
            <div className='content__left'>
                <h3 id='start'>11:10</h3>
                <h5 id='end'>12:30</h5>
            </div>
            <div className='content__indicator'>
            </div>
            <div className='content__right'>
                <h5 className='event__type'>LECTURE</h5>
                <h3 className='event__title'>Бизнес аналитика и финансовый инжиниринг (анг)</h3>
                <div className='event__presenter'>
                    <div className='presenter__photo'/>
                    <h4 className='presenter__name'>Асриев Артем Владимирович</h4>
                </div>
                <h4 className='event__meeting'>Online</h4>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1210_770)">
                        <path d="M15.3333 4.66683L10.6667 8.00016L15.3333 11.3335V4.66683Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M9.33332 3.3335H1.99999C1.26361 3.3335 0.666656 3.93045 0.666656 4.66683V11.3335C0.666656 12.0699 1.26361 12.6668 1.99999 12.6668H9.33332C10.0697 12.6668 10.6667 12.0699 10.6667 11.3335V4.66683C10.6667 3.93045 10.0697 3.3335 9.33332 3.3335Z" stroke="currentColor"  stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_1210_770">
                    <rect width="16" height="16" fill="white"/>
                        </clipPath>
                    </defs>
                </svg>
            </div>
        </div>
    );
};

export default TimetableEvent;