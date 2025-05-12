import default_card from "../../assets/projects-1.jpg";

function CardProject({ index, projet }) {
  return (
    <a key={index} className="relative group" href={projet.url} target="_blank">
      <img
        src={projet.image || default_card}
        alt="Image"
        className="w-full rounded"
      />
      <p
        className="absolute bottom-18 left-5 opacity-100 transition-opacity text-xl md:text-2xl text-black font-bold p-1 rounded-xl uppercase"
      >
        {projet.title}
      </p>
      <h1 className="absolute top-65 left-5 opacity-100 transition-opacity text-sm md:text-l text-black p-1 rounded-xl text-gray-600">
        {projet.label}
      </h1>
    </a>
  );
}

export default CardProject;
