import {termsAndConditions} from "@/data/terms&conditions";
import SideBar from "./sideBar";

const TermsContent = () => {
  return (
    <div className="text-left">
      <div className="fixed w-[25%] p-5 text-xl">
        <SideBar />
      </div>
      {termsAndConditions.map((value) => {
        return (
          <div key={value.id} className="ml-[40%] w-[60%]">
            <h1 className=" pb-10 text-left text-3xl font-bold leading-snug text-black " id={value.href} >
              {value.title}
            </h1>
            <h2 className="pb-5 text-xl font-light">
              {value.text.map((textData) => {
                return (
                  <div key={textData.id}>
                    {textData.desc.map((descData) => {
                      return (
                        <h1 key={descData} className="pb-5">
                          {descData}
                        </h1>
                      );
                    })}

                    {textData.list?.listItems.map((listData) => {
                      return (
                        <div key={listData.index}>
                          {textData.list.type === "ul" ? (
                            <ul className="list-disc pl-7">
                              <li className="pb-5">{listData}</li>
                            </ul>
                          ) : (
                            <ul className="pl-7">
                              <li className="pb-5">{listData}</li>
                              {/* {listData.list.listItems.index ===
                                listData.list.listItems.length - 1 && (
                                <li className="bg-slate-500 pb-5">
                                  {listData}
                                </li>
                              )} */}
                            </ul>
                          )}
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </h2>

            {value.table && (
              <table className="border-2 p-10">
                <thead>
                  <tr>
                    {value.table?.tableTitle.map((tableTitle) => {
                      return (
                        <th key={tableTitle.indexOf} className="p-5">
                          {tableTitle}
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    {value.table?.tableData.map((tableData) => {
                      return (
                        <td key={tableData.indexOf} className="p-5">
                          {tableData}
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        );
      })}
      <div className="relative z-50 -mb-52 h-40 bg-white">.</div>
    </div>
  );
};

export default TermsContent;
