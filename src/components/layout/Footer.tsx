import Link from "next/link";
import { companyInfo, internationalOffices } from "@/data/company-info";

export default function Footer() {
  return (
    <footer className="bg-dark-bg text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8">
          {/* International Offices */}
          <div>
            <h3 className="font-heading text-xl font-semibold mb-4 text-uob-gold">
              International Offices
            </h3>
            <ul className="space-y-2">
              {internationalOffices.map((office) => (
                <li key={office.name}>
                  <a
                    href={office.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-uob-red transition-colors"
                  >
                    {office.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Us */}
          <div id="contact">
            <h3 className="font-heading text-xl font-semibold mb-4 text-uob-gold">
              Contact Us
            </h3>
            <address className="not-italic text-gray-300 space-y-2">
              <p className="font-semibold text-white">{companyInfo.name}</p>
              <p>{companyInfo.address.street}</p>
              <p>{companyInfo.address.street2}</p>
              <p>
                {companyInfo.address.city} {companyInfo.address.postalCode}
              </p>
              <p className="pt-2">
                <span className="text-gray-400">Tel:</span>{" "}
                <a
                  href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-uob-red transition-colors"
                >
                  {companyInfo.phone}
                </a>
              </p>
              <p>
                <span className="text-gray-400">Email:</span>{" "}
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="hover:text-uob-red transition-colors"
                >
                  {companyInfo.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} {companyInfo.name}. All rights
            reserved.
          </p>
          <p className="mt-2">
            A subsidiary of{" "}
            <a
              href="https://www.uobkayhian.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-uob-gold hover:text-uob-red transition-colors"
            >
              {companyInfo.parent}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
