import React, { useContext, useState } from "react";
import { MyContext } from "../../pages/_app";
import Link from "next/link";
import vocabularyCategory from "@/data/vocabulary-category";
const parentCategory = Object.keys(vocabularyCategory);

function VocabularyLayout({ children }) {
  const { selectedWord } = useContext(MyContext);
  const [sidebar, setSidebar] = useState("");
  const handleSidebar = () => {
    setSidebar(sidebar == "open" ? "close" : "open");
    if (sidebar == "open") {
      document.body.style.overflow = "auto";
    } else {
      document.body.style.overflow = "hidden";
    }
  };

  return (
    <div className="">
      <div className="lg:flex ">
        <div className="px-2  bg-gray-50 py-2 rounded-sm ">
          <button
            type="button"
            className="mb-4 flex-row-reverse gap-2 flex lg:hidden "
            onClick={handleSidebar}
          >
            <span>{sidebar == "open" ? "Close" : "Open"} sidebar</span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
            </svg>
          </button>

          <aside
            id="default-sidebar"
            className={`fixed  lg:sticky lg:top-20 h-[90vh]  left-0 overflow-y-auto overflow-x-hidden    transition-transform  -translate-x-full lg:translate-x-0  ${
              sidebar == "close" && " -translate-x-full"
            } ${sidebar == "open" && "translate-x-0"} `}
            aria-label="Sidebar"
          >
            <div className=" w-full px-1 pb-4  bg-gray-50 dark:bg-gray-800">
              <ul className="space-y-2 font-medium">
                <li >
                  <Link
                    href="/vocabulary"
                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                  >
                    <img className="w-5" src="/assets/images/vocabulary/category.svg" alt="" />
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Vocabulary
                    </span>
                  </Link>
                </li>
                {parentCategory.map((category, i) => {
                  return (
                    <div key={"categorys" + i}>
                      {vocabularyCategory[category].map((item, i) => {
                        return (
                          <li key={"itemx" + i}>
                            <Link
                              href={item.link}
                              className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                              <svg
                                className="flex-shrink-0 w-5 h-5 transition duration-75  dark:group-hover:text-white"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  d="m18.707 12.707-3 3a1 1 0 0 1-1.414-1.414L15.586 13H6a1 1 0 0 1 0-2h9.586l-1.293-1.293a1 1 0 0 1 1.414-1.414l3 3a1 1 0 0 1 0 1.414z"
                                  fill="#f97c4b"
                                />
                              </svg>
                              <span className="flex-1 ml-3 whitespace-nowrap">
                                {item.category}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </div>
                  );
                })}
              </ul>
            </div>
          </aside>
        </div>

        <div className="w-full flex justify-center ">
          <div className="text-center ">
            <h3 className="my-3 font-bold text-4xl text-slate-700 uppercase">
              {selectedWord}
            </h3>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VocabularyLayout;
