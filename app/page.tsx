import Image from "next/image";
import Link from "next/link";
import GridDistortion from "./components/GridDistortion";

export default function Home() {
  return (
    <section className="coming-soon">
          <GridDistortion
            imageSrc="/background-image.jpg"
            grid={106}
            mouse={0.1}
            strength={0.15}
            relaxation={0.9}
            className="background"
          />
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