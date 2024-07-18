import { SearchBlock } from '@/shared';
import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <div className={styles['wrapper__title']}>Realmond</div>
        <SearchBlock />
      </div>
    </div>
  );
};
