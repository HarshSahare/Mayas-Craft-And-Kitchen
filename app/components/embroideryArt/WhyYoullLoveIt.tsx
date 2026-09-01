import { HandHeartIcon } from "@solar-icons/react/linear/hand-heart";
import { HeartIcon } from "@solar-icons/react/bold/heart";
import { HouseIcon } from "@solar-icons/react/bold/house";
import { GiftIcon } from "@solar-icons/react/bold/gift";
import { AdhesivePlasterIcon } from "@solar-icons/react/linear/adhesive-plaster";

const features = [
  {
    icon: HandHeartIcon,
    title: "100%",
    subtitle: "Handmade",
  },
  {
    icon: HouseIcon,
    title: "Aesthetic",
    subtitle: "Home Decor",
  },
  {
    icon: GiftIcon,
    title: "Perfect",
    subtitle: "Gift",
  },
  {
    icon: HeartIcon,
    title: "Customization",
    subtitle: "Available",
    filled: true,
  },
];

export default function WhyYoullLoveIt() {
  return (
    <section
      className="
        w-full
        rounded-[18px]
        border border-[#ffb8b8]
        bg-[#fffaf7]
        px-8 py-7
        mt-4
      "
    >
      {/* Heading */}
      <h2
        className="
          font-dm
          font-semibold
          leading-[1.2]
          text-[#333333]
          text-[16px]
        "
      >
        Why you’ll love it
      </h2>

      {/* Features */}
      <div
        className="
          grid
          grid-cols-4
          items-start
          mt-4
          gap-2
        "
      >
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="
                flex
                min-w-0
                flex-col
                items-center
                text-center
              "
            >
              {/* Icon */}
              <div className="flex items-center justify-center">
                <Icon
                  strokeWidth={0.8}
                  className={
                    feature.filled
                      ? "fill-[#ff7890] text-[#ff7890] h-9 w-9"
                      : "h-9 w-9 text-[#ff7890] "
                  }
                />
              </div>

              {/* Text */}
              <div className="mt-2 font-dm  leading-tight text-[#666666] text-[12px]">
                <div>{feature.title}</div>
                <div>{feature.subtitle}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Making time */}
      <div className="mt-4 flex items-center justify-center gap-2 ">
        {/* Left decorative line */}
        <div className="flex flex-1 items-center justify-end">
          <div className="h-[2px] w-full max-w-[75px] bg-gradient-to-r from-transparent to-[#ff9a9a]" />
        </div>

        {/* Scissors */}
        <AdhesivePlasterIcon
          className="
            h-5 w-5
            shrink-0
            -rotate-12
            text-[#ff7f91]
          "
          strokeWidth={0.5}
        />

        {/* Text */}
        <div
          className="
            flex
            shrink-0
            items-center
            gap-1.5
            whitespace-nowrap
            font-dm
            text-[14px]
            font-semibold
          "
        >
          <span className="text-[#444444]">MAKING TIME:</span>
          <span className="text-[#ff8494]">7–8 DAYS</span>
        </div>

        {/* Right decorative line */}
        <div className="flex flex-1 items-center justify-start">
          <div className="h-[2px] w-full max-w-[75px] bg-gradient-to-r from-[#ff9a9a] to-transparent" />
        </div>
      </div>
    </section>
  );
}
