import { Component } from "react";
import PropTypes from 'prop-types';
import { Form, LabelField, InputField, ButtonAdding } from "./ContactForm.styled";

export default class ContactForm extends Component {
    static propTypes = {
        onSubmit: PropTypes.func.isRequired,
    };
    
    state = {
        name: "",
        number: "",
    }

    handleInput = (event) => {
        const { name, value } = event.currentTarget;  
        this.setState({[name]: value})
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onSubmit(this.state, this.reset);
    }

    reset = () => {
        this.setState({
            name: "",
            number: "",
        })
    }

    render() {
        const { name, number } = this.state;

        return (
            <Form onSubmit={this.handleSubmit}>
                <LabelField>
                    Name
                    <InputField
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={name}
                        onChange={this.handleInput}
                    />
                </LabelField>

                <LabelField>
                    Number
                    <InputField
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={number}
                        onChange={this.handleInput}
                    />
                </LabelField>

                <ButtonAdding type="submit">Add contact</ButtonAdding>
            </Form>
        )
    }
}