"use client";

import { useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent as ReactKeyboardEvent } from "react";
import type { CommandItem } from "@/lib/portfolio-types";

interface CommandPaletteProps {
  commands: CommandItem[];
}

export function CommandPalette({ commands }: CommandPaletteProps) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstCommandRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();

  const closePalette = () => {
    setIsOpen(false);
    requestAnimationFrame(() => {
      triggerRef.current?.focus({ preventScroll: true });
    });
  };

  const openPalette = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    requestAnimationFrame(() => {
      firstCommandRef.current?.focus();
    });
  }, [isOpen]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement | null;
      const isEditable =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT" ||
        target?.isContentEditable;

      if (isEditable) {
        return;
      }

      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        if (isOpen) {
          closePalette();
          return;
        }

        setIsOpen(true);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, [isOpen]);

  const handleDialogKeyDown = (event: ReactKeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closePalette();
      return;
    }

    if (event.key !== "Tab") {
      return;
    }

    const focusable = Array.from(
      dialogRef.current?.querySelectorAll<HTMLButtonElement>("button") ?? [],
    ).filter((element) => !element.disabled);

    if (focusable.length === 0) {
      return;
    }

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
      return;
    }

    if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  const runCommand = (command: CommandItem) => {
    const target = document.getElementById(command.targetId);

    closePalette();

    if (!target) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    window.history.pushState(null, "", `#${command.targetId}`);
    target.scrollIntoView({
      behavior: prefersReducedMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <div className="command-palette">
      <button
        ref={triggerRef}
        type="button"
        className="command-palette__trigger"
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-controls="command-palette-dialog"
        aria-label="Open command palette"
        onClick={openPalette}
      >
        <span>command.palette</span>
        <kbd>⌘K</kbd>
        <kbd>Ctrl K</kbd>
      </button>

      {isOpen ? (
        <div className="command-palette__overlay">
          <button
            type="button"
            className="command-palette__backdrop"
            aria-label="Close command palette"
            tabIndex={-1}
            onClick={closePalette}
          />
          <div
            id="command-palette-dialog"
            ref={dialogRef}
            className="command-palette__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            onKeyDown={handleDialogKeyDown}
          >
            <div className="command-palette__header">
              <div>
                <p className="command-palette__eyebrow">quick navigation</p>
                <h2 id={titleId}>Command Palette</h2>
                <p id={descriptionId}>
                  Jump to portfolio systems. Use Tab to move, Enter to select,
                  Escape to close.
                </p>
              </div>
              <button
                type="button"
                className="command-palette__close"
                aria-label="Close command palette"
                onClick={closePalette}
              >
                Esc
              </button>
            </div>

            <ul className="command-palette__list">
              {commands.map((command, index) => (
                <li key={command.id}>
                  <button
                    ref={index === 0 ? firstCommandRef : undefined}
                    type="button"
                    className="command-palette__item"
                    onClick={() => runCommand(command)}
                  >
                    <span>{command.label}</span>
                    <span>{command.description}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  );
}
