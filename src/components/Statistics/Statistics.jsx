import StatisticksEl from './StatisticksEl';

function Statistics({ title, stats }) {
  const itemData = stats.map(el => (
    <StatisticksEl key={el.id} label={el.label} percentage={el.percentage} />
  ));
  //   const itemData = stats.map(({ id, ...props }) => (
  // <StatisticksEl key={id} {...props} />
  //   ));

  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}

      <ul className="stat-list">{itemData}</ul>
    </section>
  );
}

export default Statistics;
