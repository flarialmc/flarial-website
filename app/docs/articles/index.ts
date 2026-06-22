import type { DocsArticle } from "../docs-types";
import { whatIsFlarialArticle } from "./what-is-flarial";
import { usageArticle } from "./usage";
import { compatibilityArticle } from "./compatibility";
import { configsArticle } from "./configs";
import { modulesListArticle } from "./modules-list";
import { flarialNametagIconArticle } from "./flarial-nametag-icon";
import { mediaKitArticle } from "./media-kit";
import { moduleBlockingArticle } from "./module-blocking";
import { scriptingApiArticle } from "./scripting-api";
import { troubleshootingCrashesArticle } from "./troubleshooting-crashes";
import { troubleshootingInstallArticle } from "./troubleshooting-install";
import { troubleshootingHudModulesArticle } from "./troubleshooting-hud-modules";
import { troubleshootingMobileBetaArticle } from "./troubleshooting-mobile-beta";
import { generalQuestionsArticle } from "./general-questions";

/* Troubleshooting articles are generated from the Flarial support knowledge
   base (bot-golang/kb on prod, the same source /aihelp uses). */
const TROUBLESHOOTING = "Troubleshooting";

export const docsArticles: DocsArticle[] = [
  whatIsFlarialArticle,
  usageArticle,
  compatibilityArticle,
  configsArticle,
  modulesListArticle,
  flarialNametagIconArticle,
  mediaKitArticle,
  moduleBlockingArticle,
  scriptingApiArticle,
  { ...troubleshootingCrashesArticle, group: TROUBLESHOOTING },
  { ...troubleshootingInstallArticle, group: TROUBLESHOOTING },
  { ...troubleshootingHudModulesArticle, group: TROUBLESHOOTING },
  { ...troubleshootingMobileBetaArticle, group: TROUBLESHOOTING },
  { ...generalQuestionsArticle, group: TROUBLESHOOTING },
];
