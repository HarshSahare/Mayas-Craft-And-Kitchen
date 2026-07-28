import Image from "next/image";

type Props = {
  image: string;
};

export default function Hero({ image }: Props) {
  return (
    <section className="pt-6">
      <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt="Hamper"
          fill
          priority
          className="object-cover"
        />
      </div>

      <div className="mt-8">
        <h1 className="font-dm text-[24px] font-bold leading-tight text-primary">
          Create a Hamper,
        </h1>

        <h2 className="font-dancing -mt-3 text-[28px] text-[#ED667E]">
          as unique as your bond
        </h2>
      </div>

      <div className="mt-6 flex items-center gap-4">
        <Image
          width={500}
          height={500}
          src="svg/hamper_seperator_icon.svg"
          alt=""
        />
      </div>
    </section>
  );
}
