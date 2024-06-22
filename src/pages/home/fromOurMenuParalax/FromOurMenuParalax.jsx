import image from "../../../assets/home/featured.jpg";
import TitelSubtitle from "../../shared/components/titleSubtitle/TitelSubtitle";
const FromOurMenuParalax = () => {
  return (
    <div
      className="hero h-[750px]"
      style={{
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div>
        <div className="text-center">
            <p className="text-[#D99904] text-xl">---Check it out---</p>
            <h2 className="text-white uppercase text-5xl border-t-4 max-w-[500px] mx-auto py-[24px] mt-[16px] mb-[40px] border-b-4">FROM OUR MENU</h2>
        </div>
        <div className="hero-content text-neutral-content gap-20">
          <div>
            <img className="max-w-[550px]" src={image} alt="" />
          </div>
          <div className="max-w-[604px]">
            <h4 className="text-[24px]">March 20, 2023</h4>
            <h1 className="mb-5 text-5xl font-bold">WHERE CAN I GET SOME?</h1>
            <p className="mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.
            </p>
            <button className="btn btn-outline text-[20px] font-bold uppercase text-white border-0 border-b-4">Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromOurMenuParalax;
