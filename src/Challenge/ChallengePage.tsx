import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import Challenge from './Challenge';

const ChallengePage: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <Challenge />
      <Footer />
    </div>
  );
};

export default ChallengePage;
