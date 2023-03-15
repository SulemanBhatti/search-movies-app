import React from 'react';

type MovieCardProps = {
  className?: string;
  imageSrc?: string;
  title?: string;
  description?: string;
  showDetails?: boolean;
};

export const MovieCard: React.FC<MovieCardProps> = ({
  className,
  imageSrc,
  title,
  description,
  showDetails,
}) => {
  return (
    <div className={className}>
      {/* animate card upon hovering */}
      <img className="w-full cursor-pointer " src={imageSrc} alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className={`font-bold text-xl mb-2 ${!showDetails && 'truncate ...'}`}>{title}</div>
        <p className={`text-black text-base ${!showDetails && 'truncate ...'}`}>{description}</p>
      </div>
    </div>
  );
};
