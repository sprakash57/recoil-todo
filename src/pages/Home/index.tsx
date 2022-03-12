import Filter from 'components/Filter';
import Header from 'components/Header';
import List from 'components/List';
import Search from 'components/Search';
import Stats from 'components/Stats';
import useRollbarConfig from 'helpers/useRollbarConfig';
import styles from './index.module.css';

const Home = () => {

  const testRollbar = () => {
    throw new Error('Abort Error occured');
  }

  useRollbarConfig();

  return (
    <main>
      <Header />
      <section className={styles.container}>
        <Stats />
        <Search />
        <Filter />
        <List />
      </section>
      <button onClick={testRollbar}>Test Rollbar</button>
    </main>
  );
}

export default Home;
