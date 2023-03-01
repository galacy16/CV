import "./Education.css";

const Education = () => {
    return (
        <div className="pad">
            <h2>
                <i className="fa-solid fa-school"></i> Education and
                Qualifications
            </h2>
            <hr className="line" />
            <h4 className="company">HyperionDev (currently enrolled)</h4>{" "}
            <p>Web Development Bootcamp</p>
            <h4 className="company">
                Dimitrie Cantemir University (1996 &#8722; 2001)
            </h4>{" "}
            <p>Bachelor in Law</p>
            <h4 className="company">
                Bolyai Farkas High School (1991 &#8722; 1995)
            </h4>{" "}
            <p>GCSE (including Maths and Science)</p>
            <h4 className="company">
                ISTQB Certified Tester – Foundation Level (2022)
            </h4>{" "}
            <h4 className="company">
                AITT Reach Truck operating course, Mentor FLT Training, Castle
                Donington (2015)
            </h4>{" "}
            <h4 className="company">
                Forklift Truck, Reach Truck, Ped Stacker operating course,
                Bucharest (2010)
            </h4>{" "}
        </div>
    );
};

export default Education;
