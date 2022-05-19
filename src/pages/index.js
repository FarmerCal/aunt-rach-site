import Banner from '../components/Banner/Banner';
import Images from '../components/Images/Images';
import Song from '../components/Song/Song';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Banner />
      <Images />
      <Song />
    </Layout>
  );
};

export default Home;
