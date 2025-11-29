const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-[#0d1224] border-t border-[#4ef0d8]/20">
      <div className="max-w-7xl mx-auto text-center">
        <div className="mb-4">
          <div className="w-full h-px bg-gradient-to-r from-transparent via-[#4ef0d8] to-transparent neon-glow" />
        </div>
        <p className="text-[#94a3b8] text-sm">
          © {new Date().getFullYear()} Athul Menon P. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
