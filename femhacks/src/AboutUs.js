import React from 'react';
import './styles/AboutUs.css';

const people = [
    {
        name: 'Angie Cao',
        linkedInUrl: 'https://www.linkedin.com/in/angie-cao/',
    },
    {
        name: 'Joyce Chen',
        linkedInUrl: 'https://www.linkedin.com/in/joyce-chen/',
    },
    {
        name: 'Megan Yang',
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