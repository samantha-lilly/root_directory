import React from 'react';

class AddressForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = this.props.address;
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.submitAddress(this.state)
    }

    render () {

        let { address } = this.props;
        
        if (!address) return null;

        return (
            <form className="address-form-container" onSubmit={this.handleSubmit}>

                <h1>{this.props.formType}</h1>

                <label>First Name
                    <input
                        type="text"
                        value={this.state.firstName}
                        onChange={this.update("firstName")}
                    />
                </label>

                <label>Last Name
                    <input
                        type="text"
                        value={this.state.lastName}
                        onChange={this.update("lastName")}
                    />
                </label>

                <label>Company
                    <input
                        type="text"
                        value={this.state.company}
                        onChange={this.update("company")}
                    />
                </label>

                <label>Address 1
                    <input
                        type="text"
                        value={this.state.address1}
                        onChange={this.update("address1")}
                    />
                </label>

                <label>Address2
                    <input
                        type="text"
                        value={this.state.address2}
                        onChange={this.update("address2")}
                    />
                </label>

                <label>City
                    <input
                        type="text"
                        value={this.state.city}
                        onChange={this.update("city")}
                    />
                </label>

                <label>State (enter abbreviation)
                    <input
                        type="text"
                        value={this.state.state}
                        onChange={this.update("state")}
                    />
                </label>

                <label>Country
                    <input
                        type="text"
                        value={this.state.country}
                        onChange={this.update("country")}
                    />
                </label>

                <label>Zip Code
                    <input
                        type="text"
                        value={this.state.zipCode}
                        onChange={this.update("zipCode")}
                    />
                </label>

                <label>Phone Number
                    <input
                        type="text"
                        value={this.state.phoneNumber}
                        onChange={this.update("phoneNumber")}
                    />
                </label>

                <button type="submit" value={this.props.formType}>im a button</button>

            </form>


        )
    }


}

export default AddressForm;