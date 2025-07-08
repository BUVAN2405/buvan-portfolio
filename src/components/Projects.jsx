import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-black bg-opacity-80">
      <h2 className="text-4xl font-bold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">DevTinder-UI + DEVTINDER</h3>
          <p className="my-2">A full-stack developer matching app with swipe-based UI.</p>
          <a href="https://github.com/BUVAN2405/devTinder-ui" className="text-blue-600 hover:underline" target="_blank">Repo</a>
        </div>

        <div className="bg-white text-black p-6 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold">Netflix GPT</h3>
          <p className="my-2">AI-powered movie recommendation system with GPT integration.</p>
          <a href="https://github.com/BUVAN2405/netflix-gpt" className="text-blue-600 hover:underline" target="_blank">Repo</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
