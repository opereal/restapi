export const getAllBlogs = async () => {
    try{
        const response = await fetch("http://localhost:3001/blogs",{
            method: "GET",
})
    
// converts json response to javascript object
const data = await response.json();

if (!response.ok) {
    //handle error response
    return {error: data.error};
}

//handle success response
return data;
    } catch (error) {
        //handle server related errors
        return {error: "something went wrong"};
    }
};


export const getSingleBlog = async (title) =>{
    try{
        const response = await fetch(`http://localhost:3001/blogs/${title}`,{
            method: "GET",
})
    
// converts json response to javascript object
const data = await response.json();

if (!response.ok) {
    //handle error response
    return {error: data.error};
}

//handle success response
return data;
    } catch (error) {
        //handle server related errors
        return {error: "something went wrong"};
    } 
};