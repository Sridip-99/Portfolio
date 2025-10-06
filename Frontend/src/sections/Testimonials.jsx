import React, { useEffect, useRef, useState } from "react";
import ScrollFloat from "../components/ScrollFloat";
import "./Testimonials.css";

const Testimonials = () => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const items = [
    {
      text: `"Sridip Tah was an exceptionally sharp and proactive analyst. Their work delivered immediate operational value to our security team. A top-tier talent we highly recommend."`,
      name: "Prashant R.",
      role: "CEO, InlighnX Global Pvt.Ltd.",
      img: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/testimonials/model1.webp",
    },
    {
      text: `"Beautiful design and so easy for clients to use! It's made my studio look incredibly professional and is already growing my bookings."`,
      name: "Puja J.",
      role: "Owner & Makeup Artist",
      img: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/testimonials/model2.webp",
    },
    {
      text: `"Honestly, you're the best project partner. You not only tackle the toughest problems but your code is always so clean and easy to integrate. You make our deadlines feel way less stressful!"`,
      name: "Shrikant G.",
      role: "Project Mate",
      img: "https://raw.githubusercontent.com/Sridip-99/Portfolio/refs/heads/main/Frontend/src/assets/img/testimonials/model3.webp",
    },
  ];


  // Animate function
  const animate = (i) => {
    setCurrentIndex(i);
    if (sliderRef.current) {
      sliderRef.current.style.transform = `translateX(${-i * sliderRef.current.offsetWidth}px)`;
    }
  };

  // Auto scroll
  const startAutoAnimate = () => {
    intervalRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const nextIndex = (prev + 1) % items.length;
        animate(nextIndex);
        return nextIndex;
      });
    }, 5000);
  };

  // Stop auto scroll
  const stopAutoAnimate = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Init
  useEffect(() => {
    animate(0);
    startAutoAnimate();
    return () => stopAutoAnimate(); // cleanup
  }, []);

  const handleClick = (index) => {
    stopAutoAnimate();
    animate(index);
    startAutoAnimate();
  };

  return (
    <section id="testimonials">
      <ScrollFloat
        animationDuration={1}
        ease="back.inOut(2)"
        scrollStart="center bottom+=50%"
        scrollEnd="bottom bottom-=40%"
        stagger={0.03}
      >
        Testimonials.
      </ScrollFloat>
        <div className="reviewContainer">

            <ul className="slider" ref={sliderRef}>
                {items.map((item, idx) => (
                <li
                    key={idx}
                    className={`item ${currentIndex === idx ? "animation" : ""}`}
                >
                    <div className="testimonial">
                    <p>{item.text}</p>
                    <p>{item.name}</p>
                    <p>{item.role}</p>
                    </div>
                    <img loading="lazy" className="image" src={item.img} alt={item.name} />
                </li>
                ))}
            </ul>

            <div className="navbtns">
                {items.map((_, idx) => (
                <button
                    key={idx}
                    className={`btn ${currentIndex === idx ? "expand" : ""}`}
                    data-index={idx}
                    onClick={() => handleClick(idx)}
                ></button>
                ))}
            </div>
        </div>
    </section>
  );
};

export default Testimonials;


