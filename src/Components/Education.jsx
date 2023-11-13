import React from 'react';
import Tilt from 'react-parallax-tilt'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const Education = ({person2}) => {
    return (
        <div>
        <div className='flex justify-center mb-10'>
          <h1 className='text-4xl font-semibold  text-white border-b-2 inline-block p-2 rounded-xl '>About Me</h1>
        </div>

        <div className='grid lg:grid-cols-2 gap-4 items-center mx-3'>

          <div className='grid items-center mb-10 md:mb-0'>
            <div className='flex justify-center ' data-aos="fade-up">
             <Tilt> <img className=" mas mask-hexagon-2 " src={person2} width={'300px'} /></Tilt>
            </div>
            <div className=' text-lg  text-justify mx-3' data-aos="fade-up">
              I am Md. Tazwarul Islam Abir, Passionate and motivated junior MERN stack developer with a strong desire to learn and grow in a dynamic and collaborative environment. Committed to delivering high-quality code and exceptional user experiences, I aim to utilize my skills in React, Express, MongoDB, and Node.js to drive impactful results and contribute to the success of the team.
            </div>
          </div>

          <div className=' grid gap-4'>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium">
                Bachelor of Science (B.Sc):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-white'>College of Business Science & Technology (National University Affiliated),
                  Mymensingh.</span></p>
                <p>Subject: <span className='text-white'>Computer Science & Engineering (CSE)</span></p>
                <p> CGPA: <span className='text-white'>3.06</span></p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium">
                Higher Secondary School Certificate (HSC):
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-white'>Royal Media College,Mymensingh-RMC</span></p>
                <p>Subject:  <span className='text-white'>Science</span></p>
                <p> GPA: <span className='text-white'>4.42</span></p>
              </div>
            </div>

            <div tabIndex={0} className="collapse collapse-open border border-base-300 bg-base-200 hover:bg-base-300 transition-all hover:-translate-y-1 duration-500" data-aos="fade-up">
              <div className="collapse-title text-xl font-medium">
                Secondary School certificate (SSC)
              </div>
              <div className="collapse-content">
                <p>Institute: <span className='text-white'>Mymensingh Laboratory High School</span></p>
                <p>Subject: <span className='text-white'>Science</span></p>
                <p>GPA: <span className='text-white'>3.81</span></p>
              </div>
            </div>

          </div>

        </div>

      </div>
    );
};

export default Education;