import { companyInfo } from "@/data/company-info";
import { keyPersonnel, Personnel } from "@/data/personnel";

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: companyInfo.name,
    alternateName: companyInfo.shortName,
    url: companyInfo.website,
    logo: `${companyInfo.website}/images/logo.png`,
    description: companyInfo.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: `${companyInfo.address.street}, ${companyInfo.address.street2}`,
      addressLocality: companyInfo.address.city,
      postalCode: companyInfo.address.postalCode,
      addressCountry: "PH",
    },
    telephone: companyInfo.phone,
    email: companyInfo.email,
    parentOrganization: {
      "@type": "Organization",
      name: companyInfo.parent,
      url: "https://www.uobkayhian.com/",
    },
    sameAs: [
      "https://www.uobkayhian.com/",
      "https://www.uobkayhian.com.hk/",
      "https://www.uobkayhian.co.th/",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: companyInfo.shortName,
    url: companyInfo.website,
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };
}

export function generateWebPageSchema(
  title: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
    isPartOf: {
      "@type": "WebSite",
      name: companyInfo.shortName,
      url: companyInfo.website,
    },
    publisher: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generatePersonSchema(person: Personnel) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    jobTitle: person.position,
    image: `${companyInfo.website}${person.image}`,
    worksFor: {
      "@type": "Organization",
      name: companyInfo.name,
    },
  };
}

export function generateAllPersonnelSchema() {
  return keyPersonnel.map((person) => generatePersonSchema(person));
}
