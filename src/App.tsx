import { Header } from './shared/ui/header/Header';
import styles from './App.module.scss';
import { UsersBlock } from './features/usersBlock/UsersBlock';

function App() {
  return (
    <div className={styles['wrapper']}>
      <Header />
      <UsersBlock />
    </div>
  );
}

export default App;
