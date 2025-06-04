"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { memo } from "react";

type IconName = keyof typeof dynamicIconImports;

type DynamicIconProps = {
  name: IconName;
  className?: string;
};

const DynamicIcon = memo(({ name, ...props }: DynamicIconProps) => {
  const Icon = dynamic(dynamicIconImports[name], {
    ssr: false,
  });

  if (!Icon) return null;

  return <Icon {...props} />;
});
DynamicIcon.displayName = "DynamicIcon";

const variants = cva("bg-muted/50", {
  variants: {
    variant: {
      info: "border-blue-900 bg-blue-950",
      success: "border-green-900 bg-green-950",
      warning: "border-yellow-800 bg-yellow-300/25",
      error: "border-red-900 bg-red-950",
    },
  },
});

export function Callout({
  title,
  children,
  icon,
  variant,
  className,
  ...props
}: React.ComponentProps<typeof Alert> & VariantProps<typeof variants> & { icon?: IconName }) {
  return (
    <Alert className={cn(variants({ variant }), "my-6", className)} {...props}>
      {icon && <DynamicIcon name={icon} className="mr-4 text-2xl" />}
      {title && <AlertTitle>{title}</AlertTitle>}
      <AlertDescription className="text-white">{children}</AlertDescription>
    </Alert>
  );
}
