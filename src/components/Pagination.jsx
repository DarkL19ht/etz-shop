import prev from '../assets/prev.png';
import back from '../assets/back.png';
import forward from '../assets/forward.png';
import next from '../assets/next.png';

const Pagination = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex justify-between mx-auto md:mx-auto w-[80%] md:w-[50%] lg:w-[25%]">
        <img
          src={[prev]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer"
        />
        <img
          src={[back]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer"
        />
        <p className="border-2 border-slate-400 text-center py-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer font-bold md:font-normal">
          1
        </p>
        <p className="border-2 border-slate-400 text-center py-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer font-bold md:font-normal">
          2
        </p>
        <p className="border-2 border-slate-400 text-center py-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer font-bold md:font-normal">
          3
        </p>
        <img
          src={[forward]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer"
        />
        <img
          src={[next]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[40px] md:w-[40px] h-[40px] md:h-[40px] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Pagination;
