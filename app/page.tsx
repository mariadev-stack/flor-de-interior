import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <section className="coming-soon">
          <div className="background">
          </div>
          <div className="content">
            <img
              src="/flower.svg"
              alt=""
              className="flower"
            />
            <img
              src="/coming-soon.svg"
              alt="Coming Soon"
              className="coming-soon-logo"
            />
          </div>
        </section>
  );
}