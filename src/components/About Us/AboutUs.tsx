
import { FaQuoteLeft } from 'react-icons/fa'; // Example: Using Font Awesome for icons (install as needed)
import mission from '../../assets/images/mission.jpg'
import history from '../../assets/images/history.jpg'
import vision from '../../assets/images/vision.jpg'

const teamMembers = [
  {
    name: 'Alice Johnson',
    role: 'CEO',
    bio: 'Alice has over 15 years of experience in the fitness industry. She is passionate about helping people achieve their health and fitness goals.',
    image: 'https://randomuser.me/api/portraits/women/1.jpg', // Example: Replace with actual images
  },
  {
    name: 'Bob Smith',
    role: 'CTO',
    bio: 'Bob is a tech enthusiast with a strong background in software development. He leads our tech team in building a seamless shopping experience.',
    image: 'https://randomuser.me/api/portraits/men/2.jpg', // Example: Replace with actual images
  },
  {
    name: 'Carol Davis',
    role: 'CMO',
    bio: 'Carol has a knack for marketing and has been instrumental in growing our brand presence. She loves connecting with our customers.',
    image: 'https://randomuser.me/api/portraits/women/3.jpg', // Example: Replace with actual images
  },
];

const testimonials = [
  {
    id: 1,
    text: 'Fantastic service and top-notch fitness equipment. I highly recommend this store to all fitness enthusiasts!',
    author: 'John Doe',
  },
  {
    id: 2,
    text: 'Great customer support and fast delivery. The products are of excellent quality.',
    author: 'Jane Smith',
  },
];

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <section className="my-8">
          <div className="bg-gray-100">
            {/* History Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    {/* <h2 className="text-3xl font-bold mb-4">Our History</h2>
                    <p className="text-lg leading-relaxed">
                      Fitness Factory started with a simple yet powerful idea:
                      to provide high-quality fitness equipment that empowers
                      individuals to achieve their fitness goals. Established in
                      [Year of Establishment], we have grown into a trusted name
                      in the fitness industry, serving fitness enthusiasts of
                      all levels.
                    </p> */}
                    <img
                      src={history}
                      alt="History"
                      className="rounded-lg shadow-lg mx-auto md:ml-auto"
                    />
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our History</h2>
                    <p className="text-lg leading-relaxed">
                      Fitness Factory started with a simple yet powerful idea:
                      to provide high-quality fitness equipment that empowers
                      individuals to achieve their fitness goals. Established in
                      [Year of Establishment], we have grown into a trusted name
                      in the fitness industry, serving fitness enthusiasts of
                      all levels.
                    </p>
                    {/* <img
                      src={history}
                      alt="History"
                      className="rounded-lg shadow-lg mx-auto md:ml-auto"
                    /> */}
                  </div>
                </div>
              </div>
            </section>

            {/* Mission Section */}
            <section className="py-16 bg-gray-800 text-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                    <p className="text-lg leading-relaxed">
                      Our mission is to inspire and motivate people to lead
                      healthier lives by offering innovative and durable fitness
                      solutions. We believe in making fitness accessible to
                      everyone, from beginners to professional athletes, through
                      our wide range of products and expert guidance.
                    </p>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      src={mission}
                      alt="Mission"
                      className="rounded-lg shadow-lg mx-auto md:ml-auto"
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* Vision Section */}
            <section className="py-16 bg-white">
              <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
                  <div className="w-full md:w-1/2 mb-8 md:mb-0">
                    <img
                      src={vision}
                      alt="Vision"
                      className="rounded-lg shadow-lg mx-auto md:ml-auto"
                    />
                    {/* <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed">
                      At Fitness Factory, we envision a world where fitness is
                      not just a routine, but a lifestyle. We continuously
                      strive to innovate and improve, ensuring our customers
                      receive the best possible fitness experience with every
                      interaction.
                    </p> */}
                  </div>
                  <div className="w-full md:w-1/2">
                    <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
                    <p className="text-lg leading-relaxed">
                      At Fitness Factory, we envision a world where fitness is
                      not just a routine, but a lifestyle. We continuously
                      strive to innovate and improve, ensuring our customers
                      receive the best possible fitness experience with every
                      interaction.
                    </p>
                    {/* <img
                      src={vision}
                      alt="Vision"
                      className="rounded-lg shadow-lg mx-auto md:ml-auto"
                    /> */}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="rounded-full h-24 w-24 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-center mb-2">
                  {member.name}
                </h3>
                <p className="text-gray-700 text-center">{member.role}</p>
                <p className="text-gray-600 text-center mt-2">{member.bio}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-6">
            Customer Testimonials
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <p className="text-lg text-gray-700 italic leading-relaxed">
                  <FaQuoteLeft className="text-2xl text-gray-400 mr-2" />
                  {testimonial.text}
                </p>
                <p className="text-gray-600 text-right mt-4">{`- ${testimonial.author}`}</p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
          <div className=" max-w-[900px] mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between">
            <div className="max-w-lg  md:mr-8 mb-4 md:mb-0">
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-left">
                Have questions or feedback? Feel free to reach out to us.
              </p>
            </div>
            <div className="max-w-lg">
              <p className="text-lg text-gray-700 leading-relaxed text-center md:text-right">
                Email: contact@fitnessequip.com <br />
                Phone: (123) 456-7890 <br />
                Address: 123 Fitness St, Workout City, XY 12345
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
