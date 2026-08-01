interface ParticipantCardProps {
  name: string;
  description: string;
  color: string;
  icon: React.ReactNode;
}

export default function ParticipantCard({ name, description, color, icon }: ParticipantCardProps) {
  return (
    <div className="flex flex-col items-center rounded-xl border border-border bg-surface p-6 text-center shadow-raised transition-all hover:-translate-y-0.5 hover:shadow-overlay">
      <div className={`mb-4 flex h-20 w-20 items-center justify-center rounded-full ${color}`}>
        {icon}
      </div>
      <h3 className="font-display text-lg font-semibold mb-2">{name}</h3>
      <p className="text-sm text-text-muted leading-relaxed">{description}</p>
    </div>
  );
}
