const getDayName = (dateString) => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
};

const groupByDay = (days) => {
  return days?.reduce((acc, weather) => {
    const date = new Date(weather.dt * 1000).toLocaleDateString();
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(weather);
    return acc;
  }, {});
};

export { getDayName, groupByDay };
