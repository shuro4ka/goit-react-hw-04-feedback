import PropTypes from 'prop-types';
import {Button} from "./FeedbackOptions.styled";

export const FeedbackOptions = ({feedbacks, onLeaveFeedback}) => {
  return (
    <>
      {feedbacks.map(feedback => (
        <Button
          key={feedback}
          type="button"
          name={feedback}
          onClick={() => onLeaveFeedback(feedback)}
        >
          {feedback.toUpperCase()}
        </Button>
      ))}
    </>
  );
};
    
FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};