import PropTypes from 'prop-types';
import StatisticsItem from 'components/statisticsItem/StatisticsItem';
import styles from './StatisticsList.module.css';

const StatisticsList = ({ stats }) => {
  return (
    <ul className={styles.statsList}>
      {stats.map(format => (
        <StatisticsItem key={format.id} label={format.label} percentage={format.percentage} />
      ))}
    </ul>
  );
};
export default StatisticsList;

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired })),
};
