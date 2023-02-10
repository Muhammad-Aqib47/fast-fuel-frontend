import React from 'react'
import Orders from './orders'
import SellerSideBar from './side-bar'

function SellerDashBoard() {
    return (
        <div>
            <SellerSideBar />
            <Orders />
        </div>
    )
}

export default SellerDashBoard