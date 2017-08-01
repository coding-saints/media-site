import React from 'react'
import {Link} from 'react-router-dom'
import PricePanel from './PricePanel'
import './Price.scss'
const Price = () => (
    <div className="price">
        <h1 className="pricing">Pricing</h1>
        <img className="price-img" src={require("../../public/assets/credit.jpg")} />
        <h2>Thinking about just trying out Shopify? That's why we're here!</h2>
        <p>Try out any solution to get started right away!</p>
        
            <div className="panel-wrapper">
                    
                        <PricePanel 
                        src={require("../../public/assets/start.jpg")}
                        price="$"
                        plan="Limited"
                        list={["Store Set-Up", "Import of (up to) 24 Products", "NO SUPPORT"]}
                        />
                        <PricePanel
                            src={require("../../public/assets/money.jpg")}
                            price="$$"
                            plan="Let's get serious"
                            list={["Customized Theme", "Basic Social-Media Set-Up", "3 Month support", "SEO"]}
                        />
                        <PricePanel
                            src={require("../../public/assets/bigbuild.jpg")}
                            price="$$$"
                            plan="Ballin!"
                            list={["Sitemap", "Social-Media Maintenance", "6 Month Suppport"]}
                        />
                        <PricePanel
                            src={require("../../public/assets/splash.jpg")}
                            price="$$$$"
                            plan="Leave Number"
                            list={["You're here because you're sick of looking at the same shit. As soon as you send your message I'll get back to you personally"]}
                        />
        </div>
                      

                  <hr />
                    <h3>Introducing <span>Progressive Web Apps</span><br /> Contact NOW to learn more!</h3>
                   <div className="price">
                    <button className="btn draw-border"><Link to="/contact">Contact Now</Link></button>
        </div>
        <p className="price-end">This company was built for all the poeple who feel like they deserve better. </p>
        <p className="price-end">If you're not sure, just leave a message, or a number to call back.</p>
        </div>
   
)

export default Price