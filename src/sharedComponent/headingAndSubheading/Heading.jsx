

const Heading = ({title, subtitle}) => {

    return (
        <div className="max-w-[430px] mx-auto text-center mt-[80px]">
            <p>{subtitle}</p>
            <h2 className="text-[#151515] text-5xl border-t-2 border-b-2 p-[20px] mt-[16px] mb-[46px] border-[#E8E8E8]">{title}</h2>
        </div>
    );
};

export default Heading;