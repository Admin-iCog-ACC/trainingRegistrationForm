import Image from 'next/image';

function BackgroundSection() {
  return (
    <div className="lg:max-w-5xl mx-auto bg-white shadow-md  px-5 py-16">
      <div className="grid grid-cols-2 gap-7">
        <div className="relative h-auto w-auto">
          <Image src="/startup.jpg" layout="fill" objectFit="fill" alt="no image" />
        </div>
        <div className="px-5 space-y-3 p-10">
          <h2 className="text-3xl">Background of the Project</h2>
          <p>
            Supported by the David and Lucile Packard Foundation, the project{' '}
            <strong>
            &quot;Advancing Media Literacy and Digital Solution for Improved
              Adolescents and Youth Sexual and Reproductive Health (AYSRH)&quot;
            </strong>{' '}
            is a two years project that will be implemented with the Young Men
            Christians Association (YMCA) as lead, in partnership with iCog
            Anyone Can Code (iCog-ACC) and Media Smart Youth – Ethiopia (MeSY).
            The project&apos;s goal is to improve access to high-quality AYSRH
            information and services through the advancement of media literacy
            and digital solutions. This project was based on research conducted
            by iCog-ACC, which you can find here.
          </p>
          <p>
            Under this project iCog-ACC will be conducting the following
            activities.
          </p>
          <ul className="list-disc pl-10">
            <li>
              An acceleration program for youth-led and youth owned startups
              working on AYSRH
            </li>
            <li>
              Conducting an online campaign to reach a wider audience with
              positive AYSRH messages
            </li>
            <li>
              Providing capacity building supports to youth serving organization
              to better their digital presence
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default BackgroundSection;
