import All_Top from '../../sections/All_Top'
import Text from '../../sections/About/Text'
import CTF from '../../sections/About/CTF'
import TimelineJob from '../../sections/About/TimelineJob'
import TimelineStudy from '../../sections/About/TimelineStudy'
import SEO from '../../components/SEO'
import { useLang } from '../../utils/i18n'

function About() {
    const { t } = useLang()

    return (
        <div>
            <SEO
                title={{ fr: "À propos", en: "About" }}
                description={{
                    fr: "Parcours d'Arthur Le Gall : alternance chez Alcatel-Lucent Enterprise, BUT Informatique à l'IUT de Vannes, résultats en CTF et sur Root-Me. Recherche d'une alternance en cybersécurité de 2027 à 2030.",
                    en: "Background of Arthur Le Gall: work-study at Alcatel-Lucent Enterprise, Computer Science degree at IUT de Vannes, CTF and Root-Me results. Looking for a cybersecurity work-study position from 2027 to 2030.",
                }}
                path="/about"
            />
            <All_Top page_name={t({ fr: "À propos de moi", en: "About me" })}>
                {t({
                    fr: "Mon parcours, mes expériences et mes résultats en compétition.",
                    en: "My background, my experience and my competition results.",
                })}
            </All_Top>

            <Text />

            <CTF />

            <TimelineJob />

            <TimelineStudy />
        </div>
    )
}

export default About
