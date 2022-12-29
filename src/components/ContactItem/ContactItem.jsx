import PropTypes from 'prop-types';

export default function ContactItem({ name, number }) {
    return (
        <li>
            <p>{name}: {number}</p>
        </li>
    )
}

ContactItem.propTypes = {
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
}