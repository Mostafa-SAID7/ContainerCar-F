import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { BusinessBrowser } from "@/components/site/BusinessBrowser";
import { Franchises } from "@/components/site/Franchises";
import { Suppliers } from "@/components/site/Suppliers";
import { HowItWorks } from "@/components/site/HowItWorks";

const title = "ContainerCar — Start a Container Business in Egypt";
const description =
  "Compare investment, setup time and staffing for ready-to-run container businesses, franchise brands and verified suppliers.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <BusinessBrowser />
        <Franchises />
        <Suppliers />
        <HowItWorks />
      </main>
    </div>
  );
}
