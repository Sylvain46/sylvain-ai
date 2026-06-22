export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505] py-8">
      <div className="section-shell flex flex-col justify-between gap-3 text-xs uppercase tracking-[0.18em] text-white/42 sm:flex-row">
        <span>Sylvain AI</span>
        <span>{new Date().getFullYear()} - Portfolio creatif - Photo & Film</span>
      </div>
    </footer>
  );
}
