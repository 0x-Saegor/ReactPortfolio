import profile from "../../assets/NoBG.png";

function Home() {

  return (
    <div>
      <div className="flex container mx-auto my-5 justify-center">
        <div className="relative w-50">
          <img
            src={profile}
            alt="Profile picture"
            className="object-cover rounded-full relative z-10 bg-[#5775b8]"
          />
        </div>
        <div className="ml-5">
          <h1 className="text-4xl">Je suis Arthur Le Gall</h1>
          <p className="mt-2">
            Et ad nostrud id nostrud labore consectetur nisi qui dolor aliquip.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
