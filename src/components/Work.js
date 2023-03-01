import "./Work.css";

const Work = () => {
    return (
        <div className="pad">
            <h2>
                <i className="fa-solid fa-person-digging"></i>Employment History
            </h2>
            <hr className="line" />
            <h4 className="company">
                Warehouse Operative &#8722; GXO Logistics Ilkeston (2018 &#8722;
                2022)
            </h4>{" "}
            <ul className="duties">
                Duties
                <li className="work">
                    Picking customer orders, using Red Praire based HHT, and
                    Reach Truck
                </li>
                <li className="work">Stock controlling</li>
                <li className="work">Inspecting incoming goods</li>
                <li className="work">
                    Complete tasks between allotted timeframes
                </li>
                <li className="work">Carrying out health and safety checks</li>
            </ul>
            <h4 className="company">
                Warehouse Operative &#8722; Marks and Spencer Distribution
                Center Castle Donington (2015 &#8722; 2018)
            </h4>{" "}
            <ul className="duties">
                Duties
                <li className="work">
                    Picking customer orders, using Red Praire based HHT, LLOP
                    and Reach Truck
                </li>
                <li className="work">
                    Ensuring the accuracy and quality of all goods are first
                    class
                </li>
                <li className="work">
                    Replenishing stock into locations, and putting away stock on
                    shelfs{" "}
                </li>
                <li className="work">
                    Occasionally picking orders from Manual Warehouse Hanging
                </li>
                <li className="work">
                    Making sure all stock is labelled (if needed) and stored
                    correctly
                </li>
            </ul>
            <h4 className="company">
                Packaging Materials Warehouse Team Coordinator &#8722; Gedeon
                Richter, Budapest (2011 &#8722; 2015)
            </h4>{" "}
            <ul className="duties">
                Duties
                <li className="work">
                    Reporting to and supporting senior staff members
                </li>
                <li className="work">
                    Receiving stock and in accounting (SAP)
                </li>
                <li className="work">
                    Preparing orders for the Production Department, using
                    Forklift Truck and Reach Truck
                </li>
                <li className="work">Labelling stock</li>
                <li className="work">Stock controlling</li>
            </ul>
            <h4 className="company">
                Warehouse Operative &#8722; Kaufland, store warehouse (2008
                &#8722; 2011)
            </h4>{" "}
            <ul className="duties">
                Duties
                <li className="work">
                    Reporting to and supporting senior staff members
                </li>
                <li className="work">
                    Receiving stock and in accounting (SAP)
                </li>
                <li className="work">
                    Loading and unloading lorries, using Forklift Truck and
                    Reach Truck
                </li>
                <li className="work">Inspecting incoming goods</li>
                <li className="work">Stock controlling</li>
            </ul>
        </div>
    );
};

export default Work;
