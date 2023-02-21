let BaseUrl;
if(process.env.NODE_ENV ==="production"){
      BaseUrl = process.env.PUBLIC_URL;
}
else{
      BaseUrl = "http://localhost:5000";
}
export default BaseUrl;