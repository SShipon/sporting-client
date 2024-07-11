import img1 from '../../../assets/images/logo/logo (1).png';
import img2 from '../../../assets/images/logo/logo (2).png';
import img3 from '../../../assets/images/logo/logo (3).png';
import img4 from '../../../assets/images/logo/logo (4).png';
import img5 from '../../../assets/images/logo/logo (5).png';
import img6 from '../../../assets/images/logo/logo (6).png';
import img7 from '../../../assets/images/logo/logo (7).png';
import img8 from '../../../assets/images/logo/logo (8).png';
import img9 from '../../../assets/images/logo/logo (9).png';
import img10 from '../../../assets/images/logo/logo (10).png';
import Marquee from 'react-fast-marquee';
import Logo from './Logo';

type LogoImg = {
  logoImg: string,
  _id: number
};

const SportingLogo = () => {
  const sportingLogos: LogoImg[] = [
    {
      _id: 1,
      logoImg: img1,
    },
    {
      _id: 2,
      logoImg: img2,
    },
    {
      _id: 3,
      logoImg: img3,
    },
    {
      _id: 4,
      logoImg: img4,
    },
    {
      _id: 5,
      logoImg: img5,
    },
    {
      _id: 6,
      logoImg: img6,
    },
    {
      _id: 7,
      logoImg: img7,
    },
    {
      _id: 8,
      logoImg: img8,
    },
    {
      _id: 9,
      logoImg: img9,
    },
    {
      _id: 10,
      logoImg: img10,
    },
  ];

  return (
    <div className="w-full  pt-5 pb-20 ">
      <div className="text-center my-10">
        <h2 className="text-center lg:text-5xl md:text-xl text-base  font-bold my-10 px-10">
          OUR TOP WORLD SPORTING CLUB PARTNERSHIP
        </h2>
        <p className="mt-4">
          of companies plan to their tech tools in the next year. <br />
          One way to respond to this downscaling is to seek out
          technology partnerships..
        </p>
      </div>
      <Marquee speed={30}>
        <div className="flex gap-5">
          {sportingLogos.map((logo) => (
            <Logo key={logo._id} logo={logo}></Logo>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default SportingLogo;
