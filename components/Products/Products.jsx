import {Grid} from '@material-ui/core'
import Product from "./Product/Product";

const products=[
    {id: 'E8350MA', name :'trophon®2', image:'https://services.gehealthcare.com//medias/E8350MA.jpg?context=bWFzdGVyfGltYWdlc3w4MjAyNHxpbWFnZS9qcGVnfGltYWdlcy9oNTkvaGI3Lzg4NDI4MTI4NTAyMDYuanBnfGZmM2VmNjAwYTRiNjcyMzYxZmY0MmM0ZGFiMjZjZGUzNjEyNmZmNzIxYzhiZmZhZGZlYjczODE5ZWRhOGUwNGM', description:'operator interaction details|box'},
    {id: 'E8365CS', name :'Venue 40 Carrying Case', image:'https://services.gehealthcare.com//medias?context=bWFzdGVyfGltYWdlc3wxMjYxNXxpbWFnZS9qcGVnfGltYWdlcy9oZDgvaDYxLzg3OTYzMzU4NjU4ODYuanBnfGQzNjBlNmUzM2I5ZmQyNGMyMTZkNDI3YTlhOWFlOTUwOWZiYjNhMGE1YzBiYjliNTIyNDkxZTcyZGZlNmIwMDA', description:'watertight caseDurable molded-in|air|feet'},
    {id: 'E8364BN', name :'TD 100® Master Spill Kit', image:'https://services.gehealthcare.com//medias/?context=bWFzdGVyfGltYWdlc3w0NzcwMnxpbWFnZS9qcGVnfGltYWdlcy9oNzUvaDkxLzg4MTY1NzAzNjgwMzAuanBnfGY0ODU3N2M5ZWI0Y2YxOWNjMzRlOGU1NWZkM2VlOTdhMDY2Mjg5MTI0NzM0ZTk5YThlMjYzMzJjNmJhMjUxODg', description:'Glutaraldehyde respirator Scoop|kit|bag'}

]

const Products = () => {
    return(
<main>
    <Grid container justify="center" spacing={4}>
        {products.map((product)=>(
            <Grid item key={products.id} xs={12} sm={6} md={4} lg={3}>
                <Product product={product}/>
            </Grid> 
        ))}
    </Grid>
</main>
    )

}

export default Products;