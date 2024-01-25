import privacyPolicy from "@/data/privacyPolicy";

const SideBar = () => {
  return (
    <div className="">
      {privacyPolicy.map((value) => {
        return <h1 key={value.id} className="leading-loose">{value.title}</h1>;
      })}
    </div>
  );
};

export default SideBar;
