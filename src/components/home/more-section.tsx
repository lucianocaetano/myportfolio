import Image from "next/image"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const data = [
  {
    title: "Developer",
    description: "I can design a website based on your needs and suggestions. I can also create one from scratch, consulting with you as I go.",
    icon: '/icon dev.png'
  },
  {
    title: "Maintenance",
    description: "If there are any problems or changes are needed, I can introduce new features.",
    icon: '/icon maintenance.png'
  },
  {
    title: "Design",
    description: "If there are any problems or changes are needed, I can introduce new features.",
    icon: '/icon design.png'
  },
]

const MoreSection = () => {

  return (
    <div className="max-w-7xl mx-auto w-full my-16 flex flex-col items-center justify-center text-gray-700 text-lg py-11 px-4">
      <div className="border-s-4 border-e-4 p-2 border-black my-16 text-center w-64 scale-80">
        <h1 className="text-xl font-semibold uppercase text-black">more</h1>
      </div>

      <div className="flex gap-4 my-11 max-xl:flex-col justify-center items-center">
        {
          data.map((item, index) => (
            <Card key={index} className="w-full md:max-w-1/2 bg-transparent shadow-none border-none">
              <CardHeader>
                <CardTitle className="uppercase text-xl font-bold">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex gap-4 items-center">
                <Image src={item.icon} alt={item.title} width={80} height={40}></Image>
                <p>{item.description}</p>
              </CardContent>
              
            </Card>
          ))
        }
      </div>
    </div>
  )
}

export default MoreSection
