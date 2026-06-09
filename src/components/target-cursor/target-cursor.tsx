"use client";

import { gsap } from "gsap";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import "./target-cursor.css";

type TargetCursorProps = {
  targetSelector?: string;
  hideDefaultCursor?: boolean;
  hoverDuration?: number;
  targetPadding?: number;
  cornerRadius?: number;
};

type CornerPosition = { x: number; y: number };

const getContainingBlock = (
  element: HTMLElement | null,
): HTMLElement | null => {
  let node = element?.parentElement;
  while (node && node !== document.documentElement) {
    const style = getComputedStyle(node);
    if (
      style.transform !== "none" ||
      style.perspective !== "none" ||
      style.filter !== "none" ||
      style.willChange.includes("transform") ||
      style.willChange.includes("perspective") ||
      style.willChange.includes("filter") ||
      /paint|layout|strict|content/.test(style.contain)
    ) {
      return node;
    }
    node = node.parentElement;
  }
  return null;
};

const getContainingBlockOffset = (block: HTMLElement | null) => {
  if (!block) return { x: 0, y: 0 };
  const rect = block.getBoundingClientRect();
  return { x: rect.left + block.clientLeft, y: rect.top + block.clientTop };
};

const getTargetCornerPositions = (
  rect: DOMRect,
  {
    borderWidth,
    cornerSize,
    targetPadding,
    offsetX,
    offsetY,
  }: {
    borderWidth: number;
    cornerSize: number;
    targetPadding: number;
    offsetX: number;
    offsetY: number;
  },
): CornerPosition[] => {
  const pad = targetPadding;
  return [
    {
      x: rect.left - borderWidth - pad - offsetX,
      y: rect.top - borderWidth - pad - offsetY,
    },
    {
      x: rect.right + borderWidth + pad - cornerSize - offsetX,
      y: rect.top - borderWidth - pad - offsetY,
    },
    {
      x: rect.right + borderWidth + pad - cornerSize - offsetX,
      y: rect.bottom + borderWidth + pad - cornerSize - offsetY,
    },
    {
      x: rect.left - borderWidth - pad - offsetX,
      y: rect.bottom + borderWidth + pad - cornerSize - offsetY,
    },
  ];
};

function shouldDisableTargetCursor() {
  const hasTouchScreen =
    "ontouchstart" in window || navigator.maxTouchPoints > 0;
  const isSmallScreen = window.innerWidth <= 768;
  const userAgent =
    navigator.userAgent ||
    navigator.vendor ||
    (window as Window & { opera?: string }).opera ||
    "";
  const mobileRegex =
    /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
  const isMobileUserAgent = mobileRegex.test(userAgent.toLowerCase());
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;
  return (
    (hasTouchScreen && isSmallScreen) ||
    isMobileUserAgent ||
    prefersReducedMotion
  );
}

