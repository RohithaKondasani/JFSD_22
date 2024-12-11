import React from 'react';
import './Team.css';

const Team = () => {
  const agents = [
    {
      name: 'Agent 1',
      imageUrl: 'x',
      email: 'agent1@example.com',
      phone: '123-456-7890'
    },
    {
      name: 'Divya Dhanisetty',
      imageUrl: '',
      email: 'divya@example.com',
      phone: '123-456-7890'
    },
    {
      name: 'Rohitha Kondasani',
      imageUrl: '/images/3.jpg',
      email: 'rohithakondasani@gmai.com',
      phone: '123-456-7890'
    },
  ];

  return (
    <div className="team-container">
      <div className="team-header">
        <h1>OUR TEAM AGENTS</h1>
      </div>
      <div className="agents">
        {agents.map((agent, index) => (
          <div key={index} className="agent-card">
            <img src={agent.imageUrl} alt={`${agent.name}`} />
            <h2>{agent.name}</h2>
            <div className="contact-info">
              <p><strong>Email:</strong> {agent.email}</p>
              <p><strong>Phone:</strong> {agent.phone}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
