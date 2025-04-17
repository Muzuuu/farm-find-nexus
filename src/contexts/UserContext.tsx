
import React, { createContext, useState, useContext, ReactNode } from 'react';

export type UserRole = 'owner' | 'farmer';

interface User {
  id?: string;
  name?: string;
  email?: string;
  role: UserRole;
  isAuthenticated: boolean;
}

interface UserContextType {
  user: User;
  updateUser: (data: Partial<User>) => void;
  logout: () => void;
  setRole: (role: UserRole) => void;
}

const defaultUser: User = {
  role: 'owner',
  isAuthenticated: false,
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User>(defaultUser);

  const updateUser = (data: Partial<User>) => {
    setUser(prevUser => ({
      ...prevUser,
      ...data,
    }));
  };

  const logout = () => {
    setUser(defaultUser);
  };

  const setRole = (role: UserRole) => {
    setUser(prevUser => ({
      ...prevUser,
      role,
    }));
  };

  return (
    <UserContext.Provider value={{ user, updateUser, logout, setRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};
