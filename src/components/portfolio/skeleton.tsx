import { Skeleton } from '@nextui-org/react';

const CardSkeleton = () => {
    return (
        <div className="flex flex-col lg:flex-row items-center lg:gap-4">
            {/* Skeleton for the image */}
            <div className="mb-2 relative w-full lg:w-[60%] block">
                <Skeleton className="w-full h-[40vw] lg:h-[20vw] rounded-sm" />
            </div>
            
            {/* Skeletons for the text and tech icons */}
            <div className="lg:w-[60%] lg:px-8 w-full">
                <div className="font-light text-2xl xl:text-3xl">
                    <Skeleton className="w-[200px] h-[20px] lg:h-[30px] rounded-sm" />
                </div>
                <div className="mt-2 text-sm font-light xl:text-lg">
                    <Skeleton className="w-full h-[60px] lg:h-[120px] rounded-sm" />
                </div>
                
                {/* Skeleton for tech icons */}
                <div className="flex flex-wrap gap-4 my-4">
                    <Skeleton className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full" />
                    <Skeleton className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full" />
                    <Skeleton className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] rounded-full" />
                </div>

                {/* Skeleton for footer line and icon */}
                <div className="flex items-center mt-2">
                    <div className="flex-1 border-t-2 border-[#343434]">
                        <Skeleton className="w-full h-[2px]" />
                    </div>
                    <div className="mx-2">
                        <Skeleton className="w-[20px] h-[20px] rounded-sm" />
                    </div>
                    <div className="flex-1 border-t-2 border-[#343434]">
                        <Skeleton className="w-full h-[2px]" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardSkeleton;
