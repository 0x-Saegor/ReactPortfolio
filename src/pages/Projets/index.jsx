import CarteProjet from "../../components/CarteProjet";
import styled from "styled-components";

const projets = [
  {
    title: "Mon projet 1",
    label: "Ceci est mon premier projet",
    image: null,
  },
  {
    title: "Mon projet 2",
    label: "Ceci est mon deuxième projet",
    image: null,
  },
  {
    title: "Mon projet 3",
    label: "Ceci est mon troisième projet",
    image: null,
  },
  {
    title: "Mon projet 4",
    label: "Ceci est mon quatrième projet",
    image: null,
  },
  {
    title: "Mon projet 5",
    label: "Ceci est mon cinquième projet",
    image: null,
  },
  {
    title: "Mon projet 6",
    label: "Ceci est mon sixième projet",
    image: null,
  },
];

const ProjectsWrapper = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    max-width: 60%;
    margin: 0 auto;

    margin-left: -10px;
    margin-right: -10px;
`;

const ProjectCardWrapper = styled.div`
    flex: 0 0 calc(33.333% - 10px);
    max-width: calc(33.333% - 10px);
    margin: 5px;
    box-sizing: border-box;
`;



function Projets() {
  return (
    <div>
      <div className="justify-center text-center">
        <h1 className="mb-2 text-4xl font-extrabold leading-none tracking-tight text-gray-900">Dolore labore magna id consectetur commodo enim do ipsum nisi ipsum reprehenderit ea nisi pariatur.</h1>
        <p>Officia ut consectetur qui dolor minim esse magna aliquip elit ullamco. Mollit minim laborum ad labore est dolore. Esse ut irure deserunt commodo mollit reprehenderit dolore et reprehenderit mollit ut cupidatat. Ut aute cupidatat sint tempor ea. Exercitation velit Lorem cupidatat ut sint occaecat proident aute amet nisi nostrud. Incididunt non est eiusmod officia consectetur proident ea deserunt cupidatat mollit nisi ut irure.</p>
      </div>
    <ProjectsWrapper>
      <CardsContainer>
        {projets.map((projet, index) => (
          <ProjectCardWrapper key={`${projet.title}-${index}`}>
            <CarteProjet
              label={projet.label}
              title={projet.title}
              picture={projet.image}
            />
          </ProjectCardWrapper>
        ))}
      </CardsContainer>
    </ProjectsWrapper>
    </div>
  );
}

export default Projets;
