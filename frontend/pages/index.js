export default function HomePage() {
  const today = new Date();
  const weddingDate = new Date('October 14, 2021');
  const weddingDateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };
  const weddingDateString = weddingDate.toLocaleDateString(
    'en-US',
    weddingDateOptions
  );
  const oneDay = 1000 * 60 * 60 * 24;
  const daysLeft = Math.ceil(
    (weddingDate.getTime() - today.getTime()) / oneDay
  );

  if (today.getMonth() === 9 && today.getDate() === 14) {
    return <p>Today's the day!</p>;
  }


  return (
    <>
      <h1>When?</h1>
      <p>{weddingString}</p>
      <h4>{daysLeft} days left</h4>
    </>
  );
}
