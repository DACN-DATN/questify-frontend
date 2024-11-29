import React from 'react';
import './style.css';

import {
    sectionsIcon,
    lecturesIcon,
    timeIcon,
    backButtonIcon
} from '../icons/icons';

function HeaderCourseDetail() {
    return (
        <div className="course-detail bg-F5F7FA">
            <div className="course-detail__container">
                <div className="course-detail__part1">
                    <button className="course-detail__back-button">
                        <img src={backButtonIcon} alt="Back" />
                    </button>
                    <div className="course-detail__info">
                        <h1 className="course-detail__title">
                            Complete Website Responsive Design: from Figma to Webflow to Website Design
                        </h1>
                        <div className="course-detail__meta">
                            <div className="course-detail__meta-item">
                                <img src={sectionsIcon} alt="Sections" />
                                <span>6 Sections</span>
                            </div>
                            <div className="course-detail__meta-item">
                                <img src={lecturesIcon} alt="Lectures" />
                                <span>202 Lectures</span>
                            </div>
                            <div className="course-detail__meta-item">
                                <img src={timeIcon} alt="Time" />
                                <span>19h 37m</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="course-detail__part2">
                    <button className="course-detail__review-button">
                        Write a Review
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HeaderCourseDetail;