export default function HomePage() {
  const today = new Date();
  const weddingString = wedding.toDateString();

  if (today.getMonth() === 9 && today.getDate() > 14) {
    wedding.setFullYear(wedding.getFullYear() + 1);
  }
  const weddingDate = new Date('October 14, 2021');
  const weddingDateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  if (today.getMonth() === 9 && today.getDate() === 14) {
    return <p>Today's the day!</p>;
  }

  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil((wedding.getTime() - today.getTime()) / oneDay);

  return (
    <>
      <h1>When?</h1>
      <p>{weddingString}</p>
      <h4>{daysLeft} days left</h4>
    </>
  );
}
