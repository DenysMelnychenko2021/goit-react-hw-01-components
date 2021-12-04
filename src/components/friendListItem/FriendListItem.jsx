import PropTypes from 'prop-types';
import classnames from 'classnames';
import styles from './FriendListItem.module.scss';

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <span
        className={classnames(styles.status, {
          [styles['status--online']]: isOnline,
        })}
      >
        {isOnline ? 'on' : 'off'}
      </span>
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </>
  );
};
export default FriendListItem;

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
