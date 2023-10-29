"use client";
// import jsonData from "@/constants/footerlinks.json";
// import { useState } from "react";

// import React from "react";

// const Footer = () => {
//   const [data, setdata] = useState(jsonData);
//   return (
//     <section className="h-full bg-[#232F3E] w-full text-white">
//       <div className="flex justify-center gap-20 border-2 p-12">
//         <div>
//           {data?.map((item, index) => (
//             <div key={item?.link1?.id}>
//               <h5 className="font-bold text-[16px]">{item?.link1?.heading}</h5>
//               <ul className="flex flex-col gap-1 text-[14px] ">
//                 {item?.link1?.links.map((list, subIndex) => (
//                   <li key={list.id}>{list}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div>
//           {data?.map((item, index) => (
//             <div key={item?.link2?.id}>
//               <h5 className="font-bold text-[16px]">{item?.link2?.heading}</h5>
//               <ul className="flex flex-col gap-1 text-[14px] ">
//                 {item?.link2?.links.map((list, subIndex) => (
//                   <li key={subIndex + 1}>{list}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div>
//           {data?.map((item, index) => (
//             <div key={item?.link3?.id}>
//               <h5 className="font-bold text-[16px]">{item?.link3?.heading}</h5>
//               <ul className="flex flex-col gap-1 text-[14px]">
//                 {item?.link3?.links.map((list, subIndex) => (
//                   <li key={subIndex + 2}>{list}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         <div>
//           {data?.map((item, index) => (
//             <div key={item?.link4?.id}>
//               <h5 className="font-bold text-[16px]">{item?.link4?.heading}</h5>
//               <ul className="flex flex-col gap-1 text-[14px]">
//                 {item?.link4?.links.map((list, subIndex) => (
//                   <li key={subIndex + 3}>{list}</li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Footer;

import React, { useState } from "react";

import jsonData from "@/constants/footerlinks.json";

const Footer = () => {
  const [data] = useState(jsonData);

  return (
    <section className="h-full bg-[#232F3E] w-full text-white">
      <div className="flex flex-wrap justify-center gap-2 border-2 p-12">
        {data?.map((item, index) => (
          <div key={`${item?.link1?.id}-${index}`}>
            <h5 className="font-bold text-[16px]">{item?.link1?.heading}</h5>
            <ul className="flex flex-col gap-1 text-[14px]">
              {item?.link1?.links.map((list, subIndex) => (
                <li key={`${list.id}-${subIndex}`}>{list}</li>
              ))}
            </ul>
          </div>
        ))}

        {data?.map((item, index) => (
          <div key={`${item?.link2?.id}-${index}`}>
            <h5 className="font-bold text-[16px]">{item?.link2?.heading}</h5>
            <ul className="flex flex-col gap-1 text-[14px]">
              {item?.link2?.links.map((list, subIndex) => (
                <li key={`${list.id}-${subIndex}`}>{list}</li>
              ))}
            </ul>
          </div>
        ))}

        {data?.map((item, index) => (
          <div key={`${item?.link3?.id}-${index}`}>
            <h5 className="font-bold text-[16px]">{item?.link3?.heading}</h5>
            <ul className="flex flex-col gap-1 text-[14px]">
              {item?.link3?.links.map((list, subIndex) => (
                <li key={`${list.id}-${subIndex}`}>{list}</li>
              ))}
            </ul>
          </div>
        ))}

        {data?.map((item, index) => (
          <div key={`${item?.link4?.id}-${index}`}>
            <h5 className="font-bold text-[16px]">{item?.link4?.heading}</h5>
            <ul className="flex flex-col gap-1 text-[14px]">
              {item?.link4?.links.map((list, subIndex) => (
                <li key={`${list.id}-${subIndex}`}>{list}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Footer;
