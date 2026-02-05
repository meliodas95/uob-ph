import { companyInfo } from "@/data/company-info";

export default function AboutContent() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-uob-red mb-6">
            {companyInfo.name}
          </h2>

          <div className="prose prose-lg max-w-none text-gray-700">
            <p className="mb-6 leading-relaxed">{companyInfo.description}</p>

            <p className="mb-6 leading-relaxed">
              The Company was registered with the Securities and Exchange
              Commission (SEC) on 05 December 1996 with SEC Registration No.
              A1996-09340. It commenced its commercial operations on 12 March
              1997.
            </p>

            <p className="mb-6 leading-relaxed">{companyInfo.mission}</p>

            <div className="bg-gray-50 p-6 rounded-lg mt-8">
              <h3 className="font-heading text-xl font-semibold text-uob-blue mb-4">
                Our Location
              </h3>
              <address className="not-italic text-gray-600">
                <p>{companyInfo.address.street}</p>
                <p>{companyInfo.address.street2}</p>
                <p>
                  {companyInfo.address.city} {companyInfo.address.postalCode}
                </p>
                <p className="mt-4">
                  <strong>Tel:</strong>{" "}
                  <a
                    href={`tel:${companyInfo.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-uob-blue hover:text-uob-red transition-colors"
                  >
                    {companyInfo.phone}
                  </a>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href={`mailto:${companyInfo.email}`}
                    className="text-uob-blue hover:text-uob-red transition-colors"
                  >
                    {companyInfo.email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
