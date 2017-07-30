import React from 'react'
import { Link } from 'react-router-dom'
import Panel from './Panel'
import './Home.scss'

export default class Home extends React.Component {
    render() {
        return(
            <div className="home-container">
                <h1 className="welcome">Welcome to Shopify Media</h1>
                <div className="header">
                    <img className="price-img" src={require("../../public/assets/homepage.png")} />
                    <p className="ecom">Introducing a new <br />way to use <br />E-Commerce</p>
                </div>

                <div className="price">
                  <center>  Starting at
                    <br />
                    $799
                </center> 
                  <br />
                  <button className="btn draw-border"><Link to="/price">Get Started Now!</Link></button>              
                </div>

                <hr />
                <div>
                  
                            
                    <div className="row">
                      
                        <Panel
                        img={require("../../public/assets/showing.png")}
                       
                        alt="React and Shopify"
                            title="New Styles"
                            paragraph="Tons of new stuff including React"


                        />
                        <Panel 
                            img={require("../../public/assets/seo.png")}
                            alt="Google SEO"
                            title="Solving SEO"
                            paragraph="Taking time to create a foundation that leads your company to the top of the page ranks"

                      />
                       <Panel 
                            img={require("../../public/assets/security.jpg")}
                            alt="Online Security"
                            title="Online Security"
                            paragraph="NO more worrying about your site, or your money"
                       
                       />
                        
                    </div>
                </div>
            </div>
        )
    }
}

