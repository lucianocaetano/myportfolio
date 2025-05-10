import Image from "next/image";

const Banner = () => {
  
  return (
    <div className="flex flex-col items-center space-y-4 mx-3">
      <div className="relative w-full max-w-7xl sm:h-[780px] rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10" />
        <div className="absolute inset-0 bg-[url('/banner.png')] bg-cover z-0" />
        <div className="relative z-20 w-full h-full text-white">
          <div className="flex w-full h-full max-lg:flex-col-reverse relative">
            <div className="h-full w-full flex flex-col justify-center max-lg:justify-end max-lg:absolute z-50">
              <div className="max-lg:bg-black/40 max-sm:h-full flex justify-center lg:justify-start max-sm:items-end">
                <div className="max-md:scale-50 max-lg:scale-70 flex flex-col max-lg:items-center items-start ps-11">
                  <h3 className="text-3xl font-serif mb-2">my name is Mauro Caetano.</h3>
                  <h1 className="text-7xl font-bold uppercase">I’m a web</h1>
                  <h1 className="text-7xl text-center font-bold uppercase">developer</h1>
                    
                  <div className="flex gap-6 mt-6">
                    <Image src="/mail symbol.png" alt="email" width={40} height={40} className="cursor-pointer"></Image>
                    <Image src="/github symbol.png" alt="github" width={40} height={40} className="cursor-pointer"></Image>
                    <Image src="/linkedin symbol.png" alt="linkedin" width={40} height={40} className="cursor-pointer"></Image>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="flex items-end lg:bg-black h-full ms-3 relative max-lg:flex max-lg:justify-center"
            >
              <span className="max-lg:hidden absolute top-0 -left-16 w-[200px] h-screen rotate-7 bg-black z-[-1]"></span>

              <Image src="/result.png" alt="my image" width={900} height={800} className="max-lg:hidden animate-flip-up animate-ease-out"></Image>
              <Image src="/result.png" alt="my image" width={500} height={400} className="lg:hidden animate-flip-up animate-ease-out"></Image>
            </div>
          </div>
        </div>
      </div>
      <Image src="/separatorBlack 6.png" alt="" width={130} height={170}></Image>
    </div>
  )
}

export default Banner
