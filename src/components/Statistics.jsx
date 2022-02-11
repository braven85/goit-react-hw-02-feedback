import styles from './Feedback.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return <>
    <p className={styles.stats}>Good: {good}</p>
    <p className={styles.stats}>Neutral: {neutral}</p>
    <p className={styles.stats}>Bad: {bad}</p>
    <p className={styles.stats}>Total: {total}</p>
    <p className={styles.stats}>Positive feedback: {positivePercentage}</p>
  </>
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string
} 