import useMenu from "../../../hooks/useMenu";
import ViewBtn from "../../shared/components/btn/ViewBtn";
import Map from "../../shared/components/mapCondition/Map";

const Desserts = () => {

    return (
        <div className="mb-24">
            <Map itemCategory="dessert" />
            <ViewBtn text="ORDER YOUR FAVOURITE FOOD" />
        </div>
    );
};

export default Desserts;