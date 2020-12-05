import s from './Friends.module.css';
import PropTypes from 'prop-types';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(item => {
        return (
          <li className={s.item}>
            {item.isOnline ? (
              <span className={s.green}></span>
            ) : (
              <span className={s.red}></span>
            )}

            <img
              className={s.avatar}
              src={item.avatar}
              alt="avatar"
              width="48"
            />
            <p className={s.name}>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}
