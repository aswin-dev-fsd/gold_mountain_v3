import StoryRail, { StoryRailItem } from "@/components/StoryRail";

const items: StoryRailItem[] = [
  { title: "Arrival", text: "Begin with a calm sense of place. Final entrance details and imagery require property approval.", image: "/images/resort-walk.webp", alt: "Path through green surroundings, reference image", eyebrow: "01 / Arrival" },
  { title: "Garden", text: "Move through the gardens and open spaces that surround the stay, using only verified property details.", image: "/images/resort-courtyard.webp", alt: "Green resort courtyard, reference image", eyebrow: "02 / Garden" },
  { title: "Room", text: "Rest in a space designed for quiet and privacy. Final room details remain client-controlled.", image: "/images/resort-room.webp", alt: "Quiet room setting, reference image", eyebrow: "03 / Room" },
  { title: "Wellness", text: "Connect the stay environment with confirmed wellness practices and daily rhythm.", image: "/images/wellness-lifestyle.webp", alt: "Wellness setting surrounded by greenery, reference image", eyebrow: "04 / Wellness" },
  { title: "Landscape", text: "End with the wider landscape and Arunachala, a defining part of the sense of place.", image: "/images/arunachala-landscape.webp", alt: "Arunachala landscape, reference image", eyebrow: "05 / Landscape" },
];

export default function ResortWalk() {
  return <StoryRail items={items} ariaLabel="Walk the resort" />;
}
