interface StageCardProps {
  number: number;
  title: string;
  description: string;
  image: string;
}

export default function StageCard({ number, title, description, image }: StageCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center shadow-raised">
      <div className="mb-4 text-5xl">{image}</div>
      <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-sm font-bold text-white">
        {number}
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{title}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
