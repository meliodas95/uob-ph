import Link from "next/link";
import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="UOB Kay Hian Philippines Logo"
              width={180}
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <Navigation />
        </div>
      </div>
    </header>
  );
}
