import FriendListItem from './FriendListItem';
import css from './FriendList.module.css';

function FriendList({ friends }) {
  const friendEl = friends.map(({ id, ...prop }) => (
    <FriendListItem key={id} {...prop} />
  ));
  return <ul className={css.friendList}>{friendEl}</ul>;
}

export default FriendList;
