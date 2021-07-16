import React from 'react';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Testimonials from '../Testimonials/Testimonials';

const Home = () => {
    return (
        <>
            <Header></Header>
            <Projects></Projects>
            <Service></Service>
            <Testimonials></Testimonials>
        </>
    );
};

export default Home;