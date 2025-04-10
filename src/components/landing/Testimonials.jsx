import profile from "@/assets/images/profile.png";
import Image from "next/image";
const Testimonials = () => {
  const testimonials = [
    {
      text: "AffiliTok is truly the best affiliate automation tool after I tested different bots. I like the simple interface AffiliTok has and it is easy to set up and use. Most importantly, it drives results! Our sample requests and GMV have been skyrocketing since we started using AffiliTok.",
      name: "Axel S.",
      role: "Viral Food & Beverage Brand",
      image: profile, // Replace with actual image path
    },
    {
      text: "Switching to AffiliTok was one of the best decisions we made for our TTS marketing efforts. The setup was a breeze, and the performance metrics are incredibly detailed. We’ve experienced a noticeable boost in affiliate-driven traffic and sales. AffiliTok’s support team is also top-notch, always ready to help with any questions. Highly recommend!",
      name: "Eli C.",
      role: "Top Health & Supplement Brand",
      image: profile, // Replace with actual image path
    },
    {
      text: "It is a must-have tool for any TikTok Shop. Since adopting AffiliTok, our conversion rates have soared, and we’ve seen a significant increase in ROI. It’s a game-changer for any brand looking to streamline their affiliate operations on TikTok Shop.",
      name: "Daniela H.",
      role: "Awarding Winning Beauty Brand",
      image: profile, // Replace with actual image path
    },
  ];

  return (
    <section className="bg-white py-16 text-center">
      <div className="max-w-5xl mx-auto">
        <span className="bg-blue-500 text-white text-sm px-4 py-1 rounded-full">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold mt-4 text-gray-900">
          Hear from our happy customers
        </h2>

        {/* Testimonials Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-2xl shadow-md text-left"
            >
              <p className="text-3xl text-gray-700">“</p>
              <p className="text-gray-600">{testimonial.text}</p>
              <div className="mt-6 flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <h4 className="font-semibold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
