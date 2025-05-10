import HeadText from "../head-text"

const sections = [
  {
    name: 'Frontend',
    skills: [
      { name: 'html', },
      { name: 'css', },
      { name: 'tailwind', },
      { name: 'react', },
      { name: 'next', },
      { name: 'javascript', },
      { name: 'typescript', },
      { name: 'ionic-react', },
    ]
  }, {
    name: 'Backend',
    skills: [
      { name: 'node', },
      { name: 'laravel', },
      { name: 'php', },
      { name: 'typescript', },
    ]
  }, {
    name: 'Database',
    skills: [
      { name: 'mysql', },
      { name: 'postgres', },
    ]
  }, {
    name: 'Infrastructure & DevOps',
    skills: [
      { name: 'docker', },
      { name: 'AWS', },
      { name: 'kubernetes', },
      { name: 'ci/cd'},
      { name: "jenkins" },
    ]
  },
  {
    name: "Software Architecture",
    skills: [
      { name: 'clean architecture' },
      { name: 'hexagonal architecture' },
      { name: 'DDD' },
      { name: 'tdd' },
      { name: 'microservices' },
    ]
  },
  {
    name: "Methodologies",
    skills: [
      { name: 'kanban'},
    ]
  }, {
    name: 'others',
    skills: [
      { name: 'wordpress', }, 
      { name: "git/github" },
      { name: "figma" },
    ]
  }
]

const Skills = () => {
  
  return (
    <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-gray-700 text-lg pb-11 px-4">
        <HeadText>Skills</HeadText>
      <div className="flex flex-col w-full gap-4 my-11">
        {
          sections.map((section, index) => (
            <section key={index} className="my-6">
              <h2 className="text-3xl font-semibold uppercase">{section.name}</h2>
              <ul className="ms-6 mt-4 flex gap-4 flex-wrap">
                {
                  section.skills.map((skill, index) => (
                    <li key={index}>{skill.name}</li>
                  ))
                }
              </ul>
            </section>
          ))
        }
      </div>
    </div>
  )
}

export default Skills
