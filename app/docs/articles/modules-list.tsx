import type { DocsArticle } from "../docs-types";
import { Layers3 } from "./article-kit";
import { androidModulesByCategory, dllCssModulesByCategory } from "./article-data";
import { ModulesListCatalog } from "./ModulesListCatalog";

export const modulesListArticle: DocsArticle = {
  slug: "modules-list",
  title: "Modules List",
  summary: "Browse the current module catalog by category and platform.",
  icon: Layers3,
  toc: [],
  render: () => <ModulesListCatalog windowsGroups={dllCssModulesByCategory} androidGroups={androidModulesByCategory} />,
};
