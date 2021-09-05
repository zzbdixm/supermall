import axios from 'axios'
export function request(config){
    const instance = axios.create({
          baseURL:"http://152.136.185.210:7878/api/m5",
          timeout:5000,
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        })
   //2.拦截器
  instance.interceptors.request.use(config => {
   // console.log(config)
    return config
  },err => {
    console.log(err)
  });
  instance.interceptors.response.use(res => {
    return res.data
  },err => {
    console.log(err)
  });
  //发送网络请求
  return instance(config)
}
