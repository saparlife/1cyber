'use client';

import { useEffect, useRef } from 'react';

export function MatrixRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    const chars = 'アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEF{}[]<>/\\|=+-*&^%$#@!~';
    const charArray = chars.split('');
    const fontSize = 14;
    let columns: number;
    let drops: number[];

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(0).map(() => Math.random() * -100);
    }

    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx!.fillStyle = 'rgba(10, 10, 10, 0.05)';
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < columns; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Head character - bright
        ctx!.fillStyle = '#00ff41';
        ctx!.font = `${fontSize}px JetBrains Mono`;
        ctx!.globalAlpha = 0.9;
        ctx!.fillText(char, x, y);

        // Slight glow
        ctx!.shadowColor = '#00ff41';
        ctx!.shadowBlur = 3;
        ctx!.fillText(char, x, y);
        ctx!.shadowBlur = 0;

        // Trail chars - dimmer
        if (Math.random() > 0.97) {
          ctx!.globalAlpha = 0.3;
          ctx!.fillStyle = '#003300';
          const trailChar = charArray[Math.floor(Math.random() * charArray.length)];
          ctx!.fillText(trailChar, x, y - fontSize * 2);
        }

        ctx!.globalAlpha = 1;

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += Math.random() * 0.5 + 0.5;
      }

      animationId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ opacity: 0.15 }}
    />
  );
}
