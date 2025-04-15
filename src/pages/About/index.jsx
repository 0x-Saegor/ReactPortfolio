/*
TODO

Présentation, parcours avec école et stages ?

Ce qui me motive

Un fun fact ??

CTA -> projets ou collaborer via Contact


*/ 

import All_Top from '../../sections/All_Top'
import Text from '../../sections/About/Text'
import TimelineJob from '../../sections/About/TimelineJob'
import TimelineStudy from '../../sections/About/TimelineStudy'

function About(){
    return (
        <div>
            <All_Top page_name="À propos de moi"/>

            <Text />

            <TimelineJob />

            <TimelineStudy />
        </div>
    )
}

export default About