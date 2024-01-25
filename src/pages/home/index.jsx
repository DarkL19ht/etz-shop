import Nav from "@/components/features/Nav";
import Hero from "@/components/features/Hero";
import Incoming from "@/components/features/Incoming";
import Faq from "@/components/features/Faq";
import JoinUs from "@/components/features/JoinUs";

export default function index() {
  const active = "inactive"
  return (
    <main className="px-5 py-5 text-sm md:px-48">
      <Nav active={active} />
      <Hero />
      <Incoming />
      <Faq />
      <JoinUs />
    </main>
  );
}
