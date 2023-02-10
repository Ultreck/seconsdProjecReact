
export const useStorage = () => {
 const getIt = (key) => {
   return JSON.parse(localStorage.getItem(key));
 }
 const setIt = (key, data) => {
   localStorage.setItem(key, JSON.stringify(data));
 }

 return {getIt, setIt}
}
// const data = [{name:"Adeolu", age:30, gender:"Male"}, {name:"Adeolu", age:30, gender:"Male"}]

// export const useStorage = () => {
//   localStorage.setItem("Users", JSON.stringify("data"))
//   JSON.parse(localStorage.getItem("Users"))
// const setIt = (key, data) => {
//    localStorage.setItem(key, JSON.stringify(data))
// }
// const getIt = (key) => {
//   return JSON.parse(localStorage.getItem(key))
// }
// }

