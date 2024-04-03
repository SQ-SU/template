import React from 'react';
import styles from './AboutUsPage.module.css';

const AboutUsPage: React.FC = () => {
    return (
        <div className={`${styles.aboutUsPageContainer}  max-w-[800px] mx-auto mb-60 leading-loose`}>
            <h1 className='text-4xl font-bold mt-[12vh] mb-20'></h1>
        </div>
    );
};

export default AboutUsPage;
