import Image from "next/image";
import { keyPersonnel } from "@/data/personnel";

export default function PersonnelGrid() {
  return (
    <section id="key-personnel" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-uob-blue text-center mb-12">
          Key Personnel
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {keyPersonnel.map((person) => (
            <article key={person.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.position} at UOB Kay Hian Philippines`}
                  width={200}
                  height={257}
                  className="rounded-full w-[180px] h-[230px] object-cover object-top shadow-lg border-4 border-white"
                />
              </div>
              <h3 className="font-heading text-base font-semibold text-uob-blue">
                {person.name}
              </h3>
              <p className="text-gray-600 text-sm">{person.position}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
