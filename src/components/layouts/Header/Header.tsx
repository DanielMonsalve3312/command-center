import Image from 'next/image';
import Link from 'next/link';

export const Header = () => {
  return (
    <header className="flex w-full justify-center items-center bg-brand px-2 py-6 xs:px-4 sm:px-8">
      <div className="w-32">
        <Link href="/">
          <Image
            src="/logo.png"
            width={135}
            height={80}
            className="w-full"
            alt="Command center"
            title="Command center"
            />
        </Link>
      </div>
    </header>
  );
};
