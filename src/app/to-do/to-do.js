import PropTypes from 'prop-types';

export const propTypes = PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
});
