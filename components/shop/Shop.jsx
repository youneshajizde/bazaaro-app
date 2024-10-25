import React, { useEffect, useState } from "react";
import SpecialOffers from "./SpecialOffers";
import Clothings from "./Clothings";
import ShopLabel from "./ShopLabel";
import RandomProducts from "./RandomProducts";
import { supabase } from "@/lib/supabaseClient";
import { MutatingDots } from "react-loader-spinner";
function Shop() {
  const [specialOffers, setSpecialOffers] = useState();
  const [shoesOffers, setShoesOffers] = useState();
  const [randomProducts, setRandomProducts] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const specialProducts = async () => {
    try {
      const { data: specialOffersData, error: specialError } = await supabase
        .from("products")
        .select("*")
        .eq("special", true);
      const { data: shoesData, error: shoesError } = await supabase
        .from("products")
        .select("*")
        .eq("tag", "shoes");

      const { data: woodenData, error: woodenError } = await supabase
        .from("products")
        .select("*")
        .eq("tag", "wooden");

      if (specialError || woodenError || shoesError) {
        console.log(specialError || woodenError || shoesError);
      } else {
        console.log("special Offers : ", specialOffersData);
        const randomShoe =
        shoesData[Math.floor(Math.random() * shoesData.length)];
        console.log("Random shoe:", randomShoe);
        console.log("wooden", woodenData);
        setSpecialOffers(specialOffersData);
        setShoesOffers(randomShoe);
        setRandomProducts(woodenData);
      }
    } catch (error) {
      console.log(error);
      setError("failed to fetch the data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    specialProducts();
  }, []);

  if (loading)
    return (
      <MutatingDots
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        secondaryColor="#4fa94d"
        radius="12.5"
        ariaLabel="mutating-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    );

  return (
    <section>
      <ShopLabel />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto gap-10 mt-8">
        <SpecialOffers data={specialOffers} />
        <Clothings data={shoesOffers} />
        <RandomProducts />
      </div>
    </section>
  );
}

export default Shop;
