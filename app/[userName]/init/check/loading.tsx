import BackgroundGrid from "@/components/background-grid";
import InitGhLinkProgress from "@/components/init-gh-link-progress";
import { Skeleton } from "@/components/ui/skeleton";

const LoadingPage = () => {
  return (
    <div className="h-screen">
      <div className=" z-10 relative flex flex-col items-center">
        <InitGhLinkProgress className="mt-20" stepNumber={1} />
        <div className="flex items-center mt-36 space-x-4">
          <h1 className="font-semibold text-3xl">Let&apos;s get started,</h1>
          <Skeleton className="h-6 w-20" />
        </div>
        <Skeleton className="h-72 w-[580px] mt-16" />
      </div>
      <div className="md:block hidden fixed inset-0 pointer-events-none">
        <BackgroundGrid className="absolute inset-0 opacity-50" />
      </div>
    </div>
  );
};

export default LoadingPage;
