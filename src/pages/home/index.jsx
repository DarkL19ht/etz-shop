import Nav from "@/components/features/Nav";
import Hero from "@/components/features/Hero";
import Sale from "@/components/features/Sale";
import Catalog from "@/components/features/Catalog";
import Pagination from "@/components/features/Pagination";

export default function index() {
  return (
    <main className="px-5 py-5 text-sm md:px-10">
      <Nav />
      <Hero />
      <Sale />
      <Catalog />
      <Pagination />
    </main>
  );
}
