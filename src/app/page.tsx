import Hero from "@/components/home/Hero";
import AboutSection from "@/components/home/AboutSection";
import PersonnelSection from "@/components/home/PersonnelSection";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/structured-data";

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const webSiteSchema = generateWebSiteSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webSiteSchema),
        }}
      />
      <Hero />
      <AboutSection />
      <PersonnelSection />
    </>
  );
}
