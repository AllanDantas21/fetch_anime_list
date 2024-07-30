import PropTypes from 'prop-types';

const   SearchInput = ({ value, onChange }) => {
    function handleChange(event) {
        onChange(event.target.value);
    }

    return (
        <input
            type="search"
            value={value}
            onChange={handleChange}
        />
    )
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SearchInput;