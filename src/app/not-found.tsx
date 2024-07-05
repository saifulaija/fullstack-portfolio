import assets from '@/assets';
import { buttonVariants } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center max-w-md mx-auto">
        <Image src={assets.images.noPageFound} alt="logo" width={200} height={200} />
        <Link href="/" className={buttonVariants()}>
        &larr; Go Back Home
        </Link>
      </div>
    </div>
  );
}
