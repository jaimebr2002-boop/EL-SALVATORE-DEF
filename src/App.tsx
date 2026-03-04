import HeroSection from './components/HeroSection';
import AboutSection from './components/ConceptSection';
import MenuSection from './components/MenuSection';
import ReviewsSection from './components/ReviewsSection';
import LocationSection from './components/LocationSection';
import ReservationSection from './components/ReservationSection';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="font-sans">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <ReviewsSection />
      <LocationSection />
      <ReservationSection />
      <Footer />
    </main>
  );
}

