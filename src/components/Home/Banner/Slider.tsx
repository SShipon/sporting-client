import ImageSlider from "../ImageSlider";

const Slider = () => {
  const slides = [
    { url: "https://i.ibb.co/CQNg7XX/istockphoto-1367479709-612x612.jpg", title: "beach" },
    { url: "https://i.ibb.co/Bgq2Cyq/istockphoto-162446099-612x612.jpg", title: "boat" },
    { url: "https://i.ibb.co/pLx5qsK/istockphoto-1091395604-612x612.jpg", title: "forest" },
    { url: "https://i.ibb.co/W38DywT/istockphoto-496853834-612x612.jpg", title: "city" },
    { url: "https://i.ibb.co/WcVDR4S/istockphoto-1415580725-612x612.jpg", title: "italy" },
    { url: "https://i.ibb.co/nr0hvDZ/istockphoto-1197582795-612x612.jpg", title: "italy" },
    { url: "https://i.ibb.co/q0VRDtF/istockphoto-490665558-612x612.jpg", title: "italy" },
    { url: "https://i.ibb.co/hD85gKN/istockphoto-485210100-612x612.jpg", title: "italy" },
  ];






  const containerStyles = {
    width: "1000px",
    height: "500px",
    margin: "0 auto",
  };
  return (
    <div>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default Slider;