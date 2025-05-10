import ProjectItem, {IProject} from "./project-item"

const projects: IProject[] = [
  {
    title: "E-commerce",
    description: "An e-commerce site built with Laravel, Intertia, and React, with a modern, responsive UI.",
    images: [{
      url: "/ecommerce.png",
      alt: "E-commerce"
    }]
  },
  {
    title: "Client manager",
    description: "A system to track customers, orders and invoices",
    images: [{
      url: "/client-manager.png",
      alt: "Client manager"
    }]

  },
  {
    title: "tasks manager",
    description: "An app to organize and prioritize tasks",
    images: [{
      url: "/tasks.png",
      alt: "tasks manager"
    }]
  }
]

const Projects = () => {
  
  return (
    <div className="w-full max-w-7xl mx-auto border-b-2 border-black my-16 px-8 pb-16">
      <h1 
        className="text-3xl font-semibold py-11"
      >
        Latest projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          projects.map((project, index) => (
            <ProjectItem key={index} project={project} />
          ))
        }
      </div>
    </div>
  )
}

export default Projects
