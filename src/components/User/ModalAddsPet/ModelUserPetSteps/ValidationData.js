function day_of_the_month(d) {
  return `${d.getMonth() < 10 ? '0' : ''}${d.getMonth() + 1}`;
}
function day_of_the_day(d) {
  return (d.getDate() < 10 ? '0' : '') + d.getDate();
}
export default function getCurrent() {
  const now = new Date();
  const normaYear = now.getFullYear();
  const normaMonth = day_of_the_month(now);
  const normaDate = day_of_the_day(now);
  return `${normaYear}-${normaMonth}-${normaDate}`;
}
