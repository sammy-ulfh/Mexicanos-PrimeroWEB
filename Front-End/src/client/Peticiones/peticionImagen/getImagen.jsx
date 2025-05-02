import fetchAuth from "/src/utils/fetchAuth";

const getImages = async () => {
    const response = await fetchAuth('http://localhost:3000/user/get/profile');
    const JSONresponse = await response.json();
    console.log("hello world", JSONresponse.response);
    return JSONresponse.response;
}
  
  export default getImages
  