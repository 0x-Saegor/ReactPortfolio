import All_Top from '../../sections/All_Top'
import Text from '../../sections/About/Text'
import CTF from '../../sections/About/CTF'
import TimelineJob from '../../sections/About/TimelineJob'
import TimelineStudy from '../../sections/About/TimelineStudy'
import SEO from '../../components/SEO'

function About() {
    return (
        <div>
            <SEO
                title="À propos"
                description="Parcours d'Arthur Le Gall : alternance chez Alcatel-Lucent Enterprise, BUT Informatique à l'IUT de Vannes, résultats en CTF et sur Root-Me. Recherche d'une alternance en cybersécurité de 2027 à 2030."
                path="/about"
            />
            <All_Top page_name="À propos de moi">
                Mon parcours, mes expériences et mes résultats en compétition.
            </All_Top>

            <Text />

            <CTF />

            <TimelineJob />

            <TimelineStudy />
        </div>
    )
}

export default About
