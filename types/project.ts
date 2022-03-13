export interface Project {
  name: string;
  description: string;
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  techs_stack: string[];
  id: number;
}

export type Category =
  | "javascript"
  | "node"
  | "express"
  | "node"
  | "react"
  | "next"
  | "nest"
  | "mongoDB"
  | "MYSQL";
