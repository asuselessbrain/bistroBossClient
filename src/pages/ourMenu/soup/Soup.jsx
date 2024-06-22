import useMenu from "../../../hooks/useMenu";
import ViewBtn from "../../shared/components/btn/ViewBtn";
import Map from "../../shared/components/mapCondition/Map";

const Soup = () => {
    return (
        <div className="mb-24">
            <Map itemCategory="soup" />
            <ViewBtn text="ORDER YOUR FAVOURITE FOOD" />
        </div>
    );
};

export default Soup;