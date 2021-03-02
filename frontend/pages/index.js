export default function HomePage() {
  return <div>Home Page</div>;
  const today = new Date();
  const wedding = new Date('October 14, 2021');
  const weddingString = wedding.toDateString();

  if (today.getMonth() === 9 && today.getDate() > 14) {
    wedding.setFullYear(wedding.getFullYear() + 1);
  }

  if (today.getMonth() === 9 && today.getDate() === 14) {
    return <p>Today's the day!</p>;
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((wedding.getTime() - today.getTime()) / oneDay);

}
