import Image from 'next/image';

export const Header = () => {
  return (
    <header className="flex w-full justify-center items-center bg-brand px-2 py-6 xs:px-4 sm:px-8">
      <div className="w-32">
          <Image
            src="/logo.png"
            width={135}
            height={80}
            className="w-full"
            alt="Command center"
            title="Command center"
          />
      </div>
    </header>
  );
};
