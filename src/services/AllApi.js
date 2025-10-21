import { BaseUrl } from "./BaseUrl"
import CommonApi from "./CommonApi"

export const createData=async(reqBody)=>{
  return await CommonApi('post',`${BaseUrl}/contact`,reqBody)
}
export const getData =async()=>{
  return await CommonApi('get',`${BaseUrl}/contact`,"")
}
export const deleteData =async(id)=>{
  return await CommonApi("delete",`${BaseUrl}/contact/${id}`,{})
}
export const editData =async(id,reqBody)=>{
  return await CommonApi("patch", `${BaseUrl}/contact/${id}`,reqBody);
}