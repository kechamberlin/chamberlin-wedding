import Link from 'next/link';

export default function Nav() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/story">Our Story</Link>
      <Link href="/photos">Photos</Link>
      <Link href="/upload">Upload</Link>
    </nav>
  );
}
