const Banner = ({img, title, subTitle}) => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage:
          `url(${img})`,
      }}
    >
      <div className=""></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-[1096px] text-white bg-[#15151599] px-[260px] py-[80px]">
          <h1 className="mb-5 text-5xl font-bold">{title}</h1>
          <p className="mb-5">
            {subTitle}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
