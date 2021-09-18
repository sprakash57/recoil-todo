import Filter from 'components/Filter';
import Header from 'components/Header';
import List from 'components/List';
import Search from 'components/Search';
import Stats from 'components/Stats';
import styles from './index.module.css';

const Home = () => {
  return (
    <main>
      <Header />
      <section className={styles.container}>
        <Stats />
        <Search />
        <Filter />
        <List />
      </section>
    </main>
  );
}

export default Home;
