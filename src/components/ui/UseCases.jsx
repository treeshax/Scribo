import React from 'react';
import BorderGlow from './BorderGlow';
import './css/UseCases.css';

const UseCases = () => {
  const cases = [
    {
      icon: '📚',
      title: 'Students',
      description: 'Notes, revision, study systems',
      color: '#38bdf8',
      glowColor: '200 80 80'
    },
    {
      icon: '💻',
      title: 'Developers',
      description: 'Docs, ideas, workflows',
      color: '#818cf8',
      glowColor: '230 80 80'
    },
    {
      icon: '✍️',
      title: 'Creators',
      description: 'Content planning, writing',
      color: '#c084fc',
      glowColor: '270 80 80'
    },
    {
      icon: '🧠',
      title: 'Thinkers',
      description: 'Personal knowledge base',
      color: '#e879f9',
      glowColor: '300 80 80'
    }
  ];

  return (
    <section className="usecases-section">
      <div className="usecases-container">
        <div className="usecases-header">
          <span className="usecases-eyebrow">Versatility</span>
          <h2 className="usecases-heading">Built for how you think</h2>
        </div>

        <div className="usecases-grid">
          {cases.map((item, index) => (
            <BorderGlow 
              key={index} 
              colors={[item.color, '#ffffff', item.color]} 
              glowColor={item.glowColor}
              animated
              borderRadius={24}
              fillOpacity={0} // Only border glow, no full card fill
              glowIntensity={0.5}
              edgeSensitivity={20}
              className="usecase-glow-wrapper"
              backgroundColor="transparent"
            >
              <div className="usecase-card" style={{ '--accent-color': item.color + '1a' }}>
                <div className="usecase-icon-wrapper">
                  <span className="usecase-icon">{item.icon}</span>
                </div>
                <div className="usecase-content">
                  <h3 className="usecase-title">{item.title}</h3>
                  <p className="usecase-desc">{item.description}</p>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
