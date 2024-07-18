import { useEffect, useState } from 'react';
import { useUsers } from '../context';
import { getUsers } from '../api';

export const useSearch = () => {
  const [text, setText] = useState('');
  const [selectedOption, setSelectedOption] = useState<string | null>('number');
  const { users, addUsers } = useUsers();

  useEffect(() => {
    if (text.length == 0) {
      const fetchUsers = async () => {
        const users = await getUsers();
        addUsers(users);
      };
      fetchUsers();
    }
  }, [text]);

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (selectedOption === value) {
      setSelectedOption(null); // Отключить, если уже выбран
    } else {
      setSelectedOption(value);
    }
  };

  const handleTextChange = (inputText: string) => {
    if (selectedOption == 'email') {
      const newUsers = users.filter((user) =>
        new RegExp(inputText, 'gi').test(user.email)
      );
      addUsers(newUsers);
    } else if (selectedOption == 'number') {
      const newUsers = users.filter((user) =>
        new RegExp(inputText, 'gi').test(user.phone)
      );
      addUsers(newUsers);
    } else if (selectedOption == 'name') {
      const newUsers = users.filter((user) =>
        new RegExp(inputText, 'gi').test(user.username)
      );
      addUsers(newUsers);
    }
    setText(inputText);
  };

  return { text, handleTextChange, selectedOption, handleCheckboxChange };
};
