import React from 'react';
import './HeroSection.css';
import '../App.css'
import { Button } from './Button';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay muted loop />
      <h1>ADVENTURE AWAITS</h1>
      <p>Whate are you waiting for?</p>
      <div className='hero-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
        </Button>
      </div>
      <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            WATCH TRAILAER<i className='far fa-play-circle' />
        </Button>
    </div>
  )
}

export default HeroSection
