import React from 'react'
import './Footer.css'
import { Button } from './Button'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
            Join the Adventure newsletter to receive or best vacation deals
        </p>
        <p className='footer-subscription-text'>
            You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
            <form>
                <input type='email' name='email' placeholder='Your Email' className='footer-input' />
                <Button buttonStyle='btn-outline'>Subscribe</Button>
            </form>
        </div>
      </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='sign-up'>How to works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Term of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='sign-up'>How to works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Term of Service</Link>
            </div>
        </div>
        <div className='footer-link-wrapper'>
            <div className='footer-link-items'>
                <h2>About Us</h2>
                <Link to='sign-up'>How to works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Term of Service</Link>
            </div>
            <div className='footer-link-items'>
                <h2>Contact Us</h2>
                <Link to='sign-up'>How to works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Term of Service</Link>
            </div>
        </div>
      </div>
      <section className='social-media'>
        <div className='social-media-wrap'>
            <div className='footr-logo'>
                <Link to='/' className='sociaal-logo'>
                    TRVL <i className='fab fa-typo3' />
                </Link>
            </div>
            <small className='website-rights'>TRVL 2023</small>
            <div className='social-icons'>
                <Link to='/' className='social-icon-link facebook' target='blank' aria-label='Facebook'>
                    <i className='fab fa-facebook-f' />
                </Link>
                <Link to='/' className='social-icon-link instagram' target='blank' aria-label='Instagram'>
                    <i className='fab fa-instagram' />
                </Link>
                <Link to='/' className='social-icon-link youtube' target='blank' aria-label='Youtube'>
                    <i className='fab fa-youtube' />
                </Link>
                <Link to='/' className='social-icon-link twitter' target='blank' aria-label='Twitter'>
                    <i className='fab fa-twitter' />
                </Link>
                <Link to='/' className='social-icon-link linkedin' target='blank' aria-label='LinkedIn'>
                    <i className='fab fa-linkedin' />
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;
