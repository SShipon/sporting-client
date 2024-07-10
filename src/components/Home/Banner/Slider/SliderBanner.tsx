import { ImageSlider, } from "./ImageSlider"; // Assuming ImageSliderProps is exported from ImageSlider.tsx

// Define the interface for each image object
interface Image {
  url: string;
  alt: string;
  title: string; // If title is needed somewhere in the ImageSlider component
}

// Define your IMAGES array using the Image interface
const IMAGES: Image[] = [
  { url: "https://i.ibb.co/CQNg7XX/istockphoto-1367479709-612x612.jpg", alt: "beach", title: "beach" },
  { url: "https://i.ibb.co/Bgq2Cyq/istockphoto-162446099-612x612.jpg", alt: "boat", title: "boat" },
  { url: "https://i.ibb.co/pLx5qsK/istockphoto-1091395604-612x612.jpg", alt: "forest", title: "forest" },
  { url: "https://i.ibb.co/W38DywT/istockphoto-496853834-612x612.jpg", alt: "city", title: "city" },
  { url: "https://i.ibb.co/WcVDR4S/istockphoto-1415580725-612x612.jpg", alt: "italy", title: "italy" },
  { url: "https://i.ibb.co/nr0hvDZ/istockphoto-1197582795-612x612.jpg", alt: "italy", title: "italy" },
  { url: "https://i.ibb.co/q0VRDtF/istockphoto-490665558-612x612.jpg", alt: "italy", title: "italy" },
  { url: "https://i.ibb.co/hD85gKN/istockphoto-485210100-612x612.jpg", alt: "italy", title: "italy" },
];

export default function SliderBanner() {
  return (
    <div
      style={{
        maxWidth: "1200px",
        width: "100%",
        aspectRatio: "10 / 6",
        margin: "0 auto",
      }}
    >
      <ImageSlider images={IMAGES} />
    </div>
  );
}
