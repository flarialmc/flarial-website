import type { DocsArticle } from "../docs-types";
import { whatIsFlarialArticle } from "./what-is-flarial";
import { usageArticle } from "./usage";
import { compatibilityArticle } from "./compatibility";
import { configsArticle } from "./configs";
import { modulesListArticle } from "./modules-list";
import { flarialNametagIconArticle } from "./flarial-nametag-icon";
import { moduleBlockingArticle } from "./module-blocking";
import { scriptingApiArticle } from "./scripting-api";

export const docsArticles: DocsArticle[] = [
  whatIsFlarialArticle,
  usageArticle,
  compatibilityArticle,
  configsArticle,
  modulesListArticle,
  flarialNametagIconArticle,
  moduleBlockingArticle,
  scriptingApiArticle,
];
