type ButtonProps = {
    label: string;
    onClick?: () => void;
  };
  
  export default function Button({ label, onClick }: ButtonProps) {
    return (
      <button
        onClick={onClick}
        className="rounded bg-black px-4 py-2 text-sm text-white hover:bg-gray-800 transition"
      >
        {label}
      </button>
    );
  }
  