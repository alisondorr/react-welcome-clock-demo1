import React, { Component } from 'react';
import { render } from 'react-dom';
class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>First Name:</label>
                        <input onChange={this.handleChange} type="text" name="firstName" value={this.state.formData.firstName} />
                    </div>
                    <div>
                        <label>Last Name:</label>
                        <input onChange={this.handleChange} type="text" name="lastName" value={this.state.formData.lastName} />
                    </div>
                    <button>Submit Form</button>
                    <br />
                    {this.state.formData.firstName}
                    <br />
                    {this.state.formData.lastName}
                </form>
            </div>
        );
    }
    handleChange = (event) => {
        //since this.setState only does a shallow merge we are going to create a new object from the related object in state
        //this will allow us to make sure we don't lose data when calling setState method
        let newFormData = this.state.formData;
        //update the specific field in our new object
        newFormData[event.target.name] = event.target.value;
        //update the formData object in state with the new 
        this.setState({ formData: newFormData });
    }

    handleSubmit = (event) => {
        //prevent the form submission from reloading the page
        event.preventDefault();
        //update state to reflect the form submission
        //we leverage this in the render method to show the thank you page instead of the form
        this.setState({
            submitted: true
        })
    }

    resetForm = (event) => {
        this.setState({
            submitted: false,
            formData: {
                firstName: "",
                lastName: "",
                email: ""
            }
        })
    }
}

// render() {
//     //show the thank you message if the form has been submitted
//     if (this.state.submitted) {
//         return (
//             <div>
//                 Thank you, {this.state.formData.firstName}, for submitting the form <br />
//                 <button onClick={this.resetForm}>Reset Form</button>
//             </div>
//         )
//     }
export default Contact;


