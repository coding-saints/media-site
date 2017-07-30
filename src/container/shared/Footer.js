import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.scss'
const Footer = () => (
    <footer>
  
        <div className="social-btns">
            <a className ="btn facebook" href = "https://www.facebook.com/ShopifyMedia/" > < i className = "fa fa-facebook"> </i></a>
            <a className="btn twitter" href="https://www.twitter.com/ShopifyMedia"><i className="fa fa-twitter"></i></a>
            <a className="btn google" href="mailto:success@shopify.media" rel="nofollow"><i className="fa fa-envelope"></i></a>
            <a className="btn dribbble" href="https://www.instagram.com/shopifymedia/"><i className="fa fa-instagram"></i></a>
            <a className="btn phoneicon" href="tel:1-717-439-2279"><i className="fa fa-phone"></i></a>
           
            {/*<a className="btn skype" href="#"><i className="fa fa-skype"></i></a>*/}
        </div>
        <div id="social-mobile">
            <a className="face" href="#"><i className="fa fa-facebook"></i></a>
            <a className="twit" href="#"><i className="fa fa-twitter"></i></a>
            <a className="goog" href="#"><i className="fa fa-envelope"></i></a>
            <a className="insta" href="#"><i className="fa fa-instagram"></i></a>
            <a className="phone" href="#"><i className="fa fa-phone"></i></a>
            {/*<a className="skype" href="#"><i className="fa fa-skype"></i></a>*/}
        </div>
      
    </footer>
)
export default Footer;