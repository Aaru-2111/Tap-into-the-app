import axios from "axios";
class HelloWorldService{

  executeHelloWorldService(){
     return axios.get('http://localhost:8080/cute');
//   console.log('executed service');
}

executebean(){
  return axios.get('http://localhost:8080/cute-bean');
}

executevariablepath(name)
{
  return axios.get(`http://localhost:8080/cute-bean/path-variable/${name}`)
}
executeerror()
{
  return axios.get('http://localhost:8080/errormessage');
}

}
export default new HelloWorldService()


