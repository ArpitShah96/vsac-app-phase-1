import React from "react";
import PropTypes from "prop-types";

const ComponentReader = ({
  heading,
  paragraphs = [],
  image,
  imagePosition = "left",
  imageHeight = "h-48 md:h-64",
  imageWidth = "w-full",
  padding = "p-4 sm:p-6",
  headingSize = "text-xl sm:text-2xl",
  imageRounded = "rounded-xl",
  border = "border",
  borderColor = "border-gray-200 dark:border-gray-700",
  shadow = "shadow-md hover:shadow-lg",
  bgColor = "bg-white dark:bg-gray-800",
  textColor = "text-gray-800 dark:text-gray-100",
  headingColor = "text-indigo-600 dark:text-indigo-400",
  className = "",
  imageClassName = "",
  paragraphClassName = "mb-4 leading-relaxed",
  contentColumnClasses = "flex-1",
  imageColumnClasses = "flex-1",
}) => {
  return (
    <div
      className={`${bgColor} ${textColor} ${border} ${borderColor} ${shadow} ${padding} ${className} rounded-xl transition-all duration-300 ease-in-out`}
    >
      <div
        className={`flex flex-col ${
          imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
        } gap-6 md:gap-8 items-center`}
      >
        {/* Image column */}
        {image && (
          <div
            className={`${imageColumnClasses} ${
              imagePosition === "left" ? "md:pr-4" : "md:pl-4"
            } flex items-stretch justify-center`}
          >
            <img
              src={image}
              alt={heading || "Component image"}
              className={`${imageWidth} ${imageHeight} ${imageRounded} object-cover ${imageClassName}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        )}

        {/* Content column */}
        <div className={`${contentColumnClasses}`}>
          {heading && (
            <h2
              className={`${headingSize} font-bold mb-3 sm:mb-4 ${headingColor}`}
            >
              {heading}
            </h2>
          )}

          <div className="space-y-3 sm:space-y-4">
            {paragraphs.map((paragraph, index) => (
              <p key={index} className={paragraphClassName}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

ComponentReader.propTypes = {
  heading: PropTypes.string,
  paragraphs: PropTypes.arrayOf(PropTypes.string),
  image: PropTypes.string,
  imagePosition: PropTypes.oneOf(["left", "right"]),
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  padding: PropTypes.string,
  headingSize: PropTypes.string,
  imageRounded: PropTypes.string,
  border: PropTypes.string,
  borderColor: PropTypes.string,
  shadow: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  headingColor: PropTypes.string,
  className: PropTypes.string,
  imageClassName: PropTypes.string,
  paragraphClassName: PropTypes.string,
  contentColumnClasses: PropTypes.string,
  imageColumnClasses: PropTypes.string,
};

export default ComponentReader;
