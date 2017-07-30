import React from 'react'


export default class Panel extends React.Component {
    render() {
        return(
            <div className="panel">
                <div className="panel-image">
                <img src={this.props.img} alt={this.props.alt} />
                </div>
                <div className="con">
                <h4>{this.props.title}</h4>
               <p> {this.props.paragraph}</p>
                </div>
                <br />
            </div>
        )
    }
}
