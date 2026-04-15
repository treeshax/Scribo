import React from 'react'
import LightRays from './components/Hero'
import Navbar from './components/ui/Navbar'
import SpotlightCard from './components/ui/CardProps'
import './index.css'

function App() {
  return (
    <>
      <Navbar />
      <div className="hero-section">
        <div style={{ position: 'absolute', inset: 0, zIndex: 1 }}>
          <LightRays
            raysOrigin="top-center"
            raysColor="#ffffff"
            raysSpeed={1}
            lightSpread={0.5}
            rayLength={3}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0}
            distortion={0}
            className="custom-rays"
            pulsating={false}
            fadeDistance={1}
            saturation={1}
          />
        </div>

        <div className="hero-content">
          <h1 className="hero-heading">Build your second brain.</h1>
          <p className="hero-subheading">
            Write, plan, and organize without distractions.
          </p>
          <div className="hero-cta">
            <a href="#get-started" className="btn-primary">Get started for free</a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="features-header">
        <span className="features-eyebrow">Why Scribo?</span>
        <h2 className="features-heading">Everything you need.<br />Nothing you don't.</h2>
        <p className="features-subtext">A workspace that adapts to how you think — not the other way around.</p>
      </div>
      <section className="features-section">
        <SpotlightCard spotlightColor="rgba(0, 229, 255, 0.2)" className="feature-card">
          <div className="feature-icon">✍️</div>
          <h3 className="feature-title">Write Anything</h3>
          <p className="feature-desc">From quick notes to full docs — a flexible editor that gets out of your way.</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(120, 80, 255, 0.25)" className="feature-card">
          <div className="feature-icon">🗂️</div>
          <h3 className="feature-title">Organize Effortlessly</h3>
          <p className="feature-desc">Nested pages, databases, and tags keep every idea exactly where you expect it.</p>
        </SpotlightCard>

        <SpotlightCard spotlightColor="rgba(255, 100, 150, 0.2)" className="feature-card">
          <div className="feature-icon">⚡</div>
          <h3 className="feature-title">Move at the Speed of Thought</h3>
          <p className="feature-desc">Slash commands, keyboard shortcuts, and instant search keep you in flow.</p>
        </SpotlightCard>
      </section>
    </>
  )
}

export default App