type InputProps = {
    value: string;
    onChange: (value: string) => void;
    placeholder?: string;
  };
  
  export default function Input({ value, onChange, placeholder }: InputProps) {
    return (
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full rounded border px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-black"
      />
    );
  }
  