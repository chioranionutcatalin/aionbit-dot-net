import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Aionbit-logo/default.png";

export default function Logo() {
  return (
    <Link href="/" className="inline-flex shrink-0" aria-label="Aionbit">
      <span className="relative flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16">
        <Image
          src={logo}
          alt="Aionbit Logo"
          fill
          sizes="(min-width: 768px) 64px, (min-width: 640px) 56px, 48px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}
