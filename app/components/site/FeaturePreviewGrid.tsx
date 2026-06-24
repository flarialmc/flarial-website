type Preview = {
  title: string;
  type: string;
  icon: string;
  note: string;
  image?: string;
  video?: string;
};

const previews: Preview[] = [
  {
    title: "ClickGUI tuning",
    type: "Clip added",
    icon: "/mod-icons/clickgui.png",
    video: "/showcase/pc-clickgui.mp4",
    note: "PC ClickGUI flow: open the in-game menu, browse modules, and adjust settings live.",
  },
  {
    title: "HUD layout",
    type: "Screenshot added",
    icon: "/mod-icons/keystrokes.png",
    image: "/showcase/pc-hud.jpg",
    note: "Clean PC HUD view with FPS, ping, armor durability, keystrokes, CPS, and hotbar overlays.",
  },
  {
    title: "FPS / render settings",
    type: "GIF added",
    icon: "/mod-icons/fps.png",
    image: "/showcase/pc-fps-render.gif",
    note: "PC render demo with the FPS counter visible while lighting/visual settings change in-game.",
  },
  {
    title: "Android experience",
    type: "Clip added",
    icon: "/mod-icons/android.png",
    video: "/showcase/android-clickgui.mp4",
    note: "Mobile Flarial flow: open the Android controls, enter ClickGUI, and toggle a safe HUD module.",
  },
];

export function FeaturePreviewGrid() {
  return (
    <section className="relative mx-auto max-w-7xl px-4 pb-20 sm:px-6 sm:pb-24">
      <div className="mb-8 max-w-2xl">
        <div className="mb-3 font-mono text-[10.5px] uppercase tracking-[0.22em] text-[var(--color-accent)]">
          Feature previews
        </div>
        <h2 className="font-display text-[30px] font-semibold tracking-tight text-white sm:text-[44px]">
          See Flarial in-game.
        </h2>
        <p className="mt-4 text-[15px] leading-relaxed text-[var(--color-text-mute)]">
          Quick previews of the ClickGUI, HUD layout, FPS tools, and Android flow. All requested preview media is now in place.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {previews.map((preview) => (
          <article key={preview.title} className="group overflow-hidden rounded-[28px]" style={{ background: "var(--color-bg-nav)", boxShadow: "var(--shadow-rest)" }}>
            <div className="relative aspect-[4/3] overflow-hidden bg-[var(--color-bg-inset)]">
              <div aria-hidden className="absolute inset-0" style={{ background: "radial-gradient(circle at 50% 20%, rgba(255,35,58,0.24), transparent 45%), linear-gradient(135deg, rgba(255,255,255,0.04), transparent)" }} />
              <div className="absolute inset-4 rounded-[20px] border border-white/[0.06] bg-black/20 p-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-[var(--color-accent)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--color-accent-dk)]" />
                  <span className="h-3 w-3 rounded-full bg-[var(--color-bg-icon)]" />
                </div>
                {"video" in preview ? (
                  <div className="absolute inset-x-2 bottom-2 top-10 grid place-items-center overflow-hidden rounded-[14px] bg-black/35">
                    <video
                      src={preview.video}
                      className="h-full w-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                    />
                  </div>
                ) : "image" in preview ? (
                  <div className="absolute inset-x-2 bottom-2 top-10 grid place-items-center overflow-hidden rounded-[14px] bg-black/35">
                    <img
                      src={preview.image}
                      alt=""
                      className="h-full w-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ) : (
                  <div className="mt-8 grid place-items-center text-center">
                    <div className="grid h-20 w-20 place-items-center rounded-[24px] bg-[var(--color-bg-modicon)] shadow-[var(--shadow-rest)]">
                      <img src={preview.icon} alt="" className="h-12 w-12 object-contain" loading="lazy" />
                    </div>
                    <div className="mt-3 font-mono text-[9px] uppercase tracking-[0.2em] text-white/55">Flarial preview slot</div>
                  </div>
                )}
              </div>
            </div>
            <div className="p-5">
              <div className="font-mono text-[9.5px] uppercase tracking-[0.2em] text-[var(--color-accent)]">{preview.type}</div>
              <h3 className="mt-2 font-display text-[18px] font-semibold text-white">{preview.title}</h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-[var(--color-text-mute)]">{preview.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
