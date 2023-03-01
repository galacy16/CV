import "./About.css";
import profile from "../images/profile.jpg";

const About = () => {
    return (
        <div className="container">
            <div className="details-box">
                <h1 className="name">Laszlo Gall</h1>
                <img
                    src={profile}
                    alt="Profile_picture"
                    className="profile"
                ></img>
                <div className="details">
                    <li>
                        <i className="fa-solid fa-location-dot fa-lg"></i>
                        34A Main Street, Long Eaton, NG10 1GR
                    </li>
                    <li>
                        <i className="fa-solid fa-mobile fa-lg"></i>
                        07422518154
                    </li>
                    <li>
                        <i className="fa-solid fa-envelope fa-lg"></i>

                        <a className="email" href="mailto:galacy16@yahoo.com">
                            galacy16@yahoo.com
                        </a>
                    </li>
                    <li>
                        <i className="fa-solid fa-language fa-lg"></i>
                        Hungarian: Native
                    </li>

                    <li>
                        <i className="fa-solid fa-language fa-lg"></i>
                        Romanian: Native
                    </li>
                    <li>
                        <i className="fa-solid fa-language fa-lg"></i>
                        English: Fluent proeficiency
                    </li>
                    <li className="link">
                        <a
                            href="https://www.linkedin.com/in/laszlo-gall-259b34225/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-linkedin fa-2xl"></i>
                        </a>
                    </li>
                    <li className="link">
                        <a
                            href="https://github.com/galacy16"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                    </li>
                </div>
            </div>
            <p className="description pad">
                Enthusiastic Web Developer Student eager to contribute to team
                success through hard work, attention to detail and excellent
                organisational skills. Understanding of Web development and
                proﬁcient in technical languages of JavaScript, HTML, CSS, or
                framesworks like Bootstrap and environments like Node.JS.
                Motivated to learn, grow and excel in the tech industry.
            </p>
        </div>
    );
};

export default About;
