import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import AboutContent from "@/components/about/AboutContent";
import PersonnelGrid from "@/components/about/PersonnelGrid";
import {
  generateWebPageSchema,
  generateBreadcrumbSchema,
  generateAllPersonnelSchema,
} from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about UOB Kay Hian Securities (Philippines) Inc., a wholly-owned subsidiary of UOB-Kay Hian Holdings Limited. Meet our key personnel and leadership team.",
  openGraph: {
    title: "About Us | UOB Kay Hian Philippines",
    description:
      "Learn about UOB Kay Hian Securities (Philippines) Inc., a wholly-owned subsidiary of UOB-Kay Hian Holdings Limited.",
    url: "https://uobkayhian.com.ph/about-us",
    images: [
      {
        url: "/images/about-hero.png",
        width: 1200,
        height: 630,
        alt: "UOB Kay Hian Philippines Office",
      },
    ],
  },
  alternates: {
    canonical: "https://uobkayhian.com.ph/about-us",
  },
};

export default function AboutPage() {
  const webPageSchema = generateWebPageSchema(
    "About Us | UOB Kay Hian Philippines",
    "Learn about UOB Kay Hian Securities (Philippines) Inc., a wholly-owned subsidiary of UOB-Kay Hian Holdings Limited.",
    "https://uobkayhian.com.ph/about-us"
  );

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "https://uobkayhian.com.ph" },
    { name: "About Us", url: "https://uobkayhian.com.ph/about-us" },
  ]);

  const personnelSchemas = generateAllPersonnelSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      {personnelSchemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
      <AboutHero />
      <AboutContent />
      <PersonnelGrid />
    </>
  );
}
