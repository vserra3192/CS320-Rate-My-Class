import Image from "next/image";
import Link from "next/link";
export function Header({ professor = false }: { professor?: boolean }) { return (<header className="bg-white border-[#dde4dc] border-b border-solid content-stretch flex h-[88px] items-center justify-between overflow-clip px-[64px] relative shrink-0 w-full" data-node-id="25:4" data-name="Navigation">
        <Link href="/" aria-label="Rate My Class home" className="content-stretch flex gap-[10px] items-center overflow-clip relative shrink-0" data-node-id="25:5" data-name="Brand">
          <div className="bg-[#16734c] content-stretch flex items-center justify-center overflow-clip relative rounded-[10px] shrink-0 size-[36px]" data-node-id="25:6" data-name="Brand mark">
            <div className="relative shrink-0 size-[24px]" data-node-id="25:884" data-name="graduation-cap">
              <Image alt="" width={24} height={24} className="absolute block inset-0 max-w-none size-full" src={professor ? "/figma/df7df.svg" : "/figma/7e2f8.svg"} unoptimized />
            </div>
          </div>
          <p className="[word-break:break-word] font-bold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[22px] whitespace-nowrap" data-node-id="25:8">
            RATE MY CLASS
          </p>
        </Link>
        <div className="content-stretch flex gap-[20px] items-center relative shrink-0" data-node-id="25:18" data-name="Account actions">
          <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[#18332b] text-[14px] whitespace-nowrap" data-node-id="25:19">
            Sign in
          </p>
          <div className="bg-[#16734c] border border-[#16734c] border-solid content-stretch flex h-[42px] items-center justify-center overflow-clip px-[18px] relative rounded-[8px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] shrink-0" data-node-id="25:20" data-name="Action">
            <p className="[word-break:break-word] font-semibold leading-[normal] not-italic relative shrink-0 text-[14px] text-white whitespace-nowrap" data-node-id="25:21">
              Create account
            </p>
          </div>
        </div>
      </header>); }

