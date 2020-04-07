export interface routerConfigType {
  routers: configItemType[]
}

export interface configItemType{
  path: string,
  component: Function,
  children?: configItemType[],
  to?: string
}

export interface actionType{
  type: string,
  payload: any
} 

export interface ActionType{
  type: string,
  payload: any
} 
export interface CategoryItem{
  id: string,
  name: string,
  wap_banner_url: string,
  [key: string]: any
}
export interface SubCategoryItem{
  id: string,
  name: string,
  wap_banner_url: string,
  [key: string]: any
}