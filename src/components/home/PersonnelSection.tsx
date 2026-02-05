import Image from "next/image";
import { keyPersonnel } from "@/data/personnel";

export default function PersonnelSection() {
  return (
    <section id="key-personnel" className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="font-heading text-3xl font-bold text-uob-blue text-center mb-12">
          Key Personnel
        </h2>

        {/* First row - 2 executives */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
          {keyPersonnel.slice(0, 2).map((person) => (
            <div key={person.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.position}`}
                  width={200}
                  height={257}
                  className="rounded-full w-[200px] h-[257px] object-cover object-top shadow-lg"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-uob-blue">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.position}</p>
            </div>
          ))}
        </div>

        {/* Second row - 4 directors */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {keyPersonnel.slice(2, 6).map((person) => (
            <div key={person.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.position}`}
                  width={200}
                  height={257}
                  className="rounded-full w-[200px] h-[257px] object-cover object-top shadow-lg"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-uob-blue">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.position}</p>
            </div>
          ))}
        </div>

        {/* Third row - 2 personnel */}
        <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-3xl mx-auto">
          {keyPersonnel.slice(6, 8).map((person) => (
            <div key={person.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.position}`}
                  width={200}
                  height={257}
                  className="rounded-full w-[200px] h-[257px] object-cover object-top shadow-lg"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-uob-blue">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.position}</p>
            </div>
          ))}
        </div>

        {/* Fourth row - 2 traders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {keyPersonnel.slice(8, 10).map((person) => (
            <div key={person.id} className="text-center">
              <div className="mb-4 flex justify-center">
                <Image
                  src={person.image}
                  alt={`${person.name} - ${person.position}`}
                  width={200}
                  height={257}
                  className="rounded-full w-[200px] h-[257px] object-cover object-top shadow-lg"
                />
              </div>
              <h3 className="font-heading text-lg font-semibold text-uob-blue">
                {person.name}
              </h3>
              <p className="text-gray-600">{person.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
