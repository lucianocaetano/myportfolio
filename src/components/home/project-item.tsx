import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card"
import Image from "next/image";

export interface IProject {
  title: string;
  description: string;
  images?: Array<{ url: string; alt: string }>;
}

const ProjectItem: React.FC<{project: IProject}> = ({project}) => {

  return (
    <div>
      <Card className="bg-transparent h-full flex flex-col justify-between">
        <CardHeader>
          {project.images?.length === 1 && (
            <Image src={project.images[0].url} alt={project.images[0].alt} width={500} height={500} className="w-full"/>
          )}
        </CardHeader>
        <CardContent>
          <h3 className="text-lg font-semibold">{project.title}</h3>
          <p className="mt-4">{project.description}</p>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </div>
  )
}

export default ProjectItem
