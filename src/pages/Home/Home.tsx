
import AccordionCom from "@/components/Home/AccordionFAQ/AccordionCom";
import Banner from "@/components/Home/Banner/Banner";
import HomeItem from "@/components/Home/HomeItem/HomeItem";
import SportingLogo from "@/components/Home/SportingLogo/SportingLogo";
import Plans from "@/components/Plans/Plans";










const Home = () => {
    return (
        <div>
            <Banner />
              <HomeItem />
             <AccordionCom />
             <Plans />
             <SportingLogo />
        </div>
    );
};

export default Home;