import Link from 'next/link';

export const runtime = 'edge';

export default function Dashboard() {
  return <Link href={'/'}>Home</Link>;
}
