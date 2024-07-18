import { getUsers, UserCard } from '@/shared';
import { useUsers } from '@/shared/context/usersContext';
import { useEffect } from 'react';
import styles from './UsersBlock.module.scss';

export const UsersBlock = () => {
  const { users, addUsers } = useUsers();
  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers();
      addUsers(users);
    };
    fetchUsers();
  }, []);
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        {users.map((user) => (
          <UserCard key={user.id} {...user} />
        ))}
      </div>
    </div>
  );
};
