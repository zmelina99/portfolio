"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { X, Play, RotateCcw } from "lucide-react";

interface Bubble {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
}

export default function BubbleGame() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [oxygen, setOxygen] = useState(100);
  const [bubbles, setBubbles] = useState<Bubble[]>([]);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaRef = useRef<HTMLDivElement>(null);
  const bubbleIdRef = useRef(0);
  const animationFrameRef = useRef<number>();

  // Load high score from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("bubbleGameHighScore");
    if (saved) setHighScore(parseInt(saved));
  }, []);

  // Game loop
  useEffect(() => {
    if (!isPlaying || gameOver) return;

    const updateGame = () => {
      // Spawn new bubbles
      if (Math.random() < 0.03) {
        const newBubble: Bubble = {
          id: bubbleIdRef.current++,
          x: Math.random() * 90 + 5,
          y: 100,
          size: Math.random() * 20 + 30,
          speed: Math.random() * 1.5 + 1,
        };
        setBubbles(prev => [...prev, newBubble]);
      }

      // Update bubble positions
      setBubbles(prev => 
        prev
          .map(bubble => ({
            ...bubble,
            y: bubble.y - bubble.speed,
          }))
          .filter(bubble => bubble.y > -10)
      );

      // Decrease oxygen
      setOxygen(prev => {
        const newOxygen = prev - 0.15;
        if (newOxygen <= 0) {
          setGameOver(true);
          setIsPlaying(false);
          return 0;
        }
        return newOxygen;
      });

      animationFrameRef.current = requestAnimationFrame(updateGame);
    };

    animationFrameRef.current = requestAnimationFrame(updateGame);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isPlaying, gameOver]);

  const catchBubble = (bubbleId: number, bubbleSize: number) => {
    setBubbles(prev => prev.filter(b => b.id !== bubbleId));
    setScore(prev => prev + 10);
    
    // Restore oxygen based on bubble size
    setOxygen(prev => Math.min(100, prev + (bubbleSize / 5)));
  };

  const startGame = () => {
    setIsPlaying(true);
    setGameOver(false);
    setScore(0);
    setOxygen(100);
    setBubbles([]);
    bubbleIdRef.current = 0;
  };

  const endGame = () => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem("bubbleGameHighScore", score.toString());
    }
  };

  useEffect(() => {
    if (gameOver && score > highScore) {
      setHighScore(score);
      localStorage.setItem("bubbleGameHighScore", score.toString());
    }
  }, [gameOver, score, highScore]);

  const getOxygenColor = () => {
    if (oxygen > 60) return "from-[#40E0D0] to-[#7FFFD4]";
    if (oxygen > 30) return "from-[#FFD700] to-[#FFA500]";
    return "from-[#FF6B6B] to-[#FF4444]";
  };

  return (
    <>
      {/* Game Toggle Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-4 left-4 z-50 bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] text-[#0A1628] px-4 py-3 rounded-full shadow-lg shadow-[#40E0D0]/30 hover:shadow-xl hover:shadow-[#40E0D0]/40 transition-all duration-300 hover:scale-105 flex items-center gap-2 font-semibold"
        >
          <div className="relative">
            <div className="w-6 h-6 rounded-full bg-[#0A1628]/20 flex items-center justify-center">
              🫧
            </div>
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#FF6B6B] rounded-full animate-pulse" />
          </div>
          <span>Bubble Game</span>
        </button>
      )}

      {/* Game Panel */}
      {isOpen && (
        <div className="fixed bottom-4 left-4 z-50 w-[min(400px,calc(100vw-2rem))]">
          <Card className="bg-[#132B3A]/95 backdrop-blur-md border-2 border-[#00CED1]/40 shadow-2xl shadow-[#40E0D0]/20 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-[#40E0D0]/20 to-[#9B59B6]/20 p-4 border-b border-[#00CED1]/30 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-bold text-[#F5E6D3] flex items-center gap-2">
                  🫧 Bubble Catch
                </h3>
                <p className="text-xs text-[#B8D4DB]">Catch bubbles to refill oxygen!</p>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => {
                  setIsOpen(false);
                  endGame();
                }}
                className="text-[#F5E6D3] hover:text-[#40E0D0]"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>

            {/* Score & Oxygen Display */}
            <div className="p-4 bg-[#0A1628]/40 border-b border-[#00CED1]/20">
              <div className="flex justify-between items-center mb-3">
                <div>
                  <div className="text-xs text-[#7FFFD4] font-mono uppercase">Score</div>
                  <div className="text-2xl font-bold text-[#40E0D0] font-mono">{score}</div>
                </div>
                <div>
                  <div className="text-xs text-[#7FFFD4] font-mono uppercase">High Score</div>
                  <div className="text-2xl font-bold text-[#9B59B6] font-mono">{highScore}</div>
                </div>
              </div>

              {/* Oxygen Tank */}
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-xs text-[#B8D4DB] font-mono uppercase flex items-center gap-1">
                    🫁 Oxygen Tank
                  </span>
                  <span className="text-xs font-mono font-bold text-[#40E0D0]">
                    {Math.round(oxygen)}%
                  </span>
                </div>
                <div className="h-3 bg-[#1B4B5A]/50 rounded-full overflow-hidden border border-[#00CED1]/30">
                  <div
                    className={`h-full bg-gradient-to-r ${getOxygenColor()} transition-all duration-200 rounded-full relative`}
                    style={{ width: `${oxygen}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
                {oxygen < 30 && isPlaying && (
                  <p className="text-xs text-[#FF6B6B] mt-1 animate-pulse font-semibold">
                    ⚠️ Low oxygen! Catch bubbles quickly!
                  </p>
                )}
              </div>
            </div>

            {/* Game Area */}
            <div
              ref={gameAreaRef}
              className="relative h-64 bg-gradient-to-b from-[#1B4B5A]/30 to-[#0A1628]/50 overflow-hidden cursor-pointer"
            >
              {!isPlaying && !gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1628]/80 backdrop-blur-sm z-10">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">🤿</div>
                    <h4 className="text-xl font-bold text-[#40E0D0]">Ready to Dive?</h4>
                    <p className="text-sm text-[#B8D4DB] max-w-xs">
                      Click bubbles as they float up to refill your oxygen tank. 
                      Don&apos;t let it reach zero!
                    </p>
                    <Button
                      onClick={startGame}
                      className="bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] text-[#0A1628] hover:opacity-90 font-semibold"
                    >
                      <Play className="mr-2 h-4 w-4" />
                      Start Game
                    </Button>
                  </div>
                </div>
              )}

              {gameOver && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0A1628]/90 backdrop-blur-sm z-10">
                  <div className="text-center space-y-4">
                    <div className="text-4xl">😵</div>
                    <h4 className="text-xl font-bold text-[#FF6B6B]">Out of Oxygen!</h4>
                    <div className="space-y-1">
                      <p className="text-sm text-[#B8D4DB]">Final Score: 
                        <span className="text-[#40E0D0] font-bold ml-2">{score}</span>
                      </p>
                      {score === highScore && score > 0 && (
                        <p className="text-sm text-[#FFD700] font-semibold">🎉 New High Score!</p>
                      )}
                    </div>
                    <Button
                      onClick={startGame}
                      className="bg-gradient-to-r from-[#40E0D0] to-[#7FFFD4] text-[#0A1628] hover:opacity-90 font-semibold"
                    >
                      <RotateCcw className="mr-2 h-4 w-4" />
                      Play Again
                    </Button>
                  </div>
                </div>
              )}

              {/* Bubbles */}
              {bubbles.map(bubble => (
                <button
                  key={bubble.id}
                  onClick={() => catchBubble(bubble.id, bubble.size)}
                  className="absolute transition-none hover:scale-110 active:scale-95"
                  style={{
                    left: `${bubble.x}%`,
                    bottom: `${bubble.y}%`,
                    width: `${bubble.size}px`,
                    height: `${bubble.size}px`,
                  }}
                >
                  <div
                    className="w-full h-full rounded-full bg-gradient-radial from-[#40E0D0]/60 via-[#7FFFD4]/40 to-transparent border-2 border-[#40E0D0]/40 shadow-lg shadow-[#40E0D0]/30 cursor-pointer hover:border-[#7FFFD4]"
                    style={{
                      animation: 'bubble-wobble 2s ease-in-out infinite',
                    }}
                  />
                </button>
              ))}

              {/* Water effects */}
              {isPlaying && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#00CED1]/5 via-transparent to-transparent pointer-events-none" />
                  <div className="caustics opacity-20 pointer-events-none" />
                </>
              )}
            </div>

            {/* Instructions */}
            <div className="p-3 bg-[#0A1628]/60 border-t border-[#00CED1]/20">
              <p className="text-xs text-[#B8D4DB] text-center">
                💡 Bigger bubbles = more oxygen! • {isPlaying ? 'Click bubbles to catch them!' : 'Press play to start'}
              </p>
            </div>
          </Card>
        </div>
      )}

      <style jsx>{`
        @keyframes bubble-wobble {
          0%, 100% { transform: translateX(0) scale(1); }
          25% { transform: translateX(-3px) scale(1.05); }
          75% { transform: translateX(3px) scale(0.95); }
        }
      `}</style>
    </>
  );
}

