interface SectionHeaderProps {
  title: string;
  description?: string;
  className?: string;
}

export default function SectionHeader({ title, description, className = "mb-16" }: SectionHeaderProps) {
  return (
    <div className={`text-center ${className}`}>
      <h2 className="font-serif text-4xl sm:text-5xl font-normal tracking-[-0.015em] mb-4 text-[var(--uw-ink)]">
        {title}
      </h2>
      <div className="w-20 h-px bg-gradient-to-r from-[#009293] to-[#00787A] opacity-40 mx-auto rounded-full mb-4" />
      {description && (
        <p className="text-lg text-[var(--uw-body)] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

