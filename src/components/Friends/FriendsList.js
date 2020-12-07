import s from './Friends.module.css';
import PropTypes from 'prop-types';
import FriendsListItem from './FriendsListItem/FriendsListItem';

export default function FriendsList({ friends }) {
  return (
    <ul className={s.list}>
      {friends.map(friend => {
        return (
          <FriendsListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
};
