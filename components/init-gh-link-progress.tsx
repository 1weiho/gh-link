import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface InitGhLinkProgressProps {
  className?: string;
}

const InitGhLinkProgress = ({ className }: InitGhLinkProgressProps) => {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center space-x-4",
        className
      )}
    >
      <Step stepNumber={1} stepName="Check" isCurrent />
      <Separator className="w-32 h-0.5 bg-gray-300" />
      <Step stepNumber={2} stepName="Add Link" />
      <Separator className="w-32 h-0.5 bg-gray-300" />
      <Step stepNumber={3} stepName="Commit" />
    </div>
  );
};

interface StepProps {
  isCurrent?: boolean;
  stepNumber: number;
  stepName: string;
}

const Step = ({ isCurrent, stepNumber, stepName }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <span
        className={cn(
          "h-10 w-10 text-xl font-bold rounded-full border-2 flex items-center justify-center",
          isCurrent
            ? "border-blue-500 text-gray-500"
            : "border-gray-300 text-gray-300"
        )}
      >
        {stepNumber}
      </span>
      <p
        className={cn(
          "absolute text-sm -bottom-6 whitespace-nowrap",
          isCurrent ? "text-gray-500" : "text-gray-300"
        )}
      >
        {stepName}
      </p>
    </div>
  );
};

export default InitGhLinkProgress;
