import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/Aionbit-logo/vector/default-monochrome-white.svg";

export default function Logo() {
  return (
    <Link
      href="/"
      className="inline-flex shrink-0 rounded-md focus-visible:outline-none"
      aria-label="Aionbit"
    >
      <span className="relative flex h-7 w-20 sm:h-9 sm:w-36 md:h-10 md:w-44">
        <Image
          src={logo}
          alt="Aionbit Logo"
          fill
          priority
          sizes="(min-width: 768px) 176px, (min-width: 640px) 144px, 80px"
          className="object-contain"
        />
      </span>
    </Link>
  );
}
