type Url = string
type Json =
  | string
  | number
  | boolean
  | null
  | { [property: string]: Json }
  | Json[]

type TProductId = string

type TProductAttributes = {
  description: string
  shape: string
  hardiness: string
  taste: string
}

type TProduct = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  attributes: TProductAttributes
}

type TAPIAVODetailResponse = TProduct

type TAPIAvoResponse = {
  lenght: number
  data: TProduct[]
  error?: string
}

interface IColor {
  greenAvo: string
  yellowCorn: string
  brownClear: string
  brownDark: String
}

type TButtonActionProps = {
  isOn: boolean
  action: Function | null
}

type THeaderMode = 'Dark' | 'Clear'

type TProductCart = {
  id: TProductId
  name: string
  sku: string
  price: number
  image: Url
  amount: number
}
