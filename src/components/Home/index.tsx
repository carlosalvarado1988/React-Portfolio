import React from 'react';

import { Header } from './Header';
import { About } from './About';
import { Testimonials } from './Testimonials';
import { Portfolio } from './Portfolio';
import { Footer } from './Footer';

import { resumeData } from './resumeData';

// import { Resume } from './Resume';
// import { ContactUs } from './ContactUs';

export const Home: React.FC = () => {
    return (
        <div className="App">
            <Header resumeData={resumeData} />
            <About resumeData={resumeData} />
            <Portfolio resumeData={resumeData} />
            <Testimonials resumeData={resumeData} />
            <Footer resumeData={resumeData} />
        </div>
    );
};
