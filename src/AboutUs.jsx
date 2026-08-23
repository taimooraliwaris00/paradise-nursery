import './AboutUs.css';

export default function AboutUs() {
  return (
    <section className="about-us" id="about" aria-labelledby="about-heading">
      <div className="about-us__rings" aria-hidden="true">
        <svg viewBox="0 0 200 200" width="140" height="140">
          <circle cx="100" cy="100" r="90" fill="none" stroke="#9CB8A8" strokeWidth="2" opacity="0.5" />
          <circle cx="100" cy="100" r="66" fill="none" stroke="#9CB8A8" strokeWidth="2" opacity="0.6" />
          <circle cx="100" cy="100" r="42" fill="none" stroke="#9CB8A8" strokeWidth="2" opacity="0.75" />
          <circle cx="100" cy="100" r="18" fill="#E3A857" opacity="0.9" />
        </svg>
      </div>

      <div className="about-us__content">
        <p className="about-us__eyebrow">Our Story</p>
        <h2 id="about-heading">About Paradise Nursery</h2>
        <p>
          Paradise Nursery started in 2014 as a single greenhouse table at a weekend farmers market. What began as a
          handful of cuttings shared between neighbors has grown into a full-service online plant shop, but the goal
          has never changed: help people bring living green into the rooms where they actually spend their time.
        </p>
        <p>
          Every plant we sell is propagated and grown in-house by our small team of horticulturists, then hand-picked
          and packed the same week it ships. We specialize in three things — air-purifying plants that quietly clean
          the air you breathe, fragrant plants that scent a room without a candle, and low-maintenance plants built
          for real schedules, not perfect ones.
        </p>
        <p>
          We believe a good plant shop is judged less by how many species it carries and more by how many of them
          survive their first year in your home. That's why every listing includes plain-language care notes, and why
          our team is always a message away if a leaf starts to look unhappy.
        </p>
      </div>
    </section>
  );
}
