import "./Skills.css";

const Skills = () => {
    return (
        <div className="pad">
            <h2>
                <i className="fa-sharp fa-solid fa-code"></i>
                Skills
            </h2>
            <hr className="line" />
            <div className="skills">
                <i className="fa-brands fa-html5"> HTML5</i>
                <i className="fa-brands fa-css3-alt"> CSS</i>
                <i className="fa-brands fa-js"> JavaScript</i>
                <i className="fa-brands fa-react"> React</i>
                <i className="fa-brands fa-bootstrap"> Bootstrap</i>
                <i className="fa-brands fa-github"> GitHub</i>
                <i className="fa-brands fa-node"> Node.JS</i>
            </div>
        </div>
    );
};

export default Skills;
