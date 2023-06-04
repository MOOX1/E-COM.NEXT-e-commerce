import Link from 'next/link';

export const runtime = 'edge';

export default function Teste() {
  return (
    <Link href={'/'} className="font-sans">
      {' '}
      home
    </Link>
  );
}
