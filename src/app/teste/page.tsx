import Link from 'next/link';
import { resourceUsage } from 'process';

export default function Teste() {
  return (
    <Link href={'/'} className="font-sans">
      {' '}
      home
    </Link>
  );
}
