import PropTypes from 'prop-types';
import useDebounce from './useDebounce';
import { useState } from 'react';

const   SearchInput = ({ value, onChange }) => {
    const [displayValue, setDisplayValue] = useState(value);
    const debouncedChange = useDebounce(onChange, 500);

    function handleChange(event) {
        setDisplayValue(event.target.value);
        debouncedChange(event.target.value);
    }

    return (
        <input
            type="search"
            value={displayValue}
            onChange={handleChange}
        />
    )
};

SearchInput.propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default SearchInput;