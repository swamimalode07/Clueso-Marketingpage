import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import UseCases from "@/components/sections/UseCases";
import EditorSection from "@/components/sections/Editor";
import CallToAction from "@/components/sections/CallToAction";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="pt-22">
        <Hero />
        <UseCases />
        <EditorSection />
        <CallToAction />
      </main>
    </div>
  );
}
