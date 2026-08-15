import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Product", href: "#product", hasDropdown: true },
  { label: "Solutions", href: "#solutions", hasDropdown: true },
  { label: "Resources", href: "#resources", hasDropdown: true },
  { label: "Pricing", href: "#pricing", hasDropdown: false },
  { label: "Enterprise", href: "#enterprise", hasDropdown: false },
];

const Chevron = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
    <path
      d="M4.5 8.25L7.58579 11.3358C8.36683 12.1168 9.63316 12.1168 10.4142 11.3358L13.5 8.25"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-hairline">
      <div className="mx-auto flex h-22 w-full max-w-340 items-center justify-between px-5">
        <Link href="/" className="shrink-0">
          <Image
            src="/assets/Clueso-logo.svg"
            alt="Clueso"
            width={126}
            height={24}
            preload
          />
        </Link>

        <nav className="hidden items-center gap-4 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center gap-0.5 rounded px-3 py-2 text-[16px] font-medium tracking-[-0.01em] text-muted transition-colors hover:text-ink"
            >
              {link.label}
              {link.hasDropdown && <Chevron />}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button title="Sign In" href="/signin" variant="outline" size="sm" />
          <Button
            title="Start Free Trial"
            href="/signup"
            variant="dark"
            size="sm"
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
