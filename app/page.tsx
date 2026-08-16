import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import UseCases from "@/components/UseCases";
import EditorSection from "@/components/EditorSection";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-22">
        <Hero />
        <UseCases />
        <EditorSection />
      </main>
    </div>
  );
}
