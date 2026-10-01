export const Buttons = {
  solid: ({
    children,
    color = "bg-blue-400",
    hover = "bg-blue-600",
    onClick,
  }: {
    children: React.ReactNode;
    color?: string;
    hover?: string;
    onClick?: () => void;
  }) => {
    return (
      <button
        className={`cursor-pointer px-3 py-2 ${color} text-white rounded-lg hover:${hover}`}
        onClick={onClick}>
        {children}
      </button>
    );
  },
  outline: ({
    children,
    color = "border-blue-400",
    hover = "bg-blue-600",
    textColor = "text-blue-400",
    onClick,
  }: {
    children: React.ReactNode;
    color?: string;
    hover?: string;
    textColor?: string;
    onClick?: () => void;
  }) => {
    return (
      <button
        className={`cursor-pointer px-3 py-2 bg-transparent border ${color} ${textColor} rounded-lg hover:${hover}`}
        onClick={onClick}>
        {children}
      </button>
    );
  },
};