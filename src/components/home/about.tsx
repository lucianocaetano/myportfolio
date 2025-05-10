import HeadText from "../head-text"

const About = () => {
  return (
    <div className="max-w-7xl mx-auto w-full border-t-2 border-black my-16 flex flex-col items-center justify-center text-gray-700 text-lg pt-11 px-4">
      <HeadText>about me</HeadText>
      <p className="max-w-2xl mx-auto w-full pb-5">
        My name is Mauro Caetano, and I&apos;m a student of Information Technology.
      </p>
      <p className="max-w-2xl mx-auto w-full pb-16">
        My membership in the science club developed my design skills, which quickly became a new hobby. 
        I&apos;m fluent in Spanish (spoken and written). Besides designing and programming websites, my passion is computer science.
      </p>
    </div>
  )
}

export default About
