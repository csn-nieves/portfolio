const Footer = () => {
  return (
    <div className="cavani_tm_footer fixed inset-x-0 bottom-0 bg-white z-[10] h-[70px] leading-[70px] flex items-center justify-between py-0 px-[70px] middle:hidden">
      <div className="copyright">
        <p className="text-[#333] font-poppins">Copyright © {new Date().getFullYear()}</p>
      </div>
      <div className="social">
        <ul>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="https://www.linkedin.com/in/christophernieves20"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                className="svg inline-block"
                src="assets/img/svg/linkedin.svg"
                alt="image"
              />
            </a>
          </li>
          <li className="mr-[15px] inline-block">
            <a
              className="text-[#333]"
              href="https://github.com/csn-nieves"
              target="_blank" rel="noopener noreferrer"
            >
              <img
                className="svg inline-block"
                src="assets/img/svg/github.svg"
                alt="image"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Footer;
