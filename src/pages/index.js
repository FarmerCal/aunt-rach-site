import Banner from '../components/Banner/Banner';
import Images from '../components/Images/Images';
import Song from '../components/Song/Song';
import Note from '../components/Note/Note';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Images />
      <Song />
      <Note />
    </Layout>
  );
};

export default Home;
