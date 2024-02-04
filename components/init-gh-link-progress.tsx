import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";

interface InitGhLinkProgressProps {
  stepNumber: number;
  className?: string;
}

const InitGhLinkProgress = ({
  stepNumber,
  className,
}: InitGhLinkProgressProps) => {
  return (
    <div
      className={cn(
        "w-full flex justify-center items-center space-x-4",
        className
      )}
    >
      <Step stepNumber={1} stepName="Check" activate={stepNumber > 0} />
      <Separator
        className={cn(
          "w-32 h-0.5",
          stepNumber > 1 ? "bg-gray-500" : "bg-gray-300"
        )}
      />
      <Step stepNumber={2} stepName="Add Link" activate={stepNumber > 1} />
      <Separator
        className={cn(
          "w-32 h-0.5",
          stepNumber > 2 ? "bg-gray-500" : "bg-gray-300"
        )}
      />
      <Step stepNumber={3} stepName="Commit" activate={stepNumber > 2} />
    </div>
  );
};

interface StepProps {
  activate?: boolean;
  stepNumber: number;
  stepName: string;
}

const Step = ({ activate, stepNumber, stepName }: StepProps) => {
  return (
    <div className="relative flex flex-col items-center">
      <span
        className={cn(
          "h-10 w-10 text-xl font-bold rounded-full border-2 flex items-center justify-center",
          activate
            ? "border-blue-500 text-gray-500"
            : "border-gray-300 text-gray-300"
        )}
      >
        {stepNumber}
      </span>
      <p
        className={cn(
          "absolute text-sm -bottom-6 whitespace-nowrap",
          activate ? "text-gray-500" : "text-gray-300"
        )}
      >
        {stepName}
      </p>
    </div>
  );
};

export default InitGhLinkProgress;
