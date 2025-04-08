const Button = ({ children, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 font-semibold text-white bg-black rounded-full hover:bg-opacity-80 hover:cursor-pointer focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};
export default Button;
