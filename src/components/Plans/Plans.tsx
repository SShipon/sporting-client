
import Plan from "./Plan";


const plansData = [
  {
    "plan": "Basic",
    "choose": "Choose plan",
    id: 1,
    "description": "Perfect for getting started with your first website. performance",
    "price": {
      "original": "$9.99",
      "discounted": "$1.99/mo",
      "term": "36-month term"
    },
    "renewal_price": "$5.99",
    "features": [
      "1 website",
      "50 GB SSD storage",
      "Free email",
      "Free SSL",
      "Free domain ($9.99 value)",
      "Unlimited bandwidth",
      "Managed WordPress Hosting",
      "WordPress acceleration",
      "30-Day money-back guarantee",
      "10 databases",
      "GIT Access",
      "Weekly Backups"
    ]
  },
  {
    "plan": "Pro",
    "choose": "Choose plan",
    id: 2,
    "description": "Ideal for small businesses and growing websites performance.",
    "price": {
      "original": "$15.99",
      "discounted": "$4.99/mo",
      "term": "24-month term"
    },
    "renewal_price": "$9.99",
    "features": [
      "Unlimited websites",
      "200 GB SSD storage",
      "Free email",
      "Unlimited free SSL",
      "Free domain ($12.99 value)",
      "Unlimited bandwidth",
      "Managed WordPress Hosting",
      "WordPress acceleration",
      "Website builder",
      "30-Day money-back guarantee",
      "Unlimited databases",
      "GIT Access",
      "SSH access",
      "Daily Backups",
      "Object cache for WordPress",
      "Advanced WordPress staging tool"
    ]
  },
  {
    "plan": "Business",
    "choose": "Choose plan",
    id: 3,
    "description": "For established businesses that need high performance.",
    "price": {
      "original": "$19.99",
      "discounted": "$7.99/mo",
      "term": "12-month term"
    },
    "renewal_price": "$12.99",
    "features": [
      "Unlimited websites",
      "500 GB SSD storage",
      "Free email",
      "Unlimited free SSL",
      "Free domain ($14.99 value)",
      "Unlimited bandwidth",
      "Managed WordPress Hosting",
      "WordPress acceleration",
      "Website builder",
      "30-Day money-back guarantee",
      "Unlimited databases",
      "GIT Access",
      "SSH access",
      "Hourly Backups",
      "Object cache for WordPress",
      "Premium WordPress staging tool",
      "24/7 priority support"
    ]
  }
];

const Plans = () => {
  return (
    <div className="mt-10 lg:mx-20">
        <div className="text-center my-12">
            <h3 className="text-4xl font-bold uppercase">Choose a web hosting plan</h3>
            <p className="text-base p-4">Pick a web hosting plan and get a free domain name for your website.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plansData.map(plan => (
                <Plan key={plan.id} plan={plan} />
            ))}
        </div>
    </div>
  );
};

export default Plans;
