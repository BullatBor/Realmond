import { User } from '../model';

export const getUsers = async (limit = 9): Promise<User[]> => {
  const responce = await fetch(
    `https://fakestoreapi.com/users?limit=${limit}`
  ).then((value) => value.json());
  return responce;
};
