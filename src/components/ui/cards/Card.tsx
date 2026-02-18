"use client";

function Card() {
  return (
    <div className="flex flex-col justify-between item-start w-[176.5px] h-[166px] p-xl rounded-md bg-neutral-700 text-neutral-100">
      <svg
        className="text-pink-300"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.80579 6.20588C5.68031 4.33136 8.7195 4.33136 10.594 6.20588L11.9999 7.61176L13.4058 6.20588C15.2803 4.33136 18.3195 4.33136 20.194 6.20588C22.0685 8.08039 22.0685 11.1196 20.194 12.9941L11.9999 21.1882L3.80579 12.9941C1.93127 11.1196 1.93127 8.08039 3.80579 6.20588Z"
          fill="#E0BEF6"
        />
      </svg>
      <div>
        <p className="text-body-lg-bold">Title</p>
        <p className="text-body-md">Lorem ipsum la la la</p>
      </div>
    </div>
  );
}
export default Card;
