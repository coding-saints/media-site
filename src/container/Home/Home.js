import React from 'react'
import { Link } from 'react-router-dom'
import Panel from './Panel'
import './Home.scss'

export default class Home extends React.Component {
    handleSubmit() {

    }
    render() {
    
        return(
            <div className="home-container">
                <h1 className="welcome">Welcome to Shopify Media</h1>
                <div className="header">
                    <img className="price-img" src={require("../../public/assets/media.png")} />
                    <p className="ecom">Introducing a new way to use <br />E-Commerce</p>
                </div>

                <div className="price">
                  <center>  Starting at
                    <br />
                    $999
                </center> 
                  <br />
                  <button className="btn draw-border"><Link to="/price">Get Started Now!</Link></button>              
                </div>

                <hr />
                <div>
                  
                            
                    <div className="row">
                      
                        <Panel
                            img={require("../../public/assets/homepage.png")}
                       
                        alt="React and Shopify"
                            title="New Styles"
                            paragraph="React Templates for better performance. Modern tech for the modern business"


                        />
                        <Panel 
                            img={require("../../public/assets/seo.png")}
                            alt="Google SEO"
                            title="Solving SEO"
                            paragraph="Taking time to create a foundation that leads your company to the top of the page ranks. Also introducing Progressive Web!"

                      />
                       <Panel 
                            img={require("../../public/assets/security.jpg")}
                            alt="Online Security"
                            title="Online Security"
                            paragraph="No more worries about your site, or your money! Secure HTTPS, and other custom methods will leave the competition behind."
                       
                       />
                       <a href="https://shopify-media.myshopify.com/collections/frontpage/products/more-time"><button>yoyoyoyyoyoyo</button></a>
                        
                    </div>
                </div>
            </div>
        )
    }
}

