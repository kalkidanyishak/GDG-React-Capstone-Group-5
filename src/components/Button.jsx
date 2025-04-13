const Button = ({ type = "button", children, onClick, className = "" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`text-[10px] md:text-sm px-2 md:px-4 py-3 font-semibold text-white bg-black rounded-full duration-200 hover:bg-black/80 hover:cursor-pointer focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
