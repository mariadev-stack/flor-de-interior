import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="coming-soon">
          <div className="background">
          </div>
          <div className="content">
            <div className="flor-de-text">
              <p className="flor">flor</p>
              <p className="de">de</p>
            </div>
            <p className="interior-text">interior</p>
            <img
              src="/coming-soon.svg"
              alt="Coming Soon"
              className="coming-soon-logo"
            />
            <div className="links">
              <a href="https://www.instagram.com/flordeinterior____/" target="_blank" className="instagram-link">
                @flordeinterior____
              </a>
              <p className="location">MED</p>
              <p className="website-link">flordeinterior.co</p>
            </div>
          </div>
        </section>
  );
}