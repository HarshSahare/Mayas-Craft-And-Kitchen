import HamperPage from "./hamperPage";

export default function Page() {
  return <HamperPage />;
}

export async function generateMetadata() {
  return {
    title: "Create Your Personalized Gift Hamper | Maya's Kitchen",
    description:
      "Handpick your favorite treats, add a personal message, and create a beautiful gift hamper for any special occasion.",

    openGraph: {
      title: "Create Your Personalized Gift Hamper | Maya's Kitchen",
      description:
        "Handpick your favorite treats, add a personal message, and create a beautiful gift hamper for any special occasion.",
      images: "/images/hamper.png",
    },

    alternates: {
      canonical: `/hamper`,
    },
  };
}
