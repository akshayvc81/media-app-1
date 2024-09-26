import axios from 'axios'

export const commonAPI = async(httpMethod,url,reqBody)=>{

    let reqConfiq={
        method:httpMethod,
        url,
        header:{
            "Content-Type":"application/json"
        },
        data:reqBody
    }
    return await axios(reqConfiq).then((res)=>{
        return res
    }).catch(err=>{
        return err
    })
}