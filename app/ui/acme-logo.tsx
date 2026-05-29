import { lusitana } from '@/app/ui/fonts';
import { ChartPieIcon } from '@heroicons/react/24/outline';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <ChartPieIcon className="h-12 w-12 mr-2" />
      <p className="text-[44px]">FinDesk</p>
    </div>
  );
}
