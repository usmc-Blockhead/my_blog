import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Trending = ({ blogs }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 1024, min: 600 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 600, min: 400 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 400, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <div>
        <div className="blog-heading text-start py-2 mb-4">Trending</div>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["tablet", "mobile"]}
      >
        {blogs?.map((item) => (
          <div className="item px-2" key={item.id}>
            <a href={`/detail/${item.id}`}>
              <div className="trending-img-position">
                <div className="trending-img-size">
                  <img
                    src={item.imgUrl}
                    alt={item.title}
                    className="trending-img-relative"
                  />
                </div>
                <div className="trending-img-absolute"></div>
                <div className="trending-img-absolute-1">
                  <span className="text-white">{item.title}</span>
                  <div className="trending-meta-info">
                    {item.author} - {item.timestamp.toDate().toDateString()}
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Trending;
