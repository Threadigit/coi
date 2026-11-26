/**
 * Numbered, mono section marker: "■ 001" over "[ LABEL ]" on a hairline.
 * Gives long pages the feel of an indexed archive.
 */
export default function SectionIndex({
  n,
  label,
  children,
  className = '',
}: {
  n: string;
  label: string;
  children?: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`flex items-start justify-between gap-6 border-t border-white/[0.12] pt-4 ${className}`}>
      <div className="font-mono-label text-[11px] uppercase leading-relaxed tracking-[0.16em] text-on-surface/55">
        <div><span className="text-primary">■</span> {n}</div>
        <div>[ {label} ]</div>
      </div>
      {children}
    </div>
  );
}
