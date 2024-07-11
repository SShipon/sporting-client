import React from "react";
import { FaCheck } from "react-icons/fa";
import { Button } from "../ui/button";
import { useState } from "react";
import { PlanProps } from "@/types";

const Plan: React.FC<PlanProps> = ({ plan }) => {
    const {
        plan: planName, // Use 'plan' directly as 'planName'
        description,
        price: { original, discounted, term },
        renewal_price,
        features,
        choose, // Text for the button
    } = plan;

    const isProPlan = planName === "Pro"; // Check if it's the "Pro" plan

    // State to manage the visibility of additional features
    const [showMore, setShowMore] = useState(false);

    const handleToggle = () => {
        setShowMore(prevState => !prevState);
    };

    return (
        <div className={`flex flex-col justify-between h-full bg-white rounded-lg shadow-md relative 
            ${isProPlan ? 'border-4 border-violet-400' : 'border border-violet-400'}`}>
        <div className={`relative ${isProPlan ? '-mt-8 lg:p-0 p-4' : ''}`}>
            <Button className={`block mx-auto w-full mb-4 rounded-t-lg ${isProPlan ? 'rounded-none' : ''}`}>
                {planName}
            </Button>

            <div className="p-4 flex flex-col flex-grow">
                <p className="mb-4">{description}</p>
                <p className="mb-2">Original Price: {original}</p>
                <p className="mb-2">Discounted Price: {discounted} for {term}</p>
                <p className="mb-6">Renewal Price: {renewal_price}</p>

                {/* Button to toggle the additional features */}
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
                    className="block mx-auto w-full mb-4 rounded-md text-violet-500"
                >
                    {showMore ? "See less features " : "See all features "}
                </Button>
                {/* Conditionally render the "Choose plan" button only for the "Pro" plan */}
                {isProPlan && (
                    <Button  
                        className={`block mx-auto w-full ${isProPlan ? 'rounded-full' : 'rounded-md'}`}
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
