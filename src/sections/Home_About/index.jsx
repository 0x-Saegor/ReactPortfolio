import { Link } from "react-router-dom";
import SkillIcons from "../../components/SkillIcon";
import colors from "../../utils/style/colors";

function Home_About() {
return (
    <div className="h-150 flex items-center">
        <div className="container mx-auto p-4 flex justify-between items-center">
            <div className="w-[30%] ml-50">
                <h1 className="text-3xl font-bold">A propos de moi</h1>
                <p>
                    Je suis étudiant en BUT informatique à l'IUT de Vannes, j'aime coder
                    et découvrir de nouvelles choses. Je connais différents langages :
                    python, java, javascript et différentes technologies comme ReactJS.
                    Ce portfolio est temporaire, je suis en cours de création de mon
                    vrai portfolio en utilisant ReactJS.
                </p>
            </div>
            <div className="w-[60%] justify-center text-center">
                <h1 className="text-xl font-bold">
                    Quelques compétences que je maîtrise
                </h1>

                <SkillIcons />
                <Link
                    to="about"
                    className="mt-8 px-6 py-3 text-white rounded-lg shadow-lg transition"
                    style={{
                        backgroundColor: colors.button,
                        transition: "background-color 0.3s",
                    }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = colors.button_hover)}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = colors.button)}
                >
                    Me Contacter
                </Link>
            </div>
        </div>
    </div>
);
}

export default Home_About;
