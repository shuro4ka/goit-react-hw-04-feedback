import PropTypes from 'prop-types';

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    const feedbacks = Object.keys(options);
    
    return (
        <>
          {feedbacks.map(feedback => (
            <button
              key={feedback}
              type="button"
              name={feedback}
              onClick={() => onLeaveFeedback(feedback)}
            >
              {feedback.toUpperCase()}
            </button>
          ))}
        </>
      );
    };
    
    FeedbackOptions.propTypes = {
      options: PropTypes.object.isRequired,
      onLeaveFeedback: PropTypes.func.isRequired,
    };