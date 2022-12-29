import PropTypes from 'prop-types';
// import {} from "./ContactItem.styled";

export default function ContactItem({ id, name, number, onDelete }) {
    return (
        <li>
            <p>{name}: {number}</p>
            <button type="button" onClick={() => {onDelete(id)}}>Delete</button>
        </li>
    )
}

ContactItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    onDelete: PropTypes.func.isRequired,
}