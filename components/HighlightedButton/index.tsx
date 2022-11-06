import Image from "next/image";

interface HighlightedAreaProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const HighlightedArea = ({
  title,
  subtitle,
  className,
}: HighlightedAreaProps) => {
  return (
    <div className={`relative w-max group ${className}`}>
      <span
        className="absolute -inset-0.5 bg-gradient-to-r from-supa-green to-supa-white
        rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"
      ></span>
      <span className="absolute -inset-[1px] bg-gradient-to-r from-supa-green to-supa-white rounded-lg"></span>
      <button
        className="relative px-7 py-4 bg-supa-gray rounded-lg leading-none flex
        items-center divide-x divide-gray-600"
      >
        <span className="flex items-center space-x-5">
          <Image
            width="24"
            height="25"
            src="/icons/supabase-logo-icon.svg"
            alt="Supabase icon"
          />
          <span className="pr-6 text-gray-100">{title}</span>
        </span>
        <span
          className="pl-6 text-supa-green group-hover:text-gray-100
        transition duration-200"
        >
          {subtitle} &rarr;
        </span>
      </button>
    </div>
  );
};
