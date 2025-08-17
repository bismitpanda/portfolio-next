"use client";

import { cva, type VariantProps } from "class-variance-authority";
import dynamicIconImports from "lucide-react/dynamicIconImports";
import dynamic from "next/dynamic";
import { memo } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";

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

const variants = cva("", {
  variants: {
    variant: {
      default: "default-callout",
      info: "info-callout",
      success: "success-callout",
      warning: "warning-callout",
      error: "error-callout",
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
}: React.ComponentProps<typeof Alert> &
  VariantProps<typeof variants> & { icon?: IconName }) {
  return (
    <Alert
      className={cn(
        variants({ variant }),
        "my-6 flex flex-col gap-y-2",
        className,
      )}
      {...props}
    >
      <div className="flex flex-row items-center justify-start gap-2">
        {icon && <DynamicIcon className="size-4 text-2xl" name={icon} />}
        {title && (
          <AlertTitle className="font-bold text-lg">{title}</AlertTitle>
        )}
      </div>
      <AlertDescription className="text-base text-white">
        {children}
      </AlertDescription>
    </Alert>
  );
}
