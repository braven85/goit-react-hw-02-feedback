import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return <button onClick={options}>{onLeaveFeedback}</button>
}

FeedbackOptions.propTypes = {
  options: PropTypes.func,
  onLeaveFeedback: PropTypes.string
}