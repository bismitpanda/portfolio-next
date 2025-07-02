const keyboardSymbolMap: Record<string, string> = {
  Cmd: "⌘",
  Command: "⌘",
  Ctrl: "^",
  Control: "^",
  Alt: "⌥",
  Option: "⌥",
  Shift: "⇧",
  Tab: "⇥",
  Enter: "↩",
  Return: "↩",
  Backspace: "⌫",
  Delete: "⌦",
  Escape: "⎋",
  Esc: "⎋",
  Space: "␣",
  Up: "↑",
  Down: "↓",
  Left: "←",
  Right: "→",
  Home: "↖",
  End: "↘",
  PageUp: "⇞",
  PageDown: "⇟",
  CapsLock: "⇪",
};

const replaceKeyboardShortcuts = (input: string) => {
  let result = input;

  const keys = Object.keys(keyboardSymbolMap);
  const pattern = new RegExp(`\\b(${keys.join("|")})\\b`, "gi");

  result = result.replace(pattern, (match) => {
    const key = keys.find((k) => k.toLowerCase() === match.toLowerCase());
    return key ? keyboardSymbolMap[key] : match;
  });

  return result;
};

export function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <span className="my-1 cursor-pointer rounded-lg border-b-2 border-b-zinc-600 bg-muted px-1 py-0.5 font-mono text-sm">
      {replaceKeyboardShortcuts(children as string)}
    </span>
  );
}
