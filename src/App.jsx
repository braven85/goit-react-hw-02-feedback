import React from 'react';
import PropTypes from 'prop-types';
import styles from './components/Feedback.module.css';
import { FeedbackOptions } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import { Section } from './components/Section';
import { Notification } from './components/Notification';
import HorizontalLine from './components/HorizontalLine';
import { Repository } from './components/Repository';


class App extends React.Component {

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  addGoodOpinion = () => {
    this.setState({
      good: this.state.good + 1
    });
  };

  addNeutralOpinion = () => {
    this.setState({
      neutral: this.state.neutral + 1
    });
  };

  addBadOpinion = () => {
    this.setState({
      bad: this.state.bad + 1
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    if (total === 0) {
      return 0 + "%";
    } else {
      return Math.round((good / total) * 100) + "%";
    }
  };

  render() {

    const totalCount = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div className={styles.feedback__container}>
        <Repository />
        <HorizontalLine />
        <Section title="Please leave feedback">
          <div className={styles.buttons__container}>
            <FeedbackOptions options={this.addGoodOpinion} onLeaveFeedback="Good" />
            <FeedbackOptions options={this.addNeutralOpinion} onLeaveFeedback="Neutral" />
            <FeedbackOptions options={this.addBadOpinion} onLeaveFeedback="Bad" />
          </div>
        </Section>
        <HorizontalLine />
        <Section title="Statistics">
          {totalCount === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalCount}
              positivePercentage={positivePercentage} />
          )}
        </Section>
      </div>
    );
  }

}

App.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default App;
