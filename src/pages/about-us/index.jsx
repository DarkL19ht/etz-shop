import Nav from "@/components/features/Nav";
import JoinUs from "@/components/features/JoinUs";
import AboutHero from "./AboutHero";
import Values from "./Values";
import OurStory from "./OurStory";
import OurTeam from "./OurTeam";

export default function index() {
  const active = "active";
  return (
    <main className="px-5 py-5 text-sm md:px-48">
      <Nav active={active} />
      <AboutHero />
      <Values/>
      <OurStory/>
      <OurTeam/>
      <JoinUs />
    </main>
  );
}
