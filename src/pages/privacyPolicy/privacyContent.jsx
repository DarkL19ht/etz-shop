import privacyPolicy from "@/data/privacyPolicy";
import SideBar from "./sideBar";

const PrivacyContent = () => {
  return (
    <div className="text-left">
      <div className="fixed w-[25%] p-5 text-xl z-0">
        <SideBar />
      </div>
      {privacyPolicy.map((value) => {
        return (
          <div key={value.id} className="ml-[40%] w-[60%]">
            <h1 className=" pb-10 text-left text-3xl font-bold leading-snug text-black ">
              {value.title}
            </h1>
            {value.header && <h1 className=" pb-10 text-left text-xl font-bold leading-snug text-black ">
              {value.header}
            </h1>}
            <h2 className="pb-5 text-xl font-light">
              {value.text.map((textData) => {
                return (
                  <div key={textData.id}>
                    {textData.desc?.map((descData) => {
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
                            </ul>
                          )}
                        </div>
                      );
                    })}
                    {textData.list?.listItems2 && (
                      <ul className="">
                        {textData.list.listItems2.map((list2) => {
                          return (
                            <li key={list2.index} className="ml-16 pb-5 list-disc">
                              {list2}
                            </li>
                          );
                        })}
                      </ul>
                    )}
                    {textData.list?.listItems3 && (
                      <ul className="">
                        {textData.list.listItems3.map((list3) => {
                          return (
                            <li key={list3.index} className=" pb-5 ml-24">
                              {list3}
                            </li>
                          );
                        })}
                      </ul>
                    )}
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
      <div className="bg-white h-40 -mb-52 relative z-50">
.
      </div>
    </div>
  );
};

export default PrivacyContent;
