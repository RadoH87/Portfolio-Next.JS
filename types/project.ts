export interface Project {
  name: string;
  description: string;
  image_path: string;
  deploy_url: string;
  github_url: string;
  category: Category[];
  tech_stacks: string[];
}

export type Category =
  | "javascript"
  | "node"
  | "express"
  | "node"
  | "react"
  | "next"
  | "nest"
  | "mongo"
  | "mysql";
