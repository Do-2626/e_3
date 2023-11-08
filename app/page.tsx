import SidBarLogoWrapper from "@/components/home/logos/SidBarLogoWrapper";

export default function Home() {
  return (
    <main className=" w-full sm:p-4 h-full ">
      <div className="grid grid-cols-1 lg:grid-cols-3">
        <div className=" min-h-screen col-span-1  md:col-span-2 order-2 md:order1 ">
          <div className="w-full h-full flex items-center sm:p-4 ">
            <div className="p-4 min-h-[60vh] my-10 text-center w-full sm:w-[70vw] m-auto space-y-7">
              <h1 className="text-7xl drop-shadow-2xl   font-bold text-blue-950">
                E-Jobs
              </h1>
              <h3 className="text-2xl  ">Engineers Jobs</h3>
              <h2 className="text-4xl m-2 ">
                Become the candidate they can’t ignore.
              </h2>
              <p className="text-2xl m-2  ">
                Store your resume in our ever-growing collection, getting you
                noticed by the world’s top recruiters. It’s your time to shine,
                folks!
              </p>
            </div>
          </div>
        </div>
        <div className="order-1  lg:order-2 flex justify-center lg:justify-end">
          <SidBarLogoWrapper />
        </div>
      </div>
      <div className=" py-20">
        <div className="p-4  my-10 text-center w-full sm:w-[70vw] m-auto space-y-7">
          <h2 className="text-4xl">Get Noticed</h2>
          <p className="text-2xl ">
            Store your resume in our ever-growing collection, getting you
            noticed by the world’s top recruiters. It’s your time to shine,
            folks!
          </p>
        </div>
      </div>
      <div className="bg-slate-200 py-20">
        <div className="p-4   text-center w-full  m-auto space-y-7">
          <h2 className="text-4xl">Effortless Upload, Astonishing Results</h2>
          <p className="text-2xl ">
            Upload your resume with just a few clicks, and make it easily
            discoverable by the most esteemed engineering recruiters. Impress
            them with your skills, experience, and drive.
          </p>
        </div>
      </div>

      <div className=" py-20">
        <div className="p-4  my-10 text-center w-full sm:w-[70vw] m-auto space-y-7">
          <h2 className="text-4xl">Get Headhunted like a Pro</h2>
          <p className="text-2xl ">
            Being part of our resume collection means being constantly in the
            sights of top recruiters. Get headhunted for the job of your dreams
            without lifting a finger . How{"'"}s that for productivity?
          </p>
        </div>
      </div>
      <div className="bg-slate-200 py-20">
        <div className="p-4   text-center w-full  m-auto space-y-7">
          <h1 className="text-4xl">Taking your job search to new heights.</h1>
        </div>
      </div>
    </main>
  );
}
