import Image from 'next/image';

function PartnersSection() {
  return (
    <div className="w-full bg-[#087b8d] p-10">
      <div className="flex flex-col items-center text-white my-10 space-y-3">
        <h2 className="text-4xl font-bold">AYSRH</h2>
        <h3>AYSRH Project</h3>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex items-center justify-center">
          <a
            href="https://www.packard.org/"
            title="David"
            // target="_blank"
            className="relative w-40 h-40"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/david-removebg-preview.png"
              alt=''
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="https://www.ethioymca.org/index.php/en/"
            title="YMCA"
            // target="_blank"
            className="relative w-48 h-48"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              src="/ymca-removebg-preview.png"
              alt=''
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="#"
            target="_blank"
            title="iCog-ACC"
            className="relative w-48 h-48"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              alt=''
              src="/hnet.com-image.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center">
          <a
            href="#"
            target="_blank"
            title="MeSY"
            className="relative w-48 h-48"
          >
            <Image
              className=""
              layout="fill"
              objectFit="contain"
              alt=''
              src="/photo6026103094024190220-removebg-previe.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default PartnersSection;
