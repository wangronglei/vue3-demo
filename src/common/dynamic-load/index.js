import router from '@/router'

const isLoaded = item => {
  if (router.hasRoute(item.name)) {
    return true
  }
  router.addRoute(item)
  return false
}

export default (routeData) => async to => {
  const arr = Array.isArray(routeData) ? routeData : [routeData]
  if (arr.every(item => isLoaded(item))) {
    return true
  }

  return to
}
