import { useQuery } from 'react-query';

// get users from user.js
import { users } from '../api/user';

export const useUserList = (userId) => {
  const { data: userList, isLoading, error } = useQuery(['userList',userId], () => Promise.resolve(users)); 

  const addUser = (user) => {
  };

  const deleteUser = (userIdx) => {
  };

  const updateUserList = (newUserList) => {
  };

  return {
    userList,
    isLoading,
    error,
    addUser,
    deleteUser,
    updateUserList,
  };
};
