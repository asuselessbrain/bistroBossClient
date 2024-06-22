import ViewBtn from "../../shared/components/btn/ViewBtn";
import Map from "../../shared/components/mapCondition/Map";

const Pizza = () => {

    return (
        <div className="mb-24">
            <Map itemCategory="pizza" />
            <ViewBtn text="ORDER YOUR FAVOURITE FOOD" />
        </div>
    );
};

export default Pizza;