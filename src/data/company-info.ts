export const companyInfo = {
  name: "UOB Kay Hian Securities (Philippines) Inc.",
  shortName: "UOB Kay Hian Philippines",
  parent: "UOB Kay Hian Holdings Limited",
  address: {
    street: "Unit 4B, Level 18, Tower 2, The Enterprise Center",
    street2: "6766 Ayala Avenue corner Paseo De Roxas",
    city: "Makati City",
    postalCode: "1226",
    country: "Philippines",
  },
  phone: "(632) 887-7972",
  fax: "(632) 887-7973",
  email: "mailphils@uobkayhian.com",
  website: "https://uobkayhian.com.ph",
  founded: 1990,
  description: `UOB Kay Hian Securities (Philippines) Inc. is one of the leading stockbrokerage firms in the Philippines. We are a subsidiary of UOB Kay Hian Holdings Limited, a Singapore-listed company that is one of Asia's largest stockbroking groups with a presence in key financial centers worldwide.`,
  mission: `We are committed to providing our clients with the best trading experience through our award-winning UTRADE platform, comprehensive research, and personalized service.`,
} as const;

export const internationalOffices = [
  { name: "Singapore", url: "https://www.uobkayhian.com/" },
  { name: "Hong Kong", url: "https://www.uobkayhian.com.hk/" },
  { name: "Thailand", url: "https://www.uobkayhian.co.th/" },
  { name: "Indonesia", url: "https://www.uobkayhian.co.id/" },
  { name: "Malaysia", url: "https://www.utrade.com.my/" },
] as const;
