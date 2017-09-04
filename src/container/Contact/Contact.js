import React from 'react'
import NewContactForm from './NewContactForm'
import './Contact.scss'
const Contact = () => (
    <div className="contact-page">
        <h1>Contact Us</h1>
         <img className="contact-img" src={require("../../public/assets/homepage.png")} />
        <div className="new-team">
            Shopify Media is a team of expert engineers ready to work for you.
                         Are you tired of trying to figure out what exactly you are paying for?
                         Do you even know if the team you hired is staying current with the best
                         way to deliver your content?
                         <br />
        </div>
        <NewContactForm />
    </div>
)

export default Contact