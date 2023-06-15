import Slider from "react-slick";

const SliderComp = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className=" !flex items-center bg-gray-100 px-4">
          <div>
            <div className=" text-6xl font-bold">
              En kaliteli ayakkabılar Burada
            </div>
            <div className=" text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis asperiores dignissimos totam nam, magni optio inventore
              quidem corrupti suscipit tenetur! Dolor pariatur nobis
              necessitatibus esse unde, soluta voluptas inventore fugiat!
            </div>
            <div className=" border rounded-full cursor-pointer text-3xl  w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              incele
            </div>
          </div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2f9e087d-1f0f-4b72-8576-b7b7b64e73ae/air-force-1-07-ayakkab%C4%B1s%C4%B1-SqKG2H.png" />
        </div>
        <div className=" !flex items-center bg-gray-100 px-4">
          <div>
            <div className=" text-6xl font-bold">
              En kaliteli ayakkabılar Burada
            </div>
            <div className=" text-2xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis asperiores dignissimos totam nam, magni optio inventore
              quidem corrupti suscipit tenetur! Dolor pariatur nobis
              necessitatibus esse unde, soluta voluptas inventore fugiat!
            </div>
            <div className=" border rounded-full cursor-pointer text-3xl  w-[200px] h-16 flex items-center justify-center bg-gray-200 hover:bg-gray-300">
              incele
            </div>
          </div>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f7f226b3-083d-4ac0-84d8-bb252514704e/air-force-1-07-ayakkab%C4%B1s%C4%B1-h0hLnB.png" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComp;
