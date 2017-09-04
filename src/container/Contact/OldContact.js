import React from 'react'
import * as firebase from 'firebase'




export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            type: 'info',
            message: 'false'
        }
    }
    handleSubmit(e) {
        e.preventDefault()
    }
    // handleSubmit (event) {
    //     event.preventDefault();
    //     // Scroll to the top of the page to show the status message.
    //     document.getElementById('heading').scrollIntoView();
    //     this.setState({ type: 'info', message: 'Sending...' }, this.sendFormData);
    // }
    // /**
    //  * Submits form data to the web server.
    //  */
    // sendFormData () {
    //     // Prepare form data for submitting it.
    //     let formData = {
           
    //         budget: React.findDOMNode(this.refs.budget).value,
    //         email: React.findDOMNode(this.refs.email).value,
    //         name: React.findDOMNode(this.refs.name).value,
    //         phone: React.findDOMNode(this.refs.phone).value,
    //         project: React.findDOMNode(this.refs.project).value
           
           
    //     };

    //     // Extract checked values from "How can we help?" and "How soon do we need to start?".
    //     formData.areas = this.getSelected('areas');
    //     formData.when = this.getSelected('when');

    //     // Send the form data.
    //     let xmlhttp = new XMLHttpRequest();
    //     let _this = this;
    //     xmlhttp.onreadystatechange = function () {
    //         if (xmlhttp.readyState === 4) {
    //             let response = JSON.parse(xmlhttp.responseText);
    //             if (xmlhttp.status === 200 && response.status === 'OK') {
    //                 _this.setState({ type: 'success', message: 'We have received your message and will get in touch shortly. Thanks!' });
    //             }
    //             else {
    //                 _this.setState({ type: 'danger', message: 'Sorry, there has been an error. Please try again later or send us an email at info@example.com.' });
    //             }
    //         }
    //     }
    //     xmlhttp.open('POST', 'send', true);
    //     xmlhttp.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    //     xmlhttp.send(this.requestBuildQueryString(formData));
    // }

    // requestBuildQueryString (params) {
    //     let queryString = [];
    //     for (let property in params)
    //         if (params.hasOwnProperty(property)) {
    //             queryString.push(encodeURIComponent(property) + '=' + encodeURIComponent(params[property]));
    //         }
    //     return queryString.join('&');
    // }
  
    // getSelected (fieldName) {
    //     let i;
    //     let fields = document.getElementsByName(fieldName);
    //     let selectedFields = [];
    //     for (i = 0; i < fields.length; i++) {
    //         if (fields[i].checked === true) {
    //             selectedFields.push(fields[i].value);
    //         }
    //     }
    //     return selectedFields.join(', ');
    // }

    render() {
        // if (this.state.type && this.state.message) {
        //     let classString = 'alert alert-' + this.state.type;
        //     let status = <div id="status" className={classString} ref="status">
        //         {this.state.message}
        //     </div>;
        // }
        return(
            <div className="form-wrapper">
               
                {status}
                <form action="mailto:success@shopify.media"
                    method="GET">
                {/*<form onSubmit={this.handleSubmit}>*/}
                    <div className="form-group">
                        <label htmlFor="name">Your full name *</label>
                        <input className="form-control" name="name" ref="name" required type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Your email address *</label>
                        <input className="form-control" name="email" ref="email" required type="email" />
                    </div>
               
                    <div className="form-group">
                        <label htmlFor="phone">Your phone number *</label>
                        <input className="form-control" name="phone" ref="phone" required type="phone" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="budget">Give us a rough idea of your budget *</label>
                        <input className="form-control" name="budget" ref="budget" type="text" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="project">Tell us about your project *</label>
                        <textarea className="form-control" name="project" ref="project" rows="4" />
                    </div>

                    <div className="form-group">
                        <button className="btn btn-primary" type="submit">Send your project info</button>
                    </div>
                </form>
            
            </div>
        )
    }


    
}
