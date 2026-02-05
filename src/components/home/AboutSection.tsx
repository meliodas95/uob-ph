import Image from "next/image";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="font-heading text-3xl font-bold text-uob-blue mb-6">
              About Us
            </h2>
            <Image
              src="/images/about-hero.png"
              alt="UOB Kay Hian Philippines Office - Makati City Skyline"
              width={500}
              height={300}
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="font-heading text-xl font-semibold text-uob-red mb-4">
              UOB Kay Hian Securities (Philippines) Inc.
            </h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              is a wholly-owned subsidiary of UOB-Kay Hian Holdings Limited, a
              listed company incorporated in{" "}
              <a
                href="https://www.uobkayhian.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-uob-blue hover:text-uob-red transition-colors"
              >
                Singapore
              </a>
              . The Company was registered with the Securities and Exchange
              Commission (SEC) on 05 December 1996 with SEC Registration No.
              A1996-09340. It commenced its commercial operations on 12 March
              1997.
            </p>
            <Link
              href="/about-us"
              className="inline-block bg-uob-blue text-white px-6 py-3 rounded font-semibold hover:bg-uob-red transition-colors"
            >
              Find out more
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
