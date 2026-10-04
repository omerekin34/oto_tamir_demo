type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <div className="max-w-2xl">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.22em] text-yellow-400">
        {eyebrow}
      </p>
      <h2 className="mt-3 font-display text-4xl font-bold leading-none tracking-wide text-white sm:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </div>
  );
}
