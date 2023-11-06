import prev from '../assets/prev.png';
import back from '../assets/back.png';
import forward from '../assets/forward.png';
import next from '../assets/next.png';

const Pagination = () => {
  return (
    <div className="w-full mt-16">
      <div className="flex justify-between ml-4 md:mx-auto w-[30%] hover:cursor-pointer">
        <img
          src={[prev]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[50px] md:w-[10%] h-[50px] md:h-[5%] hover:cursor-pointer"
        />
        <img
          src={[back]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[50px] md:w-[9%] h-[50px] md:h-[3.2%] hover:cursor-pointer"
        />
        <p className="border-2 border-slate-400 p-[15%] md:p-[3.3%] w-[50px] md:w-[10%] h-[50px] md:h-[10%] hover:cursor-pointer font-bold md:font-normal">
          1
        </p>
        <p className="border-2 border-slate-400 p-[15%] md:p-[3.3%] w-[50px] md:w-[10%] h-[50px] md:h-[10%] hover:cursor-pointer font-bold md:font-normal">
          2
        </p>
        <p className="border-2 border-slate-400 p-[15%] md:p-[3.3%] w-[50px] md:w-[10%] h-[50px] md:h-[10%] hover:cursor-pointer font-bold md:font-normal">
          3
        </p>
        <img
          src={[forward]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[50px] md:w-[9%] h-[50px] md:h-[5%] hover:cursor-pointer"
        />
        <img
          src={[next]}
          alt="previous btn"
          className="border-2 border-slate-400 p-2 w-[50px] md:w-[10%] h-[50px] md:h-[5%] hover:cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Pagination;
