const Hero = ({
  className,
  children,
  backgroundImage,
}) => {
  return (
    <div
      className={`flex flex-col ${className} justify-center h-screen bg-cover bg-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};
export default Hero;
