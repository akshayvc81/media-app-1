import { commonAPI } from "./commonApi";
import { server_url } from "./server_url";


// upload video APi

export const uploadVideoAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/allVideos`,video)
}

// get ALLUpload Videos Api

export const getALLVideosAPI=async()=>{
    return await commonAPI("GET",`${server_url}/allVideos`,"")
}


// getALL video API

export const getAVideoAPI=async(id)=>{
    return await commonAPI("GET",`${server_url}/allVideos/${id}`,"")
}

// delete video API

export const deleteVideoAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/allVideos/${id}`,{})
}

// add video history 

export const addVIdeoHistoryAPI=async(video)=>{
    return await commonAPI("POST",`${server_url}/history`,video)

}


// get video history
export const getVIdeoHistoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/history`,"")
}

// deleteVideoGHistory 

export const deleteVIdeoHistoryAPI=async(id)=>{
    return await commonAPI("DELETE",`${server_url}/history/${id}`,{})
}


// add category api
export const addCategoryAPI=async(category)=>{
    return await commonAPI("POST",`${server_url}/cateogary`,category)   
}



// get category
export const getCategoryAPI=async()=>{
    return await commonAPI("GET",`${server_url}/cateogary`,"")
}



// delete category
export const deleteCategoryAPI =async(id)=>{
    return await commonAPI("DELETE",`${server_url}/cateogary/${id}`,{})
}

// update cateogary

export const updateCategoryAPI = async (id,categoryDetails)=>{
    return await commonAPI("put",`${server_url}/cateogary/${id}`,categoryDetails)
}