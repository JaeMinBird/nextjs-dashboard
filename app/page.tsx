import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import styles from '@/app/ui/home.module.css';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6 font-mono">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-black p-4 md:h-52">
        <AcmeLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-white px-6 py-10 md:w-2/5 md:px-20 border border-gray-200">
          <div className={styles.shape} />
          <p className={`${lusitana.className} text-xl lowercase text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>welcome to acme.</strong> this is the example for the{' '}
            <a href="https://nextjs.org/learn/" className="text-accent-500">
              next.js learn course
            </a>
            , brought to you by vercel.
          </p>
          <Link
            href="/login"
            className="flex items-center gap-5 self-start rounded-lg bg-accent-500 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-opacity-90 md:text-base lowercase"
          >
            <span>log in</span> <ArrowRightIcon className="w-5 md:w-6" />
          </Link>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12 bg-white rounded-lg border border-gray-200">
          {/* Add Hero Images Here */}
          <Image
            src="/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="Screenshots of the dashboard project showing desktop version"
          />
          <Image
            src="/hero-mobile.png"
            width={560}
            height={620}
            className="block md:hidden"
            alt="Screenshot of the dashboard project showing mobile version"
          />
        </div>
      </div>
    </main>
  );
}
