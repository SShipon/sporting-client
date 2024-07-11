
import { useLottie } from "lottie-react";
import laptop from "../../assets/contact/95100-contact-us.json";

const ContactAnimate  = () => {
  const options = {
    animationData: laptop,
    loop: true
  };

  const { View } = useLottie(options);

  return <>{View}</>;
};

export default ContactAnimate;