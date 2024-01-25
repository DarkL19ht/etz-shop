

const AboutHero = () => {
  return (
    <>
      <div className="aboutUsBg mt-40 rounded-3xl p-5">
        <div>
          <h1 className="primary-color m-auto w-[20%] pb-20 pt-32 text-[64px] font-medium text-white">
            About us
          </h1>
          <h1 className=" m-auto w-[85%] pb-20 text-center text-5xl font-medium leading-snug text-black ">
            Critiview is a community of people dedicated to sharing their own
            first-hand experiences to help others make informed and confident
            decisions.
          </h1>
          <h1 className=" m-auto mb-20 w-[85%] pb-20 text-center text-3xl font-normal leading-loose text-black">
            People come to Critiview to find businesses they can trust—from
            restaurants to boutiques and salons, online vendors or Artisans.
            Businesses join Critiview to enhance their online visibility and get
            found by customers who are searching for them.
          </h1>
        </div>
      </div>
      <div className=" primary-bg mt-40 rounded-[28px]  ">
        <div className="ourMissionBg flex w-[97.5%] justify-between rounded-br-3xl rounded-tl-3xl py-10 hover:ml-[2.5%] hover:rounded-bl-3xl hover:rounded-br-none hover:rounded-tl-none hover:rounded-tr-3xl">
          <div className="w-[40%]">
            <h1 className="primary-color m-auto w-[90%] pb-20 pt-7 text-center text-[64px] font-medium text-white">
              Our Mission
            </h1>
          </div>

          <div className="w-[60%]">
            <h1 className=" m-auto w-[90%] pb-20 text-left text-5xl font-medium leading-snug text-black ">
              Provide a trusted and open platform where consumers and businesses
              can discover and provide value to one another
            </h1>
            <h1 className=" m-auto w-[90%] text-left text-3xl font-normal leading-loose text-black">
              By fostering a culture of trust, honesty and transparency in the
              local market, Critiview aims to empower consumers to make informed
              and confident decisions. We want to support the development and
              innovation of local enterprises by allowing them to be seen and
              heard.
            </h1>
          </div>
        </div>

        <div className="ourMissionBg ml-[2.5%] mt-24 flex w-[97.5%] justify-between rounded-br-3xl rounded-tl-3xl py-10 hover:ml-0 hover:rounded-bl-3xl hover:rounded-br-none hover:rounded-tl-none  hover:rounded-tr-3xl">
          <div className="w-[40%]">
            <h1 className="primary-color m-auto w-[90%] pb-20 pt-7 text-center text-[64px] font-medium text-white">
              Our Vision
            </h1>
          </div>

          <div className="w-[60%]">
            <h1 className=" m-auto w-[90%] pb-20 text-left text-5xl font-medium leading-snug text-black ">
              Build a digital platform for consumers and businesses in Nigeria
              and Africa, where trust is built, quality is rewarded, and
              opportunities are created
            </h1>
            <h1 className=" m-auto w-[90%] text-left text-3xl font-normal leading-loose text-black">
              We leverage cutting-edge technology to create a platform where
              everyone can be equal, open, and satisfied. In today’s digital
              age, consumers and businesses should have the chance to share
              their voices and stories with the world. Whether you are buying or
              selling, you deserve to be seen and appreciated.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutHero;
