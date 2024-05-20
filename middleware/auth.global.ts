export default defineNuxtRouteMiddleware((to, from) => {
  console.log("hello from middleware auth");
  
const isLoggedIn = false 
if(isLoggedIn){
  return navigateTo(to.fullPath)
}

return navigateTo("/")
  })
  