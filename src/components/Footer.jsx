const Footer = () => {
  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <aside>
       
        <p className="text-red-500 text-4xl">
          Marvel Movies
          <br />
         
        </p>
        <p> Providing thrilling cinematic experiences since 1992</p>
      </aside>
      <nav>
        <h6 className="footer-title">Categories</h6>
        <a className="link link-hover">Action</a>
        <a className="link link-hover">Drama</a>
        <a className="link link-hover">Comedy</a>
        <a className="link link-hover">Sci-Fi</a>
      </nav>
      <nav>
        <h6 className="footer-title">Company</h6>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Jobs</a>
        <a className="link link-hover">Press kit</a>
      </nav>
      <nav>
        <h6 className="footer-title">Resources</h6>
        <a className="link link-hover">FAQs</a>
        <a className="link link-hover">Blog</a>
        <a className="link link-hover">Events</a>
        <a className="link link-hover">Gift Cards</a>
      </nav>
      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
