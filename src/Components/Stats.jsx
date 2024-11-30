export default function Stats({ stats }) {
  return (
    <section className="stats">
      <Stat number={stats.numWords} label="Words" />
      <Stat number={stats.numOfCharachters} label="Characters" />
      <Stat number={stats.instagramCharachters} label="Instagram" />
      <Stat number={stats.facebookCharachters} label="Facebook" />
    </section>
  );
}

function Stat({ number, label }) {
  return (
    <section className="stat">
      <span
        className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
      >
        {number}
      </span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}
