import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import { PlanProps } from "@/types";

const Plan: React.FC<PlanProps> = ({ plan }) => {
    const {
        plan: planName, 
        description,
        price: { original, discounted, term },
        renewal_price,
        features,
        choose, 
    } = plan;

    const isProPlan = planName === "Pro";

    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(prevState => !prevState);
    };

    return (
        <div className={`flex flex-col justify-between items-stretch h-full bg-white rounded-lg shadow-md relative 
            ${isProPlan ? 'border-4 -top-10 border-t-0 border-red-400  rounded-t-[20px]' : 'border border-violet-400'}`}>
            <div className={`relative ${isProPlan ? 'lg:p-0 p-4' : ''}`}>
                {/* Top button (Plan Name) */}
                <Button className={`block mx-auto w-full mb-4 ${isProPlan ? 'bg-red-400 text-white rounded-none rounded-t-[18px] hover:bg-red-500' : 'bg-violet-400 text-white rounded-b-[0px] hover:bg-violet-500'}`}>
                    {planName}
                </Button>

                <div className="p-4 flex flex-col flex-grow">
                    <p className="mb-4">{description}</p>
                    <del><p className="mb-2 text-2xl font-extrabold">{original}</p></del>
                    <p className="mb-2 text-1xl">{discounted} for {term}</p>
                    <div>
                        <span className="mb-6 text-3xl font-extrabold">{renewal_price}</span>
                        <span className="px-1 text-2xl">/mo</span>
                    </div>

                    <ul>
                        {features.slice(0, showMore ? features.length : 5).map((feature, index) => (
                            <li key={index} className="mb-2 flex items-center">
                                <FaCheck className="inline-block text-green-500 mr-2" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <Button variant="outline"
                        onClick={handleToggle}
                        className="block mx-auto w-full mb-4 rounded-md text-violet-500 hover:text-violet-600"
                    >
                        {showMore ? "See less features" : "See all features"}
                    </Button>

                    {/* Bottom button (Choose Plan) */}
                    {isProPlan && (
                        <Button  
                            className="block mx-auto w-full rounded-full  bg-red-400 text-white hover:bg-red-500"
                        >
                            {choose}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Plan;
