import express from 'express'
const app = express()
app.get('/api/products',(req,res)=>{
    const products=[
        {id:'1',
            name:'Chair',
            img:'https://www.pexels.com/photo/brown-wooden-chair-116910/'
        },
        {
            id:'2',
            name:'bed',
            img:'https://www.pexels.com/photo/white-bed-linen-57686/'
        },
        {
            id:'3',
            name:'sofa',
            img:'https://www.pexels.com/photo/2-seat-orange-leather-sofa-beside-wall-1866149/'
        }
    ]

    if(req.query.search){
        const filterProduct=products.filter(product=>product.name.includes(req.query.search))
        res.send(filterProduct)
        return
    }
    setTimeout(() => {
        res.send(products)
        
    },3000);
})
const port=process.env.PORT||3000
app.listen(port,()=>{
    console.log(`server running on ${port}`)
})