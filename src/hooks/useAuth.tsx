'use client';

import LoadingComponent from '@/components/Loading/Loading';
import {
  createContext,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

import { useMemo } from 'react';

export interface User {
  id: string;
}

interface IUserProvider {
  user: User;
  setUser: React.Dispatch<SetStateAction<User>>;
  isAuthenticated: boolean;
  logout: () => void;
}

interface ChildrenProps {
  children: ReactNode;
}

const AuthContext = createContext({} as IUserProvider);

const AuthProvider = ({ children }: ChildrenProps) => {
  const [user, setUser] = useState<User>({} as User);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataUser = localStorage.getItem('@token:user');

    if (dataUser) {
      setUser(JSON.parse(dataUser));
    }
    setLoading(false);
  }, []);

  const isAuthenticated = user.id !== undefined;

  const logout = () => {
    localStorage.removeItem('@token:user');
    localStorage.removeItem('@token:accessToken');
    localStorage.removeItem('@token:refreshToken');

    setUser({} as User);
  };

  const authValue = useMemo(
    () => ({ user, setUser, isAuthenticated, logout }),
    [user, setUser, isAuthenticated, logout],
  );
  if (loading) {
    // Renderize um componente ou retorno para o estado de 'loading'
    return <LoadingComponent />;
  }

  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);
