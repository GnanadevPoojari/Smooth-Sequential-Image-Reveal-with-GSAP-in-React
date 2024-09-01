import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ImageGrid.css";
import gsap from "gsap";

const images = [
  "/assets/images1.webp",
  "/assets/images2.webp",
  "/assets/images3.webp",
  "/assets/images4.webp",
  "/assets/images5.webp",
  "/assets/images6.webp",
  "/assets/images7.webp",
  "/assets/images8.webp",
  "/assets/images9.webp",
  "/assets/images10.webp",
  "/assets/images11.webp",
  "/assets/images12.webp",
  "/assets/images13.webp",
  "/assets/images14.webp",
  "/assets/images15.webp",
  "/assets/images16.webp",
  "/assets/images17.webp",
  "/assets/images18.webp",
  "/assets/images19.webp",
  "/assets/images20.webp",
  "/assets/images21.webp",
  "/assets/images22.webp",
  "/assets/images24.webp",
  "/assets/images25.webp",
  "/assets/images26.webp",
];

const ImageGrid = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    let t1 = gsap.timeline({
      delay: 0,
      onComplete: () => {
        // Show content after the animations are complete
        setShowContent(true);
      },
    });

    // Animating the columns with staggered items
    [
      ".c-1 .item",
      ".c-2 .item",
      ".c-3 .item",
      ".c-4 .item",
      ".c-5 .item",
    ].forEach((selector, index) => {
      t1.to(
        selector,
        {
          top: 0,
          opacity: 1,
          stagger: 0.25,
          duration: 1.5,
          ease: "power2.in",
        },
        index === 0 ? "0" : `-=${1.5 - index * 0.25}`
      );
    });

    return () => {
      t1.kill(); // Clean up the timeline when the component unmounts
    };
  }, []);

  return (
    <div className="content">
      {/* More button placed at the top right corner */}
      {showContent && (
        <div className="more-button-wrapper">
          <Link to="/Page2" className="more-button">
            More
          </Link>
        </div>
      )}

      {!showContent && (
        <div className="container">
          {Array(5)
            .fill()
            .map((_, colIndex) => (
              <div className={`col c-${colIndex + 1}`} key={colIndex}>
                {images
                  .slice(colIndex * 5, colIndex * 5 + 5)
                  .map((src, imgIndex) => (
                    <div className="item" key={imgIndex}>
                      <img
                        src={src}
                        alt={`Image ${colIndex * 5 + imgIndex + 1}`}
                      />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}

      {showContent && (
        <div className="container">
          {Array(5)
            .fill()
            .map((_, colIndex) => (
              <div className="each-col" key={colIndex}>
                {images
                  .slice(colIndex * 5, colIndex * 5 + 5)
                  .map((src, imgIndex) => (
                    <div className="each-item" key={imgIndex}>
                      <img
                        src={src}
                        alt={`Image ${colIndex * 5 + imgIndex + 1}`}
                      />
                    </div>
                  ))}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default ImageGrid;
