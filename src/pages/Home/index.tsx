import Header from 'components/Header';
import List from 'components/List';
import Search from 'components/Search';
import styles from './index.module.css';

const Home = () => {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <Search />
        <List />
      </section>
    </main>
  );
}

export default Home;
