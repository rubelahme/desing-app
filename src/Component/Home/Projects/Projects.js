import React from 'react';
import './Projects.scss'
import imgOne from '../../../img/MaskGroup-1.png'
import imgTwo from '../../../img/MaskGroup.png'
import imgFour from '../../../img/Group33011.png'
import ProjectOne from '../ProjectOne/ProjectOne';

const imgFive =[
{
    name:'Villa on Washington Avenue',
    img:imgOne,
    img1:imgFour
},
{
    name:'Luxury Villa in Rego Park',
    img:imgTwo,
    img1:imgFour
},{
    name:'Gorgeous House',
    img:imgOne,
    img1:imgFour
}
]

const Projects = () => {
    return (
        <div className='Projects'>
            <div className="container">
        <div className="row">
            <div className="col">
                <div className='project-one'>
                <p>Project</p>
                <h2>Discover The Latest Interior Desing</h2>
                <h2>Available Today</h2>
                </div>
            </div>
        </div>
        <div className="row">
            {
                imgFive.map(pd=> <ProjectOne key={pd.name} data={pd}></ProjectOne> )
            }
        </div>
        </div>
    </div>
    );
};

export default Projects;