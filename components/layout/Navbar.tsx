import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { navActions, navLinks } from "@/content/site";

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

const Navbar = () => (
  <header className="fixed top-0 left-0 right-0 z-50 bg-white">
    <Container className="flex h-18 items-center justify-between lg:h-22">
      <Link href="/" className="shrink-0">
        <Image
          src="/assets/Clueso-logo.svg"
          alt="Clueso"
          width={126}
          height={24}
          preload
        />
      </Link>

      <nav aria-label="Main" className="hidden items-center gap-4 lg:flex">
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

      <button
        type="button"
        aria-label="Open menu"
        className="grid size-11 shrink-0 place-items-center rounded-lg border border-hairline transition-colors hover:bg-neutral-50 lg:hidden"
      >
        <span className="flex w-[18px] flex-col gap-[5px]" aria-hidden="true">
          <span className="h-0.5 w-full rounded-full bg-ink" />
          <span className="h-0.5 w-full rounded-full bg-ink" />
        </span>
      </button>

      <div className="hidden items-center gap-4 lg:flex">
        <Button
          title={navActions.signIn.label}
          href={navActions.signIn.href}
          variant="outline"
          size="sm"
        />
        <Button
          title={navActions.signUp.label}
          href={navActions.signUp.href}
          variant="dark"
          size="sm"
        />
      </div>
    </Container>
  </header>
);

export default Navbar;
