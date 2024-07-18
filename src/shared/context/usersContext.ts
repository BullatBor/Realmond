import { createContext, useContext } from 'react';
import { User } from '../model';

interface UserContextType {
  users: User[];
  addUsers: (user: User[]) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUsers = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
