
import linkedIn from "@/assets/linkedIn.svg";
import ourTeam from "@/data/ourTeam";
import groupImg1 from "@/assets/groupie1.svg";
import groupImg2 from "@/assets/groupie2.svg";

const OurTeam = () => {
  return (
    <>
      <h2 className=" primary-color m-auto mb-40 mt-80 w-[90%] text-center text-[64px] font-medium">
        Our Team
      </h2>

      <div className="w-full ">
        <div className="grid grid-cols-3 grid-rows-3 gap-16">
          {ourTeam.map((data) => {
            return (
              <div
                key={data.id}
                className="primary-bg w-full rounded-3xl p-10 text-center text-white hover:p-5"
              >
                <img
                  src={[data.img]}
                  alt={data.title}
                  className="m-auto w-[90%] "
                />
                <h3 className="mt-7 text-2xl font-semibold">{data.name}</h3>
                <h4 className="mt-3">{data.title}</h4>
                <img
                  src={[linkedIn]}
                  alt={`${data.title}Logo`}
                  className="m-auto mt-3"
                />
              </div>
            );
          })}
        </div>

        <div className="flex justify-between -mt-80">
          <img src={[groupImg1]} alt="groupPicture1" className="w-[55%] hover:w-[57%]" />
          <img src={[groupImg2]} alt="groupPicture2" className="w-[39.5%] hover:w-[41%]" />
        </div>
      </div>
    </>
  );
};

export default OurTeam;
