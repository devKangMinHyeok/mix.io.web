import {useEffect, useRef, useState} from "react";

const SetGlassHeight = () => {
  const [drinkEnd, setDringEnd] = useState(100);
  const [glassStart, setGlassStart] = useState(600);
  const [isDraggingD, setIsDraggingD] = useState(false);
  const [isDraggingG, setIsDraggingG] = useState(false);
  const containerRefD = useRef<HTMLDivElement>(null);
  const containerRefG = useRef<HTMLDivElement>(null);

  const handleTouchStart = (callback: (value: boolean) => void) => {
    callback(true);
  };

  const handleTouchEnd = (callback: (value: boolean) => void) => {
    callback(false);
  };

  useEffect(() => {
    const handleGlobalTouchEnd = () => {
      setIsDraggingD(false);
    };

    const handleGlobalTouchMove = (event: TouchEvent) => {
      if (isDraggingD) {
        event.preventDefault();
        const containerHeight = containerRefD.current?.offsetHeight || 0;
        const maxAllowedHeight = containerHeight + 30; // 드래그바가 박스 안에 위치하도록 제한
        const minAllowedHeight = containerHeight - 270;
        const newHeight = Math.min(
          Math.max(event.touches[0].clientY, minAllowedHeight),
          maxAllowedHeight
        );
        setDringEnd(newHeight);
      }
    };

    document.addEventListener("touchend", handleGlobalTouchEnd);
    document.addEventListener("touchmove", handleGlobalTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchend", handleGlobalTouchEnd);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
    };
  }, [isDraggingD]);

  useEffect(() => {
    const handleGlobalTouchEnd = () => {
      setIsDraggingG(false);
    };

    const handleGlobalTouchMove = (event: TouchEvent) => {
      if (isDraggingG) {
        event.preventDefault();
        const containerHeight = containerRefG.current?.offsetHeight || 0;
        const maxAllowedHeight = containerHeight + 400; // 드래그바가 박스 안에 위치하도록 제한
        const minAllowedHeight = containerHeight + 100;
        const newHeight = Math.min(
          Math.max(event.touches[0].clientY, minAllowedHeight),
          maxAllowedHeight
        );
        setGlassStart(newHeight);
      }
    };

    document.addEventListener("touchend", handleGlobalTouchEnd);
    document.addEventListener("touchmove", handleGlobalTouchMove, {
      passive: false,
    });

    return () => {
      document.removeEventListener("touchend", handleGlobalTouchEnd);
      document.removeEventListener("touchmove", handleGlobalTouchMove);
    };
  }, [isDraggingG]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          height: "40vh",
          width: "100vw",
          position: "relative",
        }}
        ref={containerRefD}
        onTouchStart={() => handleTouchStart(setIsDraggingD)}
        onTouchEnd={() => handleTouchEnd(setIsDraggingD)}
      >
        <div
          style={{
            position: "absolute",
            bottom: `calc(${-drinkEnd}px + 40vh + 65px)`,
            width: "100%",
            height: "10px",
            backgroundColor: "blue",
          }}
        />
      </div>
      Volume
      <div
        style={{
          height: "40vh",
          width: "100vw",
          position: "relative",
        }}
        ref={containerRefG}
        onTouchStart={() => handleTouchStart(setIsDraggingG)}
        onTouchEnd={() => handleTouchEnd(setIsDraggingG)}
      >
        <div
          style={{
            position: "absolute",
            bottom: `calc(${-glassStart}px + 80vh + 65px)`,
            width: "100%",
            height: "10px",
            backgroundColor: "blue",
          }}
        />
      </div>
    </div>
  );
};

export default SetGlassHeight;
