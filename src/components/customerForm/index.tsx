import { wrap } from 'module'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const CustomerForm = (props) => {
  const { t } = useTranslation()
  const [customerInput, setCustomerInput] = useState({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })


  const handleContactFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    // const inputName = event.target.name
    // const inputValue = event.target.value.trim().toLowerCase()
    // validate(inputName, inputValue)

    setCustomerInput({ ...customerInput, [event.target.name]: event.target.value });

  }
  const addCustomer = (event) => {
    event.preventDefault();
    props.func(customerInput)
    setCustomerInput({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })


  }

  return (
    <div style={{ marginTop: "2rem" }}>
      <form onSubmit={addCustomer} >
        <div style={{ display: 'flex', flexWrap: "wrap" }}>
          <input className='customer-details' type="text" id="customerName" name="customerName" placeholder={t("customer_name")} value={customerInput.customerName} onChange={handleContactFormChange} required />
          <input className='customer-details' type="text" id="averageSales" name="averageSales" placeholder={t('average_sales')} value={customerInput.averageSales} onChange={handleContactFormChange} required />

          <input className='customer-details' type="text" id="paymentMethod" name="paymentMethod" placeholder={t("payment_method")} value={customerInput.paymentMethod} onChange={handleContactFormChange} required />
          <input className='customer-details' type="text" id="contactName" name="contactName" placeholder={t("contact_name")} value={customerInput.contactName} onChange={handleContactFormChange} />

          <input className='customer-details' type="text" id="customerPhone" name="customerPhone" placeholder={t("customer_phone")} value={customerInput.customerPhone} onChange={handleContactFormChange} />
          <input className='customer-details' type="text" id="customerEmail" name="customerEmail" placeholder={t("customer_email")} value={customerInput.customerEmail} onChange={handleContactFormChange} />
        </div>
        <input type="submit" value={"הוספה"} style={{ width: '10rem', marginRight: 5, marginBottom: "2rem" }} />
      </form>
    </div>
  )
}

export default CustomerForm