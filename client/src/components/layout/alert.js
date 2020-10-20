import React from 'react';
import { connect } from 'react-redux'

const Alert = ({alerts}) => {

   return alerts !==null&&
    alerts.length > 0&&
    alerts.map(alert=>{
        return (
            <div className={`alert ${alert.alertType}`}>{alert.msg}</div>
        )
    })
}

const mapStateToProps = ({alerts}) =>({
    alerts
})

export default connect(mapStateToProps)(Alert)
