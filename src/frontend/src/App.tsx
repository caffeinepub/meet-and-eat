import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import About from "./components/About";
import Contact from "./components/Contact";
import Deals from "./components/Deals";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import Reservation from "./components/Reservation";
import Testimonials from "./components/Testimonials";
import WhatsAppButton from "./components/WhatsAppButton";
import { useRouter } from "./hooks/useRouter";
import MenuPage from "./pages/MenuPage";

const queryClient = new QueryClient();

function AppContent() {
  const { path } = useRouter();

  if (path === "/menu") {
    return <MenuPage />;
  }

  return (
    <div className="font-poppins">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <Deals />
        <About />
        <Gallery />
        <Testimonials />
        <Reservation />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster richColors position="top-right" />
    </div>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppContent />
    </QueryClientProvider>
  );
}
