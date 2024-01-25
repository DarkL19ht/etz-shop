import {termsAndConditions} from "@/data/terms&conditions";

const SideBar = () => {
  return <div className="">{termsAndConditions.map(value => {
    return (
      <a href={`#${value.href}`} key={value.id}>
        <h1 className="leading-loose">{value.title}</h1>
      </a>
    );
  })}</div>;
};

export default SideBar;
