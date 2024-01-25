import JoinUs from "@/components/features/JoinUs";
import Nav from "@/components/features/Nav";
import TermsTitle from "./termsTitle";
import TermsContent from "./termsContent";


export default function index() {
  const active = "inactive";
  return (
    <main className="px-5 py-5 text-sm md:px-48">
      <Nav active={active} />
      <TermsTitle />
      <TermsContent />
      <JoinUs />
    </main>
  );
}
