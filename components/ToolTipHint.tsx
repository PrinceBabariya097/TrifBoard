import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface Props {
  children: React.ReactNode;
  title: string;
  side: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
}
const ToolTipHint = ({
  children,
  title,
  side,
  sideOffset,
  align,
  alignOffset,
}: Props) => {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={100}>
        <TooltipTrigger asChild>{children}</TooltipTrigger>
        <TooltipContent
          side={side}
          sideOffset={sideOffset}
          align={align}
          alignOffset={alignOffset}
          className="bg-slate-800 text-white border-none"
        >
          {title}
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default ToolTipHint;
