import React from 'react'
import LightRays from './components/Hero'
import CardSwap, { Card } from './components/ui/CardSwap'
import './index.css'


function App() {
  return (
    <>
      <div style={{ width: '100%', height: '100vh', position: 'relative' }}>
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

      {/* <div style={{ height: '600px', position: 'relative' }}>
        <CardSwap
          cardDistance={50}
          verticalDistance={70}
          delay={5000}
          pauseOnHover={false}
        >
          <Card>
            <h3>Card 1</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 2</h3>
            <p>Your content here</p>
          </Card>
          <Card>
            <h3>Card 3</h3>
            <p>Your content here</p>
          </Card>
        </CardSwap>
      </div> */}
    </>
  )
}

export default App