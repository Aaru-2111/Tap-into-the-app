import axios from "axios";
class HelloWorldService{
  executeHelloWorldService(){
     return axios.get('http://localhost:8080/cute');
//   console.log('executed service');
}
}
export default new HelloWorldService()


