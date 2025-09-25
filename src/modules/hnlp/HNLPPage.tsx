import './styles/hnlp-theme.css';
import HeroSection from './components/HeroSection';
import StorySection from './components/StorySection';
import PainSection from './components/PainSection';
import BreakthroughSection from './components/BreakthroughSection';
import TransformationSection from './components/TransformationSection';
import OfferSection from './components/OfferSection';
import TestimonialsSection from './components/TestimonialsSection';
import GuaranteeSection from './components/GuaranteeSection';
import FinalCTASection from './components/FinalCTASection';

const HNLPPage = () => {
  return (
    <div className="hnlp-module min-h-screen">
      <HeroSection />
      <StorySection />
      <PainSection />
      <BreakthroughSection />
      <TransformationSection />
      <OfferSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FinalCTASection />
    </div>
  );
};

export default HNLPPage;