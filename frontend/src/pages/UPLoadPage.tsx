import { useState,FC,ChangeEvent  } from "react";
import axios from "axios";
import { IoCloudUploadOutline } from "react-icons/io5";
import { API_LINK } from "../constants/api";
const UpLoadPage: FC = () => {
  const [images, setImages] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState(false);
      const uploadImage = async (e: ChangeEvent <HTMLInputElement>) => {
        const selectedFile = e?.target?.files?.[0];
    if (
      !selectedFile?.type?.includes("image/png") &&
      !selectedFile?.type?.includes("image/jpeg") &&
      !selectedFile?.type?.includes("image/jpg")
    ) {
      return alert("ກະລຸນາເລືອກ png, jpeg, jpg");
    }
    setIsLoading(true);
    const formData = new FormData();
    formData.append("image", selectedFile);
   try{
    const response = await axios.post(`${API_LINK}/api/v1/upload`, formData);
    const data = await response.data;
    setImages(data.urls);
    setIsLoading(false);
   }catch(error){
    console.log(error);
    setIsLoading(false);
   }
}
  return (
    <div className="w-full min-h-screen flex justify-center items-center pt-[5rem]">
    <div >
    { isLoading ? 
    <div className="w-[300px] h-[300px] flex justify-center items-center  border-dashed border-2 rounded-md border-blue-400">
       <div className="w-10 h-10 border-4 border-blue-500  border-dashed rounded-full animate-spin"></div>
    </div> :
    <div className="w-[300px] h-[300px] relative border-dashed border-2 rounded-md border-blue-400">
        <div className="w-full h-full flex flex-col justify-center items-center text-blue-500">
            <IoCloudUploadOutline size={30}/>
            <p>ກະລຸນາເລືອກຮູບພາບ</p>
            <p>Jpg,Jpeg,Png...</p>
            <button className=" p-2 px-4 rounded-md bg-blue-500 hover:bg-blue-800 transition-all  text-white mt-5">ເລືອກຮູບພາບ</button>
        </div>
       <input type="file" onChange={uploadImage}  className="w-full h-full inset-0 absolute  opacity-0 cursor-pointer"/>
    </div> 
    }
     {images && <div className="mt-4" > {images?.map((url: string) => <img key={url} src={url} className="inline-block"/>)}</div>}
    </div>
  </div>
  )
}

export default UpLoadPage
