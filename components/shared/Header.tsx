import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <header className="w-full border border-b">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image
            src="/assets/images/logo.svg"
            width={138}
            height={38}
            alt="Evently Logo"
          />
        </Link>

        <div className="flex w-32 justify-end gap-3"></div>
      </div>
    </header>
  );
};

export default Header;
