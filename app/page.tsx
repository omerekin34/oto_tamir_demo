import { Contact } from "@/components/Contact";
import { FloatingActions } from "@/components/FloatingActions";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Contact />
      </main>
      <FloatingActions />
    </>
  );
}
