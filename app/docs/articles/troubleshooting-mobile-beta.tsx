import type { DocsArticle } from "../docs-types";
import {
  DocsHeading,
  InfoCard,
  InlineCode,
  Smartphone,
  sectionFrameClass,
} from "./article-kit";

export const troubleshootingMobileBetaArticle: DocsArticle = {
  slug: "troubleshooting-mobile-beta",
  title: "Troubleshooting: Mobile",
  summary: "Android/iOS support status, APK access, and mobile-specific issues.",
  icon: Smartphone,
  toc: [
    { title: "Android & iOS support", href: "#flarial-mobile-android-ios" },
    { title: "Installing on Android", href: "#mobile-tester-no-pc" },
    { title: "Modules missing in beta", href: "#modules-missing-in-beta" },
  ],
  render: () => (
    <>
      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="flarial-mobile-android-ios">Android & iOS support</DocsHeading>
        <p>You might be wondering:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Does Flarial mobile work on iPhone or iPad?</li>
          <li>Is Flarial mobile Android-only?</li>
          <li>Is the Android build a texture pack or behavior pack?</li>
          <li>Can Flarial be made compatible with an arbitrary Minecraft APK?</li>
          <li>
            Will mobile support custom <InlineCode>lib.so</InlineCode> mods or third-party native modules?
          </li>
        </ul>
        <p>
          Flarial mobile is released for Android through the official APK download, and there is no iOS release yet. iOS is harder because
          Apple does not allow the same client injection and modding path Flarial relies on, and the
          sideload or jailbreak requirements would limit how it could be installed. Mobile app-store policy
          also restricts arbitrary native-code loaders, so custom <InlineCode>lib.so</InlineCode> modules
          are not part of any supported plan.
        </p>
        <ul className="list-disc space-y-1 pl-5">
          <li>Mobile support is Android-only for now. There is no iOS release date.</li>
          <li>
            The Android build is not a texture pack or behavior pack. It works more like the Windows client,
            which a texture or behavior pack could not replicate.
          </li>
          <li>
            Flarial cannot patch or support an arbitrary Minecraft APK on request. Use the official APK release path instead.
          </li>
          <li>
            There is no supported plan for loading arbitrary native modules (custom <InlineCode>lib.so</InlineCode>)
            on mobile unless the team announces one.
          </li>
          <li>
            If you are on iOS, watch the announcements channel for any future iOS support. We will not point
            you toward jailbreaking or bypassing App Store restrictions.
          </li>
        </ul>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="mobile-tester-no-pc">Installing on Android</DocsHeading>
        <p>You might be wondering:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>How do I get or download Flarial for Android?</li>
          <li>Where is the official Android APK?</li>
          <li>Do I still need tester access?</li>
          <li>Can I install a standalone APK?</li>
        </ul>
        <p>
          Flarial for Android is available through the official APK download. You do not need
          to submit a tester application for the public Android release.
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>
            Open the{" "}
            <a
              href="https://cdn.flarial.xyz/android/Flarial.apk"
              className="font-semibold text-white underline decoration-[var(--color-accent)] decoration-2 underline-offset-4"
            >
              official Flarial APK download
            </a>{" "}
            for Flarial Launcher.
          </li>
          <li>Open Flarial.apk from downloads and install it.</li>
          <li>Launch Minecraft Bedrock through Flarial and open the in-game menu to configure modules.</li>
          <li>Only use cdn.flarial.xyz or official Flarial links. Avoid third-party APK mirrors.</li>
        </ol>
        <InfoCard icon={<Smartphone size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>
            Only download Flarial mobile from cdn.flarial.xyz or a link the team has published officially.
          </p>
        </InfoCard>
      </section>

      <section className={sectionFrameClass} style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
        <DocsHeading id="modules-missing-in-beta">Modules missing in beta</DocsHeading>
        <p>You might be seeing:</p>
        <ul className="list-disc space-y-1 pl-5">
          <li>
            A module that existed before, such as Freelook, Nametag, Better FPS, or Motion Blur, is now missing.
          </li>
          <li>The module does not appear in the menu or search even after restarting.</li>
          <li>Some modules appear but do not work on a newer build.</li>
          <li>The launcher no longer offers a beta DLL option you remember seeing.</li>
        </ul>
        <p>
          Some modules are temporarily removed or hidden in beta builds while stability issues are fixed.
          Better FPS and Motion Blur in particular may be removed temporarily when they cause lag or
          instability. Unless staff has announced otherwise, these removals are temporary and the module
          should return later.
        </p>
        <ol className="list-decimal space-y-1 pl-5">
          <li>Confirm you are on the latest Flarial build for your Minecraft version.</li>
          <li>
            Remember that launcher options are not the same as in-game client modules. Modules are configured
            from the in-game ClickGUI, usually opened with <InlineCode>K</InlineCode> on Windows or the
            Flarial icon on mobile. If a module or the beta
            DLL toggle was removed, it is currently unavailable rather than hidden in a setting.
          </li>
          <li>
            If you need the module right now, stay on the last stable version where it exists, such as
            <InlineCode>26.13</InlineCode> when staff recommends it.
          </li>
          <li>
            For Better FPS or Motion Blur on recent builds, launch through the Flarial launcher and avoid
            mixing old UWP advice with newer GDK versions. Anything after <InlineCode>1.21.120</InlineCode> is GDK.
          </li>
        </ol>
        <InfoCard icon={<Smartphone size={16} className="text-[var(--color-accent)]" />} title="Note">
          <p>
            Better FPS and Motion Blur were reported as temporarily removed or disabled for lag reasons on
            recent 26.2x support builds. There is no exact return date.
          </p>
        </InfoCard>
      </section>
    </>
  ),
};
