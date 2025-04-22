import Banner from '@/components/banner';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Components from './components/page';

export default function Home() {
  return (
    <>
      <Banner />
      <Link href="/components">
        <Button>Components</Button>
      </Link>
      <Components />
    </>
  );
}
