import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CustomerTable = (props) => {
    const { t } = useTranslation()
    console.log("data", props.data);
    const count = 10;
    const rows = () => {
        return Array.from(
            { length: 5 - props.data.length },
            (_, i) => (
                <tr>
                    <td ><div style={{ minHeight: "1.7vw" }}></div></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            )
        );
    }
    return (
        <div>
            <div style={{}}>
                <table style={{ width: "99.6%", padding: 5 }}>
                    <tr>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("customer_name")}</th>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("average_sales")}</th>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("payment_method")}</th>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("contact_name")}</th>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("customer_phone")}</th>
                        <th style={{ width: "16.6%", padding: 5 }}>{t("customer_email")}</th>
                    </tr>
                    {props.data.map(item => (<tr>
                        <td>{item.customerName}</td>
                        <td>{item.averageSales}</td>
                        <td>{item.paymentMethod}</td>
                        <td>{item.contactName}</td>
                        <td>{item.customerPhone}</td>
                        <td>{item.customerEmail}</td>
                    </tr>))}
         
                    {rows()}
                </table></div>

        </div>
    )
}

export default CustomerTable