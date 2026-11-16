import Reveal from "./Reveal";

interface SectionHeadingProps {
  index: string;
  title: string;
  description: string;
  spacing?: string;
}

export default function SectionHeading({ index, title, description, spacing = "mb-10" }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="flex items-center gap-3 mb-3">
        <span className="text-teal-400 font-mono text-sm">{index}</span>
        <h2 className="text-2xl sm:text-3xl font-bold text-white">{title}</h2>
        <div className="h-px bg-slate-800 flex-1 max-w-xs" />
      </div>
      <p className={`text-slate-400 text-sm sm:text-base ${spacing} max-w-2xl`}>{description}</p>
    </Reveal>
  );
}
