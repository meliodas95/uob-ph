import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full">
      <Image
        src="/images/hero-banner.png"
        alt="It's time U TRADE - UTRADE Philippines Online Stock Trading"
        width={1920}
        height={600}
        className="w-full h-auto"
        priority
      />
    </section>
  );
}
