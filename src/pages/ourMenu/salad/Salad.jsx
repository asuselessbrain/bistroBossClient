import ViewBtn from "../../shared/components/btn/ViewBtn";
import Map from "../../shared/components/mapCondition/Map";

const Salad = () => {
    return (
        <div className="mb-24">
            <Map itemCategory="salad" />
            <ViewBtn text="ORDER YOUR FAVOURITE FOOD" />
        </div>
    );
};

export default Salad;