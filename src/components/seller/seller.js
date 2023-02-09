import React from 'react'
import Orders from './orders'
import SellerSideBar from './side-bar'

function SellerDashboard() {
    return (
        <div>
            <SellerSideBar />
            <Orders />
        </div>
    )
}

export default SellerDashboard