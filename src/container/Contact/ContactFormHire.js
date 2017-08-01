import React, {Component} from 'react'
import * as firebase from 'firebase'
import database from './database'

export default class ContactFormHire extends Component {
    constructor() {
        super();
        this.state = {
            speed: 10
        }
        this.handleSubmit = this.handleSubmit.bind(this)
}

    handleSubmit(e) {
        e.preventDefault()
        const email = document.getElementsByClassName('form-control')
        console.log(this.email.value.bind(this));
    }
    render() {
        return(
           <div>
            <h1>{this.state.speed}</h1>
            <div className="form-wrapper">

                {status}
                    <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        
                        <label htmlFor="name">Your full name *</label>
                        <input value={this.props.value} className="form-control" name="name" ref="name" required type="text" />
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Send your project info</button>
                    </div>
                    
                </form>
            </div>
            </div>
        )
    }
} 
