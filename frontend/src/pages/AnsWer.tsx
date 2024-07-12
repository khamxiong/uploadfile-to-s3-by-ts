import { FC } from "react";
import CodeImage from '../assets/code.png'
import OutputImage from '../assets/result.jpeg'
  const AnsWer:FC = () => {
    return (
      <div className="w-full min-h-screen flex flex-col gap-1 px-[10%] py-[5rem]">
         <section>
           <div className="w-full flex gap-2 items-center">
              <h1 className="text-xl font-bold ">ຄໍາຖາມ:</h1>
              <p className="text-base">
                 ວິທີການຊອ່ນການເອີ້ນໃຊ້ api ຈາກ Brower (How to hide the Network API calls from a browser)?
              </p>
           </div>
         </section>
         <section className="w-full flex gap-1 items-center" >
              <h1 className="text-xl font-bold ">ຄໍາຕອບ:</h1>
              <p>ເຮົາສາມາດເຮັດໄດ້ໂດຍການໃຊ້ server rendering ຢ່າງເຊັ່ນ Nextjs Nuxtjs ... ເເຕ່ວ່າເຮົາບໍ່ສາມດຊ່ອນໄດ້ຖ້າວ່າຖ້າຫາກມັນເປັນ client side rendering</p>
         </section>
         <section className="w-full flex gap-1 flex-col mt-5">
             <p><span className="text-red-500">ຕົວຢ່າງ :</span>ການໃຊ້ Nextjs ໃນການເອີ້ນໃຊ້ API</p>
            <div className=" grid grid-cols-2 w-full gap-4">
              <div>
                  <p>Code:</p>
                  <img src={CodeImage} alt="code" />
              </div>
              <div>
                  <p>Coutput:</p>
                  <img src={OutputImage} alt="code" />
                  <div className="mt-10">
                      <p className="text-base font-medium text-red-600">ສັງເກດ:<small className="text-black"> ເຮົາຈະບໍ່ເຫັນການເອີ້ນໃຊ້ API ຈາກ Browser</small></p>
                  </div>
              </div>
            </div>
         </section>
      </div>
    );
  };
  
  export default AnsWer;
  