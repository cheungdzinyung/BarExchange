// Importing modules from library
import * as React from "react";


// import tempImg from "../../assets/images/categories/squarebeer.jpg";

// Importing temporary data
import { singleCategoryMenuItems, displayMenuItemListTest } from "src/fakedata";

// Importing utility function and classes
// import { LineChart, XAxis, YAxis, CartesianGrid, Line } from "recharts";
// import { percentageChange } from '../../../util/utility';
import { IMenuCategoryWithFlux } from "src/modules";

import { DisplayFlexItemLine } from "src/components/ui/display/displayfluxitemline";
import { DisplayMain } from "src/components/ui/display/displaymain";

// redux
import { connect } from "react-redux";
import { IRootState } from "../../../redux/store";
import { getEntireMenu } from "../../../redux/desktop/actions/actions_display";


interface IDisplayProps {
    entireMenu: IMenuCategoryWithFlux[],
    menuReady: boolean,
    categories: string[],
    getEntireMenu: () => void,
}

interface IDisplayState {
    singleCategory: IMenuCategoryWithFlux
}

const mapStateToProps = (state: IRootState) => {
    return {
        entireMenu: state.staff.display.entireMenu,
        menuReady: state.staff.display.menuReady,
        categories: state.staff.display.categories,
    };
};

const mapDispatchToProps = (dispatch: any) => {
    return {
        getEntireMenu: () => {
            dispatch(getEntireMenu());
        },
    };
};

class PureDisplay extends React.Component<IDisplayProps, IDisplayState> {
    constructor(props: IDisplayProps) {
        super(props);

        this.state = {
            singleCategory: singleCategoryMenuItems
        }
    }

    public componentDidMount () {
        if (!this.props.menuReady) {
            this.props.getEntireMenu();
        }
    }

    public render() {

        const data = [
            { time: "9", purchasePrice: 13 },
            { time: "10", purchasePrice: 26 },
            { time: "11", purchasePrice: 19 },
            { time: "12", purchasePrice: 28 },
            { time: "13", purchasePrice: 33 },
            { time: "14", purchasePrice: 29 },
            { time: "15", purchasePrice: 18 },
            { time: "16", purchasePrice: 36 }
        ];
        return (
            <div className="display-container">
                <div className="display-data-container">
                    <DisplayMain singleCategory={"Beer"} pirceChange={320} data={data} />
                    <div className="display-data-sub-container">12</div>
                    <div className="display-data-info-container">12</div>
                    <div className="display-data-prices-container">
                        {displayMenuItemListTest.map((itemLine, index) => (
                            <DisplayFlexItemLine {...itemLine} />
                        ))}
                    </div>
                </div>
                <div className="rss-feed">
                    <span className="feed-text">This round of discount is brought to you by dealingroom!</span>
                </div>
            </div>
        );
    }

}

const Display = connect(mapStateToProps, mapDispatchToProps)(PureDisplay);

export default Display;