const orders = [
    {
        id:0,
        color:`Black`,
        size:`L`,
        qty:1,
        price:10,
    }
]

let id = 0
let price = 0


module.exports={
    displayOrders: (req,res)=> {
        res.status(200).send(orders)
    },
    createOrder: (req,res)=>{
        const {color,size,qty} = req.body
        id++
        price = qty * 10
        orders.push({id,color,size,qty,price})
        res.status(200).send(orders)
    },
    deleteOrder:(req,res)=>{
        const {id} = req.params
        const index = orders.findIndex(order=>order.id==id)
        orders.splice(index,1)
        res.status(200).send(orders)
    },
    editOrder: (req,res)=>{
        const {id} = req.params
        let {color, size, qty, price} = req.body
        const index = orders.findIndex(order=> order.id ==id)
        price = qty*10
        orders.splice(index,1,{id,color, size, qty, price})
        res.status(200).send(orders)
    }
}