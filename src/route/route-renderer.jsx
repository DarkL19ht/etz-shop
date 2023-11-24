
import routeConfig from './route.config'
import { useRoutes } from 'react-router'

export default function RouteRenderer() {
 const routes = useRoutes(routeConfig)
  return  routes
}
