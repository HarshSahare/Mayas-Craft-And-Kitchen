import Image from "next/image";
import Link from "next/link";

export default function HelpBanner({ info }: { info: string }) {
  const link = process.env.NEXT_PUBLIC_WP_LINK;

  return (
    <Link
      href={`${link}I want to know what all things can we add to the hamper%0ACurrent Selected Till Now:%0A%0A ${info}`}
      target="_blank"
    >
      <div className="rounded-sm bg-primary text-[12px] items-center py-[12px] px-4 text-[#FFF8F4] flex">
        <Image src="/svg/idea_icon.svg" width={20} height={20} alt="" />
        <h2 className="ml-1 font-dm font-medium leading-tight">
          Need help deciding?
        </h2>

        <h2 className="ml-2 font-bold">Chat with us</h2>

        <Image
          src="/svg/whatsapp_icon.svg"
          width={11}
          height={11}
          className="ml-1"
          alt=""
        />

        <svg
          width="14"
          height="14"
          className="ml-auto"
          fill="none"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m9.78 18.78-1.06-1.06L14.44 12 8.72 6.28l1.06-1.06 5.895 5.895c.485.485.485 1.28 0 1.77L9.78 18.78Z"
            fill="#fff"
          />
        </svg>
      </div>
    </Link>
  );
}
