import s from '../Friends.module.css';
import FriendsList from '../FriendsList';
import PropTypes from 'prop-types';

export default function FriendsListItem({ avatar, name, isOnline, key }) {
  return (
    <li className={s.item} key={key}>
      <span className={isOnline ? s.green : s.red}></span>
      <img className={s.avatar} src={avatar} alt="avatar" width="48" />
      <p className={s.name}>{name}</p>
    </li>
  );
}

FriendsList.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
