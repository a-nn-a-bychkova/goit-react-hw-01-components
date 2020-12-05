import Statistics from './Statistics';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function StatisticsList({ items }) {
  return (
    <ul className={s.list}>
      {items.map(item => {
        return (
          <li className={s.item} key={item.id}>
            <span className={s.label}>{item.label}</span>
            <span className={s.percentage}>{item.percentage}%</span>
          </li>
        );
      })}
    </ul>
  );
}

StatisticsList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }),
  ),
};
