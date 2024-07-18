import styles from './SearchBlock.module.scss';
import { useSearch } from '@/shared/hooks/useSearch';

export const SearchBlock = () => {
  const { text, handleTextChange, selectedOption, handleCheckboxChange } =
    useSearch();
  return (
    <div className={styles['wrapper']}>
      <input
        type='text'
        value={text}
        placeholder='Search'
        onChange={(e) => handleTextChange(e.target.value)}
      />
      <div className={styles['wrapper__checkbox']}>
        <input
          type='checkbox'
          value='number'
          checked={selectedOption === 'number'}
          onChange={handleCheckboxChange}
        />
        <div>искать по номеру</div>
      </div>
      <div className={styles['wrapper__checkbox']}>
        <input
          type='checkbox'
          value='email'
          checked={selectedOption === 'email'}
          onChange={handleCheckboxChange}
        />
        <div>искать по почте</div>
      </div>
      <div className={styles['wrapper__checkbox']}>
        <input
          type='checkbox'
          value='name'
          checked={selectedOption === 'name'}
          onChange={handleCheckboxChange}
        />
        <div>искать по имени</div>
      </div>
    </div>
  );
};
