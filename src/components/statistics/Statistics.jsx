import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ children, title }) => {
  return (
    <section className={styles.statistics}>
      {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
      {children}
    </section>
  );
};
export default Statistics;

Statistics.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
};
