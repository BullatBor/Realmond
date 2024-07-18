import { User } from '@/shared/model';
import { FC } from 'react';
import styles from './User.module.scss';

export const UserCard: FC<User> = ({ username, email, phone, address }) => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['wrapper__main']}>
        <div className={styles['wrapper__title']}>User Information</div>
        <div className={styles['wrapper__info']}>
          <div className={styles['wrapper__info_section']}>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>user name:</div>
              <div className={styles['wrapper__info_value']}>{username}</div>
            </div>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>email:</div>
              <div className={styles['wrapper__info_value']}>{email}</div>
            </div>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>phone:</div>
              <div className={styles['wrapper__info_value']}>{phone}</div>
            </div>
          </div>
          <div className={styles['wrapper__info_section']}>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>city:</div>
              <div className={styles['wrapper__info_value']}>
                {address.city}
              </div>
            </div>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>street:</div>
              <div className={styles['wrapper__info_value']}>
                {address.street}
              </div>
            </div>
            <div className={styles['wrapper__infoBlock']}>
              <div className={styles['wrapper__info_title']}>code:</div>
              <div className={styles['wrapper__info_value']}>
                {address.zipcode}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
