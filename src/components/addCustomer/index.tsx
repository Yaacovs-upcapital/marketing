import { Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const AddCustomer = (props) => {
    const { t } = useTranslation()

    const [customerList, setCustomerList]: any = useState([])

    const [customerInput, setCustomerInput] = useState({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })
  const [modalOpen, setModalOpen] = React.useState(false);

  const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #2F439A',
    boxShadow: 24,
    p: 4,
    // pb: 4,
    borderRadius: 4,
    textAlign: 'center',
  };
  const handleContactFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    // const inputName = event.target.name
    // const inputValue = event.target.value.trim().toLowerCase()
    // validate(inputName, inputValue)

    setCustomerInput({ ...customerInput, [event.target.name]: event.target.value });

  }
  const addCustomer = (event) => {
    // event.preventDefault();
    // // props.func(customerInput)
    // const updatedCustomerList = [...customerList];
    // updatedCustomerList.push(customerInput);
    // setCustomerList(updatedCustomerList);
    props.addData(customerInput)
    setCustomerInput({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })

  }
  return (
    <div>
         <Button variant="contained" onClick={() => setModalOpen(!modalOpen)} >{t('add_customer')}</Button>
                  <Modal
                    open={modalOpen}
                    onClose={() => setModalOpen(!modalOpen)}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box component="div" sx={modalStyle}>
                      <Typography sx={{ color: "#2F439A", fontWeight: "bold", fontSize: "2vw" }} id="modal-modal-title"  >
                        {t('customer_details')}
                      </Typography>
                      <Typography component='div' id="modal-modal-description" sx={{ mt: 2 }}>

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
                      </Typography>
                    </Box>
                  </Modal>
    </div>
  )
}

export default AddCustomer