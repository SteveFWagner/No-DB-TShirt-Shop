const orders = []

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
        // console.log("id @ controller: ", id)
        let {color, size, qty, price} = req.body
        const index = orders.findIndex(order=> order.id ==id)
        // console.log("index @ controller: ", index)
        price = req.body.qty*10

        let currentOrder = orders[index]
        // console.log("currentOrder @ controller: ", currentOrder)

        currentOrder = {
            id: currentOrder.id,
            color: color || currentOrder.color,
            size: size || currentOrder.size,
            qty: qty || currentOrder.qty,
            price: price || currentOrder.price
        }
        orders.splice(index,1,currentOrder)
        res.status(200).send(orders)
    }
}