import React, {Component} from 'react'

export default class PricePanel extends Component {
    render() {
        return(
            <div className="price-container">
                <div className="price-one">
                    
                  <img src={this.props.src} className="panelimage" />
                    <div className="dollars">{this.props.price}</div>
                    <div className="plan">{this.props.plan}</div>
                    <ul className="lists">
                        {this.props.list.map(function (listValue) {
                            return <li key={listValue} className="pricelist">{listValue}</li>;
                        })}
                    </ul>          
                </div>
            </div>
        )
    }
}