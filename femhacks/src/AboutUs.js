import React from 'react';
import './styles/AboutUs.css';

// Import the images, assuming they are placed in the public/assets folder
// You can adjust the paths based on your project structure
const people = [
    {
        name: 'Angie Cao',
        imageSrc: '/assets/angie_cao.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/angie-cao/',
    },
    {
        name: 'Joyce Chen',
        imageSrc: '/assets/joyce_chen.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/joyce-chen/',
    },
    {
        name: 'Megan Yang',
        imageSrc: '/assets/megan_yang.jpg',
        linkedInUrl: 'https://www.linkedin.com/in/megan-yang/',
    },
];

const AboutUs = () => {
    return (
        <div>
            <h1>About Us</h1>
            <div style={{ display: 'flex', justifyContent: 'space-around', margin: '20px 0' }}>
                {people.map((person) => (
                    <div key={person.name} style={{ textAlign: 'center' }}>
                        <h3>{person.name}</h3>
                        <p>
                            <a href={person.linkedInUrl} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AboutUs;
