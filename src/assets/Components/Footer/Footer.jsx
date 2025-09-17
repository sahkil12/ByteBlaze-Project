const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-5">
      <aside>
        <p className="md:text-xl font-bold">
          Copyright © {new Date().getFullYear()} - All right reserved by ByteBlaze
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
