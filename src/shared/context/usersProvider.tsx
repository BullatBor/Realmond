import { useState, useMemo } from 'react';
import { User } from '../model';
import { UserContext } from './usersContext';

interface UserProviderProps {
  children: JSX.Element;
}

export const UserProvider = ({ children }: UserProviderProps) => {
  const [users, setUsers] = useState<User[]>([]);

  const usersValue = useMemo(() => {
    const addUsers = (users: User[]) => {
      setUsers(users);
    };

    return { users, addUsers };
  }, [users]);

  return (
    <UserContext.Provider value={usersValue}>{children}</UserContext.Provider>
  );
};
