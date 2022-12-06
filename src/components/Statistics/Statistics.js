import PropTypes from "prop-types";
import { Range, PositiveFeedback, Number } from "./Statistics.styled";

export const Statistics = ({ good, neutral, bad, total, positivePercentage}) => {

    return(
        <>
        <Range>Good: <Number>{good}</Number></Range>
        <Range>Neutral: <Number>{neutral}</Number></Range>
        <Range>Bad: <Number>{bad}</Number></Range>
        <Range>Total: <Number>{total}</Number></Range>
         
        <PositiveFeedback>
            Positive Feedback: <Number>{!isNaN(positivePercentage) && positivePercentage}%</Number>
        </PositiveFeedback>
        </>
    )    
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
};