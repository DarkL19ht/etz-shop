import ourStory from "@/data/ourStory";
import ourStoryimg from "@/assets/ourStory.svg";

const OurStory = () => {
  return (
    <div className="mt-40 flex justify-center rounded-3xl">
      <div className="primary-bg w-[30%] rounded-l-3xl">
        <h2 className=" m-auto mt-28 w-[90%] text-center text-[64px] font-medium text-white">
          Our Story
        </h2>
        <img
          src={[ourStoryimg]}
          alt="storyIllustration"
          className="rounded-l-3xl object-cover"
        />
      </div>
      <div className="ourStoryRight leading-1 w-[70%] p-20 text-3xl font-normal tracking-widest rounded-r-3xl ">
        {ourStory.map((data) => {
          return (
            <div key={data.id}>
              <h1 className={data.desc ? "mb-0" : "mb-10"}>{data.text}</h1>
              <p>{data.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurStory;
