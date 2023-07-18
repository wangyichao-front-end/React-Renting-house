import React,{ useEffect } from "react"
import OrderHeader from "../../components/PubHeader"
import UserInfo from "./UserInfo"
import OrderList from "./OrderList"
import { useSelector } from "react-redux"
import { withRouter } from "react-router-dom"


const Order  = (props) =>{

    const city = useSelector(state => state.city)
    const user = useSelector(state => state.login.user)

    useEffect(() => {
        if (!user.token) {
            props.history.push("/login")
        }
    }, [])

    return(
        <div>
            <OrderHeader title={"订单评价"}/>
            <UserInfo city={ city } user={ user }/>
            <OrderList user={ user }/>
        </div>
    )
}

export default withRouter(Order)