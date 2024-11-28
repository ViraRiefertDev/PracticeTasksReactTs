import { ProductionItemWrapper } from './styles'

function ProductItem ({product}){
  return(
    <ProductionItemWrapper>
      <div product ={product}>{product}</div>
    </ProductionItemWrapper>
  )
}

export default ProductItem