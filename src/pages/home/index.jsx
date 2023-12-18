import Nav from "@/components/features/Nav";
import Hero from "@/components/features/Hero";
import Sale from "@/components/features/Sale";
import Catalog from "@/components/features/Catalog";
import Pagination from "@/components/features/Pagination";
import Button from "@/components/ui/button/Button";
import Loader from "@/components/ui/loader";
export default function index() {
  return (
    <main className="px-5 py-5 text-sm md:px-10  ">
      <Nav />
      <Hero />
      <Sale />
      <Catalog />
      <Pagination />
      <Button
        variant={"lemony"}
        size={"large"}
        isLoading={false}
        loadingText="please wait ..."
        text="Login"
        isFullWidth
      />
    </main>
  );
}
