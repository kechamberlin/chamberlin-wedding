import Link from 'next/link';
import Nav from './Nav';

export default function Header() {
  return (
    <header>
      <div className="bar">
        <Link href="/">Chamberlin Wedding</Link>
      </div>
      <Nav />
    </header>
  );
}
