import {SetGlassHeightProps} from "@src/interfaces";
import {useEffect, useRef, useState} from "react";

export const registDragEvent = ({
  onDragChange,
  onDragEnd,
}: {
  onDragChange?: (deltaY: number) => void;
  onDragEnd?: (deltaY: number) => void;
}) => {
  return {
    onTouchStart: (touchEvent: React.TouchEvent<HTMLDivElement>) => {
      touchEvent.stopPropagation();
      const targetElement = touchEvent.currentTarget as HTMLElement;

      const touchMoveHandler = (moveEvent: TouchEvent) => {
        if (moveEvent.cancelable) moveEvent.preventDefault();
        const deltaY = moveEvent.touches[0].pageY - touchEvent.touches[0].pageY;
        onDragChange?.(deltaY);
      };

      const touchEndHandler = (moveEvent: TouchEvent) => {
        const deltaY =
          moveEvent.changedTouches[0].pageY -
          touchEvent.changedTouches[0].pageY;
        onDragEnd?.(deltaY);
        targetElement.removeEventListener("touchmove", touchMoveHandler);
        targetElement.removeEventListener("touchend", touchEndHandler);
      };

      targetElement.addEventListener("touchmove", touchMoveHandler, {
        passive: false,
        capture: true,
      });
      targetElement.addEventListener("touchend", touchEndHandler, {once: true});
    },
  };
};

const SetGlassHeight = ({height, setHeight}: SetGlassHeightProps) => {
  const boundaryRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setHeight((prev) => ({...prev, h: window.innerHeight - 400}));
  }, []);

  return (
    <div className="flex flex-col items-center" ref={boundaryRef}>
      <div
        className="z-0 absolute left-1/2 top-1/2"
        style={{
          transform: "translate(-50%,-50%)",
          fontWeight: 300,
          fontSize: "48px",
          lineHeight: "55px",
        }}
      >
        Volume
      </div>
      <div
        className="z-0 fixed left-1/2 border-b-2 border-t-2 border-dashed border-black text-center"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.08)",
          transform: "translate(-50%)",
          width: "100vw",
          height: height.h,
          top: height.y,
        }}
      >
        <div
          // 3️⃣
          className="absolute -top-1 left-0 right-0 h-2 cursor-s-resize flex items-center justify-center"
          {...registDragEvent({
            onDragChange: (deltaY) => {
              setHeight({
                y: height.y + deltaY,
                h: height.h - deltaY,
              });
            },
            onDragEnd: (deltaY) => {
              setHeight({
                y: Math.floor((height.y + deltaY) / 10) * 10,
                h: Math.ceil((height.h - deltaY) / 10) * 10,
              });
            },
          })}
        >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: "translate(-50%, -36px)",
            }}
          >
            Drink ends here
          </div>
          <div
            style={{
              borderRadius: 50,
              width: "16px",
              height: "16px",
              backgroundColor: "black",
            }}
          />
        </div>
        <div
          // 3️⃣
          className="absolute -bottom-1 left-0 right-0 h-2 cursor-s-resize flex items-center justify-center"
          {...registDragEvent({
            onDragChange: (deltaY) => {
              setHeight({
                y: height.y,
                h: height.h + deltaY,
              });
            },
            onDragEnd: (deltaY) => {
              setHeight({
                y: Math.floor(height.y / 10) * 10,
                h: Math.floor((height.h + deltaY) / 10) * 10,
              });
            },
          })}
        >
          <div
            className="absolute left-1/2 top-1/2"
            style={{
              transform: "translate(-50%, 16px)",
            }}
          >
            Glass starts here
          </div>
          <div
            style={{
              borderRadius: 50,
              width: "16px",
              height: "16px",
              backgroundColor: "black",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default SetGlassHeight;
