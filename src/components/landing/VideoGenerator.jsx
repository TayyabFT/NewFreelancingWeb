import Image from "next/image";
import { AiOutlineLike, AiOutlineComment } from "react-icons/ai";
import card1 from "@/assets/images/card1.png";
import card2 from "@/assets/images/card2.png";
import card3 from "@/assets/images/card3.png";

const VideoGenerator = () => {
  const cards = [
    {
      id: 1,
      image: card1,
      likes: "4.8M",
      comments: "8.8K",
    },
    {
      id: 2,
      image: card2,
      likes: "4.8M",
      comments: "8.8K",
    },
    {
      id: 3,
      image: card3,
      likes: "4.8M",
      comments: "8.8K",
    },
  ];

  return (
    <div className="bg-white py-12 px-4">
      {/* Heading Section */}
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-blue-900">
          AI Script & Video Generator
        </h1>
        <p className="text-gray-600 mt-2">
          Generate winning hooks, scripts, and videos based on trends & insights
        </p>
      </div>

      {/* Cards Section */}
      <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative bg-white rounded-lg shadow-lg overflow-hidden"
          >
            {/* Image */}
            <Image
              src={card.image}
              alt={`Card ${card.id}`}
              layout="responsive"
              width={300}
              height={400}
              className="object-cover"
            />

            {/* Overlay with Likes and Comments */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white flex justify-between items-center text-sm">
              <div className="flex items-center space-x-2">
                <AiOutlineLike className="text-white" />
                <span>{card.likes} Likes</span>
              </div>
              <div className="flex items-center space-x-2">
                <AiOutlineComment className="text-white" />
                <span>{card.comments} comments</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Learn More Button */}
      <div className="mt-12 text-center">
        <button className="bg-blue-900 hover:bg-blue-700 text-white font-medium py-3 px-8 rounded-lg shadow-md transition">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default VideoGenerator;
