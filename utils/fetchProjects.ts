import { Project } from '../typings';

export const fetchProjects = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/getProjects`,
    {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      //   body: JSON.stringify(info),
    }
  );
  const data = await res.json();
  const projects: Project[] = data.projects;
  return projects;
};
