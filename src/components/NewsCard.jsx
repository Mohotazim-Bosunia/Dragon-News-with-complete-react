// NewsCard.jsx

import React from "react";
import {
  FaEye,
  FaShareAlt,
  FaBookmark,
  FaStar,
} from "react-icons/fa";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    tags,
  } = news;

  return (
    <div className="card mt-5 bg-base-100 shadow-md border border-base-200">
      
      {/* Header */}
      <div className="flex items-center justify-between p-4 bg-base-200 rounded-t-xl">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-12 h-12 rounded-full object-cover"
          />

          <div>
            <h2 className="font-semibold text-base-content">
              {author.name}
            </h2>

            <p className="text-sm text-gray-500">
              {new Date(author.published_date).toDateString()}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 text-gray-500 text-lg">
          <FaBookmark className="cursor-pointer hover:text-primary" />
          <FaShareAlt className="cursor-pointer hover:text-primary" />
        </div>
      </div>

      {/* Body */}
      <div className="card-body">
        <h2 className="card-title text-xl leading-snug">
          {title}
        </h2>

        <img
          src={image_url}
          alt={title}
          className="rounded-xl h-64 object-cover"
        />

        <p className="text-gray-600">
          {details.length > 200
            ? details.slice(0, 200) + "..."
            : details}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="badge badge-outline badge-primary"
            >
              #{tag}
            </span>
          ))}
        </div>

        <button className="btn btn-primary btn-sm w-fit">
          Read More
        </button>
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between px-6 py-4 border-t">
        
        {/* Rating */}
        <div className="flex items-center gap-2 text-orange-400">
          {[...Array(rating.number)].map((_, index) => (
            <FaStar key={index} />
          ))}

          <span className="text-gray-700 font-medium ml-1">
            {rating.number}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;