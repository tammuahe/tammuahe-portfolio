import { useQuery } from "@tanstack/react-query";

const fetchRepos = async () => {
  const response = await fetch("https://api.github.com/users/tammuahe/repos");
  if (!response.ok) {
    throw new Error("Failed to fetch repositories");
  }
  return response.json();
};


const Projects = () => {
    const { data: projectList, isPending } = useQuery({
        queryKey: ["repos"],
        queryFn: fetchRepos,
        refetchOnMount:false,
        refetchOnWindowFocus:false,
    });
    console.log(projectList);
  return<div>Projects</div>;
};

export default Projects;
