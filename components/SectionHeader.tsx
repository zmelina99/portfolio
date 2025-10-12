interface SectionHeaderProps {
  title: string;
  description?: string;
}

export default function SectionHeader({ title, description }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-medium mb-4 text-[#E6EDF2]">
        {title}
      </h2>
      <div className="w-20 h-px bg-gradient-to-r from-[#009293] to-[#00787A] opacity-40 mx-auto rounded-full mb-4" />
      {description && (
        <p className="text-lg text-[#94A3B8] max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

