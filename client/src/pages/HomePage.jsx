import React from "react";

function HomePage() {
  return (
    <div className="text-3xl text-black bg-zinc-400 my-3 py-40 px-10 rounded-lg items-end">
      <div className="font-semibold">
        <div className="pb-16">Psicólogo Alex de la Fuente</div>
        <div className="justify-end font-light p-44 py-5 text-4xl ">
          {" "}
          "Mi experiencia se cimenta en el nicho de la atención primaria de la
          salud y a su vez en atenciones particulares, en ambos espacios mi
          intención es diseñar procesos con objetivos claros, realistas y en lo
          posible breves."
        </div>
      </div>
      <div className="absolute right-28 top-24 w-52">
        <a href="https://www.linkedin.com/in/alex-de-la-fuente-l%C3%B3pez-392a05232/?originalSubdomain=cl">
          <img className="rounded-full" src="/alex.jpg"></img>
        </a>
      </div>
    </div>
  );
}

export default HomePage;
