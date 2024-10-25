import React, { useEffect, useState } from "react";

function Clothings({ data }) {
  // const [selectedItem, setSelectedItem] = useState(null);

  // useEffect(() => {
  //   if (data && data.length > 0) {
  //     const randomIndex = Math.floor(Math.random() * data.length);
  //     setSelectedItem(data[randomIndex]);
  //   }
  // }, [data]);

  // if (!selectedItem) return null;

  // const videoUrl = selectedItem.images?.find(
  //   (media) => media.type === "video"
  // )?.url;

  return (
    <div className="relative rounded-2xl w-full h-full overflow-hidden">
      <div className="w-full h-full relative">
        <video
          src={data?.images?.[1]?.url} // Assuming there's a `videoUrl` property
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover rounded-2xl"
        />
        {/* Shadow overlay */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>

        {/* Text content */}
        <div className="absolute bottom-4 left-4 text-white">
          <div className="mt-3 flex flex-col space-y-4">
            <span className="w-20 flex justify-center border-white hover:bg-black hover:text-white hover:border-black text-xs rounded-full border-[1px] px-2 py-1 font-medium">
              sdfs
            </span>
            <h1 className="font-medium">zcsdfs</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clothings;