export function TargetCursor({
  targetSelector = ".cursor-target",
  hideDefaultCursor = true,
  hoverDuration = 0.2,
  targetPadding = 10,
  cornerRadius = 8,
}: TargetCursorProps) {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cornersRef = useRef<NodeListOf<HTMLElement> | null>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const containingBlockRef = useRef<HTMLElement | null>(null);

  const isActiveRef = useRef(false);
  const targetCornerPositionsRef = useRef<CornerPosition[] | null>(null);
  const tickerFnRef = useRef<(() => void) | null>(null);
  const activeStrengthRef = useRef({ current: 0 });

  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    setIsEnabled(!shouldDisableTargetCursor());
  }, []);

  const constants = useMemo(
    () => ({
      borderWidth: 3,
      cornerSize: 12,
    }),
    [],
  );

  const moveCursor = useCallback((x: number, y: number) => {
    if (!cursorRef.current) return;
    const { x: offsetX, y: offsetY } = getContainingBlockOffset(
      containingBlockRef.current,
    );
    gsap.to(cursorRef.current, {
      x: x - offsetX,
      y: y - offsetY,
      duration: 0.1,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (!isEnabled || !cursorRef.current) return;

    const originalCursor = document.body.style.cursor;
    if (hideDefaultCursor) {
      document.body.style.cursor = "none";
    }

    const cursor = cursorRef.current;
    cornersRef.current = cursor.querySelectorAll<HTMLElement>(
      ".target-cursor-corner",
    );

    containingBlockRef.current = getContainingBlock(cursor);
    const getOffset = () =>
      getContainingBlockOffset(containingBlockRef.current);

    let activeTarget: HTMLElement | null = null;
    let currentLeaveHandler: (() => void) | null = null;

    const cleanupTarget = (target: HTMLElement) => {
      if (currentLeaveHandler) {
        target.removeEventListener("mouseleave", currentLeaveHandler);
      }
      currentLeaveHandler = null;
    };

    const initialOffset = getOffset();
    gsap.set(cursor, {
      xPercent: -50,
      yPercent: -50,
      x: window.innerWidth / 2 - initialOffset.x,
      y: window.innerHeight / 2 - initialOffset.y,
      rotation: 0,
    });

    const tickerFn = () => {
      if (
        !targetCornerPositionsRef.current ||
        !cursorRef.current ||
        !cornersRef.current
      ) {
        return;
      }

      const strength = activeStrengthRef.current.current;
      if (strength < 0.99) return;

      const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
      const cursorY = gsap.getProperty(cursorRef.current, "y") as number;

      const cornerPositions = targetCornerPositionsRef.current;
      if (!cornerPositions) return;

      const corners = Array.from(cornersRef.current);

      corners.forEach((corner, i) => {
        const position = cornerPositions[i];
        if (!position) return;

        gsap.set(corner, {
          x: position.x - cursorX,
          y: position.y - cursorY,
        });
      });
    };

    tickerFnRef.current = tickerFn;

    const moveHandler = (e: MouseEvent) => moveCursor(e.clientX, e.clientY);
    window.addEventListener("mousemove", moveHandler);

    const scrollHandler = () => {
      if (!activeTarget || !cursorRef.current) return;

      const rect = activeTarget.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const { x: offsetX, y: offsetY } = getOffset();
      targetCornerPositionsRef.current = getTargetCornerPositions(rect, {
        borderWidth,
        cornerSize,
        targetPadding,
        offsetX,
        offsetY,
      });

      const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
      const cursorY = gsap.getProperty(cursorRef.current, "y") as number;
      const mouseX = cursorX + offsetX;
      const mouseY = cursorY + offsetY;
      const elementUnderMouse = document.elementFromPoint(mouseX, mouseY);
      const isStillOverTarget =
        elementUnderMouse &&
        (elementUnderMouse === activeTarget ||
          elementUnderMouse.closest(targetSelector) === activeTarget);
      if (!isStillOverTarget && currentLeaveHandler) {
        currentLeaveHandler();
      }
    };
    window.addEventListener("scroll", scrollHandler, { passive: true });

    const mouseDownHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 0.7, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 0.9, duration: 0.2 });
    };

    const mouseUpHandler = () => {
      if (!dotRef.current) return;
      gsap.to(dotRef.current, { scale: 1, duration: 0.3 });
      gsap.to(cursorRef.current, { scale: 1, duration: 0.2 });
    };

    window.addEventListener("mousedown", mouseDownHandler);
    window.addEventListener("mouseup", mouseUpHandler);

    const enterHandler = (e: MouseEvent) => {
      const directTarget = e.target;
      if (!(directTarget instanceof Element)) return;

      const allTargets: HTMLElement[] = [];
      let current: Element | null = directTarget;
      while (current && current !== document.body) {
        if (current instanceof HTMLElement && current.matches(targetSelector)) {
          allTargets.push(current);
        }
        current = current.parentElement;
      }
      const target = allTargets[0] || null;
      if (!target || !cursorRef.current || !cornersRef.current) return;
      if (activeTarget === target) return;

      const wasActive = isActiveRef.current;
      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      activeTarget = target;
      const corners = Array.from(cornersRef.current);
      for (const corner of corners) {
        gsap.killTweensOf(corner);
      }

      const rect = target.getBoundingClientRect();
      const { borderWidth, cornerSize } = constants;
      const { x: offsetX, y: offsetY } = getOffset();
      const cursorX = gsap.getProperty(cursorRef.current, "x") as number;
      const cursorY = gsap.getProperty(cursorRef.current, "y") as number;

      targetCornerPositionsRef.current = getTargetCornerPositions(rect, {
        borderWidth,
        cornerSize,
        targetPadding,
        offsetX,
        offsetY,
      });

      isActiveRef.current = true;
      if (tickerFnRef.current && !wasActive) {
        gsap.ticker.add(tickerFnRef.current);
      }

      gsap.killTweensOf(activeStrengthRef.current);
      gsap.set(activeStrengthRef.current, { current: 0 });
      gsap.to(activeStrengthRef.current, {
        current: 1,
        duration: hoverDuration,
        ease: "power2.out",
      });

      const cornerPositions = targetCornerPositionsRef.current;
      if (cornerPositions) {
        corners.forEach((corner, i) => {
          const position = cornerPositions[i];
          if (!position) return;

          gsap.to(corner, {
            x: position.x - cursorX,
            y: position.y - cursorY,
            duration: hoverDuration,
            ease: "power2.out",
          });
        });
      }

      const leaveHandler = () => {
        if (tickerFnRef.current) {
          gsap.ticker.remove(tickerFnRef.current);
        }

        isActiveRef.current = false;
        targetCornerPositionsRef.current = null;
        gsap.set(activeStrengthRef.current, { current: 0, overwrite: true });
        activeTarget = null;

        if (cornersRef.current) {
          const cornerElements = Array.from(cornersRef.current);
          gsap.killTweensOf(cornerElements);
          const { cornerSize } = constants;
          const positions = [
            { x: -cornerSize * 1.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: -cornerSize * 1.5 },
            { x: cornerSize * 0.5, y: cornerSize * 0.5 },
            { x: -cornerSize * 1.5, y: cornerSize * 0.5 },
          ];
          const tl = gsap.timeline();
          cornerElements.forEach((corner, index) => {
            const position = positions[index];
            if (!position) return;

            tl.to(
              corner,
              {
                x: position.x,
                y: position.y,
                duration: 0.3,
                ease: "power3.out",
              },
              0,
            );
          });
        }

        cleanupTarget(target);
      };

      currentLeaveHandler = leaveHandler;
      target.addEventListener("mouseleave", leaveHandler);
    };

    window.addEventListener("mouseover", enterHandler, { passive: true });

    const resizeHandler = () => {
      containingBlockRef.current = getContainingBlock(cursor);
    };
    window.addEventListener("resize", resizeHandler);

    return () => {
      if (tickerFnRef.current) {
        gsap.ticker.remove(tickerFnRef.current);
      }

      window.removeEventListener("mousemove", moveHandler);
      window.removeEventListener("mouseover", enterHandler);
      window.removeEventListener("scroll", scrollHandler);
      window.removeEventListener("resize", resizeHandler);
      window.removeEventListener("mousedown", mouseDownHandler);
      window.removeEventListener("mouseup", mouseUpHandler);

      if (activeTarget) {
        cleanupTarget(activeTarget);
      }

      document.body.style.cursor = originalCursor;

      isActiveRef.current = false;
      targetCornerPositionsRef.current = null;
      activeStrengthRef.current.current = 0;
    };
  }, [
    targetSelector,
    moveCursor,
    constants,
    hideDefaultCursor,
    isEnabled,
    hoverDuration,
    targetPadding,
  ]);

  if (!isEnabled) {
    return null;
  }

  return (
    <div ref={cursorRef} className="target-cursor-wrapper">
      <div ref={dotRef} className="target-cursor-dot" />
      <div
        className="target-cursor-corner corner-tl"
        style={{ borderRadius: `${cornerRadius}px 0 0 0` }}
      />
      <div
        className="target-cursor-corner corner-tr"
        style={{ borderRadius: `0 ${cornerRadius}px 0 0` }}
      />
      <div
        className="target-cursor-corner corner-br"
        style={{ borderRadius: `0 0 ${cornerRadius}px 0` }}
      />
      <div
        className="target-cursor-corner corner-bl"
        style={{ borderRadius: `0 0 0 ${cornerRadius}px` }}
      />
    </div>
  );
}
