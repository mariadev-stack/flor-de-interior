"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import GridDistortion from "./components/GridDistortion";
import BlurText from "./components/BlurText";

const ENTRANCE_MAX_DELAY = 0.9;

function AnimatedLetters({
  text,
  ready,
  delays,
}: {
  text: string;
  ready: boolean;
  delays: number[];
}) {
  return (
    <>
      {Array.from(text).map((char, i) => (
        <span
          key={i}
          className={`entrance-letter ${ready ? "is-visible" : ""}`}
          style={{ transitionDelay: `${delays[i] ?? 0}s` }}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </>
  );
}

export default function Home() {
  const [logoLoaded, setLogoLoaded] = useState(false);

  const logoRef = useCallback((img: HTMLImageElement | null) => {
    if (img?.complete) setLogoLoaded(true);
  }, []);

  const florText = "flor";
  const deText = "de";
  const interiorText = "interior";

  const [entranceReady, setEntranceReady] = useState(false);
  const [florDelays, setFlorDelays] = useState<number[]>([]);
  const [deDelays, setDeDelays] = useState<number[]>([]);
  const [interiorDelays, setInteriorDelays] = useState<number[]>([]);

  useEffect(() => {
    const randomDelays = (length: number) =>
      Array.from({ length }, () => Math.random() * ENTRANCE_MAX_DELAY);

    setFlorDelays(randomDelays(florText.length));
    setDeDelays(randomDelays(deText.length));
    setInteriorDelays(randomDelays(interiorText.length));

    const raf = requestAnimationFrame(() => setEntranceReady(true));
    return () => cancelAnimationFrame(raf);
  }, []);

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
              <p className="flor">
                <AnimatedLetters text={florText} ready={entranceReady} delays={florDelays} />
              </p>
              <p className="de">
                <AnimatedLetters text={deText} ready={entranceReady} delays={deDelays} />
              </p>
            </div>
            <p className="interior-text">
              <AnimatedLetters text={interiorText} ready={entranceReady} delays={interiorDelays} />
            </p>
            <img
              ref={logoRef}
              src="/coming-soon.svg"
              alt="Coming Soon"
              className={`coming-soon-logo ${logoLoaded ? "is-loaded" : ""}`}
              onLoad={() => setLogoLoaded(true)}
            />
            <div className="links">
              <a href="https://www.instagram.com/flordeinterior____/" target="_blank">
                <BlurText text="@flordeinterior____" className="instagram-link" />
              </a>
              <BlurText text="MED" className="location" />
              <BlurText text="flordeinterior.co" className="website-link" />
            </div>
          </div>
        </section>
  );
}
