// components/NotFoundPage.tsx
import { Button } from '@/components/ui/button';
import { ArrowLeftCircle } from 'lucide-react';
import Link from 'next/link';

export default function NotFoundPage() {
  return (
    <div className="flex items-center justify-center min-h-screen ">
      <div className=" text-center max-w-md mx-auto">
        <h1 className="text-8xl font-extrabold text-primary mb-6">404</h1>
        <p className="text-2xl text-gray-800 mb-6">Oops! The page you're looking for doesn't exist.</p>
        <p className="text-lg text-gray-600 mb-8">It might have been moved or deleted.</p>
        <Link href="/">
          <Button className="flex items-center gap-2">
            <ArrowLeftCircle className="h-6 w-6" />
            Go Back Home
          </Button>
        </Link>
      </div>
    </div>
  );
}
