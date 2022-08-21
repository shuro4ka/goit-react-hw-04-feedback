import { Component } from "react";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics} from "./Statistics/Statistics";
import { Section } from "./Section/Section";
import { Notification } from "./Notification/Notification";

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = feedback => {
    this.setState(prevState => ({
      [feedback]: prevState[feedback] + 1,
    }));
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.bad + this.state.neutral
  }

  countPositiveFeedbackPercentage = () => {
    return Math.round(this.state.good / this.countTotalFeedback() * 100);
  }

  render() {
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section> 
        
        {this.countTotalFeedback() === 0 ? (
          <Notification message="There is no feedback yet" />
        ) : (
        <Section title ="Statistics">
          <Statistics 
              good={this.state.good} 
              neutral={this.state.neutral} 
              bad={this.state.bad} 
              total={this.countTotalFeedback()} 
              positivePercentage={this.countPositiveFeedbackPercentage()} 
            />
          </Section>
        )}
      </>
    );
  }
}
