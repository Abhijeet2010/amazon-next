import Banner from "./components/Banner";
import Products from "./components/Products";

export default function Home() {
  return (
    <main>
      <div className="max-w-screen-2xl mx-auto bg-gray-300">
        <Banner />
        <div className="relative md:-mt-20 lg:-mt-32 xl:-mt-60 z-20 mb-10">
          <Products />
        </div>
      </div>
    </main>
  );
}
