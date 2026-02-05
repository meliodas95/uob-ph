import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[400px] w-full">
      <Image
        src="/images/about-hero.png"
        alt="Makati City Skyline - UOB Kay Hian Philippines Headquarters"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-8">
        <div className="container mx-auto">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </div>
    </section>
  );
}
