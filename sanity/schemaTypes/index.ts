import {type SchemaTypeDefinition} from "sanity";
import {experienceType} from "./experience";
import {postType} from "./post";
import {projectType} from "./project";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, projectType, experienceType],
};
