import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';
import './App.css';

function App() {
  const navigate = useNavigate();

  return (
    <div className="landing">
      <section className="landing__hero">
        <div className="landing__hero-inner">
          <p className="landing__eyebrow">Est. 2014 &middot; Grown by hand</p>
          <h1 className="landing__title">Paradise Nursery</h1>
          <p className="landing__tagline">
            Houseplants that clean your air, scent your rooms, and forgive you for forgetting to water them.
          </p>
          <button className="landing__cta" onClick={() => navigate('/plants')}>
            Get Started
          </button>
        </div>
      </section>

      <AboutUs />
    </div>
  );
}

export default App;
