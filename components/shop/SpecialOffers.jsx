import Image from "next/image";
import Slider from "react-slick";

function SpecialOffers({ data }) {
  const settings = {
    fade: true,
    infinite: true,
    autoplay: true, // Ensure autoplay is enabled
    autoplaySpeed: 2500, // Controls the speed between slides
    speed: 2000, // Controls the duration of the fade animation
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    pauseOnHover: false, // Makes sure it doesn’t stop autoplay when hovered
    arrows: false,
  };

  const items = data?.map((product, index) => (
    <div
      key={index}
      className="bg-white w-full h-[390px] rounded-2xl relative p-2"
    >
      <Image
        src={product?.images?.[0]?.url}
        width={0}
        height={0}
        className="object-cover w-full h-[75%] rounded-2xl"
        unoptimized
      />
      <div className="mt-3 flex flex-col space-y-4">
        <span className="w-20 flex justify-center hover:bg-black hover:text-white text-xs rounded-full border-[1px] px-2 py-1 border-black font-medium">
          {product?.tag}
        </span>
        <h1 className="font-medium">{product?.title}</h1>
      </div>
    </div>
  ));
  return (
    <div className="h-full bg-gray-100 flex flex-col space-y-10 justify-end p-2 rounded-2xl">
      <h1 className="text-center font-medium text-xl">Special Offers</h1>
      <Slider {...settings}>{items}</Slider>
    </div>
  );
}

export default SpecialOffers;
