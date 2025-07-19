"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./CrayonTitle.module.css";

import Image from "next/image";

const CrayonTitle = () => {
  const text = "주희의 크레용 공방";

  useEffect(() => {
    gsap.fromTo(
      ".letter",
      { opacity: 0 },
      {
        opacity: 1,
        duration: 0.05,
        stagger: 0.12,
        ease: "steps(1)",
      }
    );

    const boxes = document.querySelectorAll(".box");

    boxes.forEach((boxEl) => {
      const handleEnter = () => {
        gsap.to(boxEl, {
          x: 8,
          rotation: 5,
          duration: 0.5,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
        });
      };

      const handleLeave = () => {
        gsap.killTweensOf(boxEl);
        gsap.to(boxEl, { x: 0, rotation: 0, duration: 0.4 });
      };

      boxEl.addEventListener("mouseenter", handleEnter);
      boxEl.addEventListener("mouseleave", handleLeave);

      // cleanup
      return () => {
        boxEl.removeEventListener("mouseenter", handleEnter);
        boxEl.removeEventListener("mouseleave", handleLeave);
      };
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#FFF1CB]">
        <div className="relative flex items-center h-150 w-200 justify-center bg-[url('/place1.png')] bg-cover bg-center">
          <div className={styles.wrapper}>
            {text.split("").map((char, i) => (
              <span className="letter" key={i}>
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
            <Image
              src="/store-box.png"
              alt="box Image"
              width={100}
              height={100}
              className="box absolute bottom-45 right-50 w-30 h-34 cursor-pointer"
            />

            <Image
              src="/projects.png"
              alt="projects Image"
              width={100}
              height={100}
              className="box absolute bottom-45 left-50 w-30 h-34 cursor-pointer"
            />

            <Image
              src="/note.png"
              alt="notes Image"
              width={100}
              height={100}
              className="box absolute bottom-42 left-87 w-30 h-34 cursor-pointer"
            />

            <div className="group absolute bottom-0 left-150 w-65 h-75 cursor-pointer">
              <Image
                src="/orange-dog.png"
                alt="dog Image"
                width={100}
                height={100}
                className="w-full h-full group-hover:hidden"
              />
              <Image
                src="/orange-barking-dog.png"
                alt="barking dog Image"
                width={100}
                height={100}
                className="w-full h-full hidden group-hover:block"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CrayonTitle;
