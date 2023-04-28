import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import getRandomHexColor from './getRandomHexColor';

export default function StatisticItem({ label, percentage }) {
  return (
    <li
      className={css.statListItem}
      style={{ backgroundColor: getRandomHexColor() }}
    >
      <span className={css.label}>{label}</span>
      <span className={css.percentage}>{percentage}</span>
    </li>
  );
}

StatisticItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
