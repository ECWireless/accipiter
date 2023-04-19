import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import schemas from './schemas/schema';

export default defineConfig({
  title: "Accipiter Systems",
  projectId: "4rwexgho",
  dataset: "production",
  plugins: [deskTool()],
  schema: {
    types: schemas,
  },
});