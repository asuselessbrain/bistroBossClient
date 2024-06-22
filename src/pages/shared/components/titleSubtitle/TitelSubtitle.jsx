
const TitelSubtitle = ({title, subTitle}) => {
    return (
        <div className="text-center mb-[40px] mt-20">
            <p className="text-[#D99904] text-xl">---{subTitle}---</p>
            <h2 className="text-[#151515] uppercase text-5xl border-t-4 max-w-[500px] mx-auto py-[24px] mt-[16px] border-b-4">{title}</h2>
        </div>
    );
};

export default TitelSubtitle;