interface ChevronDownProps {
  open: boolean;
}

export default function ChevronDown({ open }: ChevronDownProps) {
  return (
    <svg
      className={`h-4 w-4 text-[#F4F4F4] transition-transform duration-300 ${
        open ? "rotate-180" : "rotate-0"
      }`}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M6 9L12 15L18 9"
        stroke="currentColor"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}