"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  { name: 'QUALCON HERITAGE', location: 'Panvel', image: '/path-to-qualcon-heritage.jpg' },
  { name: 'BUSINESS ICON', location: 'Khanda Colony', image: '/path-to-business-icon.jpg' },
  { name: 'CRYSTAL CORNER', location: 'Kharghar', image: '/path-to-crystal-corner.jpg' },
  { name: 'MANTRAM SOLACIA', location: 'Panvel', image: '/path-to-mantram-solacia.jpg' },
  { name: 'Project 5', location: 'Location 5', image: '/path-to-project5.jpg' },
  { name: 'Project 6', location: 'Location 6', image: '/path-to-project6.jpg' },
  { name: 'Project 7', location: 'Location 7', image: '/path-to-project7.jpg' },
  { name: 'Project 8', location: 'Location 8', image: '/path-to-project8.jpg' },
  { name: 'Project 9', location: 'Location 9', image: '/path-to-project9.jpg' },
  { name: 'Project 10', location: 'Location 10', image: '/path-to-project10.jpg' },
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-slate-300 text-white min-h-screen">
      <div className="max-w-6xl mx-auto p-4 md:p-8">
        <div className="mb-8 text-center">
          <h2 className="text-amber-500 text-xl">Future Living, Today</h2>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-slate-700">Current Projects</h1>
          <p className="text-sm md:text-base text-slate-700">
            To us, home is not just a place but also a feeling. We believe in building homes that
            enhance your living space as well as your lifestyle. Nestled amongst greenery, we
            feel that healthy homes are happy homes.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100 / 4}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/4 flex-shrink-0 p-2">
                <div className="relative h-64 md:h-80">
                  <Image
                    src={project.image}
                    alt={project.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-bold mt-2">{project.name}</h3>
                <p className="text-amber-500">{project.location}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          <button 
            className="bg-white text-black px-2 py-1 rounded"
            onClick={prevProject}
          >
            &lt; Prev
          </button>
          <button 
            className="bg-white text-black px-2 py-1 rounded"
            onClick={nextProject}
          >
            Next &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Projects;