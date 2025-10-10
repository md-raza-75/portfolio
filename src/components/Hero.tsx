import { useEffect, useRef, useState } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "/public/hero-portrait.jpg";

export const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      
      setMousePosition({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (imageRef.current) {
      const tiltX = mousePosition.y * 10;
      const tiltY = mousePosition.x * -10;
      imageRef.current.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.05)`;
    }
  }, [mousePosition]);

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-mesh pt-20"
    >
      {/* Animated background gradient orbs */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[100px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[100px] animate-float"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-glow/20 rounded-full blur-[120px] animate-glow-pulse"
      />

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-left">
          <div className="space-y-4">
            <p className="text-muted-foreground text-xl font-light tracking-wide animate-fade-in uppercase">
              Hello, I'm
            </p>
            <h1 className="text-6xl md:text-8xl font-black leading-none tracking-tight">
              <span className="text-gradient">Mohammad Raza</span>
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground/90 tracking-tight">
              Creative Developer and Java Full Stack Devdeloper
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-xl leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            I craft beautiful, interactive web experiences that blend cutting-edge design
            with powerful functionality. Let's build something extraordinary together.
          </p>

          <div className="flex gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button size="lg" className="shadow-glow hover:scale-105 transition-all text-base px-10 py-6 rounded-full">
              <a href="#projects">View Projects</a>
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-all text-base px-10 py-6 rounded-full border-2">
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative animate-scale-in">
          <div
            ref={imageRef}
            className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-lift transition-transform duration-300 ease-out ring-1 ring-white/10"
          >
            <img
              src={heroImage}
              alt="Creative Developer Portfolio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-accent/30 mix-blend-overlay" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
          </div>

          {/* Floating accent elements */}
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-primary rounded-3xl blur-2xl opacity-70 animate-glow-pulse" />
          <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-accent rounded-3xl blur-2xl opacity-70 animate-glow-pulse" style={{ animationDelay: "1s" }} />
          <div className="absolute top-1/2 -right-8 w-24 h-24 bg-primary-glow rounded-full blur-xl opacity-50 animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#projects"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </a>
    </section>
  );
};
