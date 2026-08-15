import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-22">
        <Hero />
      </main>
    </div>
  );
}
