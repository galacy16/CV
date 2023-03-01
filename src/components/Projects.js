import "./Projects.css";

const Projects = () => {
    return (
        <div className="pad">
            <h2>
                <i className="fa-sharp fa-solid fa-diagram-project"></i>{" "}
                Projects
            </h2>
            <hr className="line" />
            <ul>
                <li className="project">Kimi Räikkönen fansite</li>
                <p className="more">
                    This is a simple website using HTML, CSS and Bootstrap,
                    which I made to test my knowledge in these languages.
                </p>
            </ul>
            <ul>
                <li className="project">AC Milan fansite</li>
                <p className="more">
                    This project was built with the intention of testing my
                    skills which I learned by myself.
                </p>
            </ul>
            <ul>
                <li className="project">Hangman App</li>
                <p className="more">
                    This project was built with React as the final Capstone
                    Project in my bootcamp. It is the classic Hangman game,
                    where the user has 6 incorrect guesses befor loosing the
                    game. In each case (win or lose), the player can replay the
                    same game, or start a new one. The player can restart, or
                    start a new game during an already started game.
                </p>
            </ul>
            <ul>
                <li className="project">Todo-App</li>
                <p className="more">
                    This project was built with React, and it is, like its name
                    is stating a todo app, where the user can add, edit, delete,
                    or mark todos as completed on its list.
                </p>
            </ul>
            <ul>
                <li className="project">Cypher</li>
                <p className="more">
                    This project was made as a task in the bootcamp. The cypher
                    is going to use the 15th letter after the letter you want to
                    use. For example, &#39;a&#39; will be &#39;p&#39;. Capital
                    and lower case letters stays the same. Spaces and
                    punctuation marks also.
                </p>
            </ul>
            <ul>
                <li className="project">Temperature converter</li>
                <p className="more">
                    This project was built as a task in the bootcamp. It is a
                    temperature converter, where the user can choose between 3
                    metric systems as an input and also as an output (Celsius,
                    Fahrenheit and Kelvin). The program is able to convert from
                    any of the three metrics to any of the three metrics.
                </p>
            </ul>
        </div>
    );
};

export default Projects;
