import React, { useState } from 'react'
import './prepayment.css'
import { useTranslation } from 'react-i18next';

import { Envelope, Telephone, Waze } from '../../assets/icons';
import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
import useWindowSize from '../../components/windowSize';
import CustomerTable from '../../components/customerTable';
import { Box, Button, Modal, Typography } from '@mui/material';
import PhoneInput from 'react-phone-number-input'
import { json } from 'stream/consumers';

const Prepayment = () => {
  const { t } = useTranslation()

  const [vendorInput, setVendorInput] = useState({ fname: '', phone: '', email: '', company: '', message: '' })
  const [customerList, setCustomerList]: any = useState([])
  const [customerInput, setCustomerInput] = useState({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })
  const [modalOpen, setModalOpen] = React.useState(false);

  const [directionValue, setDirectionValue] = useState('')
  setTimeout(() => {
    const obj: any = document.getElementById('page')
    const valueAfterTimeout = getComputedStyle(obj, null).direction
    setDirectionValue(valueAfterTimeout)
  }, 100);
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
    direction:directionValue
  };
  const handleContactFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    const inputName = event.target.name
    const inputValue = event.target.value.trim().toLowerCase()
    validate(inputName, inputValue)

    setCustomerInput({ ...customerInput, [event.target.name]: event.target.value });

  }
  const addCustomer = (event) => {
    event.preventDefault();
    // props.func(customerInput)
    const updatedCustomerList = [...customerList];
    updatedCustomerList.push(customerInput);
    setCustomerList(updatedCustomerList);
    setCustomerInput({ customerName: '', averageSales: '', paymentMethod: '', contactName: '', customerPhone: '', customerEmail: '' })

  }

  const handleFormChange = (event) => {
    event.preventDefault()
    console.log("value changed: ", event.target.value)
    const inputName = event.target.name
    const inputValue = event.target.value.trim().toLowerCase()
    validate(inputName, inputValue)

    setVendorInput({ ...vendorInput, [event.target.name]: event.target.value });

  }

  const sendMail = async (event) => {
    event.preventDefault();

    if (customerList.length == 0) {
      setErrors({ ...errors, customers: t("error_customers") })
     
    } else {
      const msg = emailTemplate(vendorInput)
      setVendorInput({ fname: '', phone: '', email: '', company: '', message: '' })

      const reqop = {
        method: 'POST',
        body: JSON.stringify({
          message2: msg,
          subject: 'Vendor Info',
          // email: "mariano@upcapital.io"
          email: "yaacovs@upcapital.io"
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
      console.log(reqop.body);

      // await fetch("http://localhost:3500/api/mailer", reqop)
      await fetch("https://app.upcapital.io/node//mailer", reqop)
        .then(res => console.log(res))

      setVendorInput({ fname: '', phone: '', email: '', company: '', message: '' })
      setCustomerList([])
      setErrors({ ...errors, customers: t("") })

    }
  }
  // console.log('vendorInput', vendorInput);

 
  let emailTemplate = (obj: any) => {
    const listToMail: any = customerList.map((item, i) =>
      (`<div>${i + 1}. Customer name - ${item.customerName}, Average sales - ${item.averageSales}, Payment terms -${item.paymentMethod}, Contact name - ${item.contactName}, Customer phone - ${item.customerPhone}, Customer email - ${item.customerEmail}</div>`))
    return (
      ` <div>
        <div>
          <div style={{ display: "flex", justifyContent: "right" }}> name- ${obj.fname}</div>
          <div style={{ display: "flex", justifyContent: "right" }}> phone-${obj.phone}</div>
          <div style={{ display: "flex", justifyContent: "right" }}>email- ${obj.email}</div>
          <div style={{ display: "flex", justifyContent: "right" }}>company -${obj.company}</div>
        </div>
        <div>
        ${listToMail}
        </div>
      </div >`)
  }
  // emailTemplate(vendorInput)

  // const getCustomertList = (data) => {
  //   setCustomertList(data)
  // }

  // console.log('list', customerList)
  const [errors, setErrors] = useState({ fname: '', phone: '', email: '', company: '', customers: '', averageSales: '', paymentMethod: '', contactName: '', customerEmail:'',customerPhone:'',customerName:'' })
  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "")
        return false;
    }
    return true;
  }


  const validate = (inputName, inputValue) => {
    if (inputName == 'email') {
      if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(inputValue)) {
        setErrors({ ...errors, email: t("error_email") })
      } else {
        setErrors({ ...errors, email: '' })
      }
    } else if (inputName == 'phone') {
      if (!/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|([71,72,73,74,75,76,77]{2}\d{7})|[5]{1}\d{8})$/.test(inputValue)) {
        setErrors({ ...errors, phone: t("error_phone") })

      } else {
        setErrors({ ...errors, phone: '' })
      }
    } else if (inputName == 'fname') {
      if (inputValue.length == 0) {
        setErrors({ ...errors, fname: t("required") })
      } else {
        setErrors({ ...errors, fname: '' })
      }
    } else if (inputName == 'company') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, company: t("required") })

      } else {
        setErrors({ ...errors, company: '' })
      }
    }
    else if (inputName == 'customers') {

      if (customerList.length == 0) {

        setErrors({ ...errors, customers: t("error_customers") })

      } else {
        setErrors({ ...errors, customers: '' })
      }
    }
    else if (inputName == 'averageSales') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, averageSales: t("required") })

      } else {
        setErrors({ ...errors, averageSales: '' })
      }
    }
    else if (inputName == 'paymentMethod') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, paymentMethod: t("required") })

      } else {
        setErrors({ ...errors, paymentMethod: '' })
      }
    }
    else if (inputName == 'contactName') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, contactName: t("required") })

      } else {
        setErrors({ ...errors, contactName: '' })
      }
    }
    else if (inputName == 'customerEmail') {

      if (!/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(inputValue)) {

        setErrors({ ...errors, customerEmail: t("required") })

      } else {
        setErrors({ ...errors, customerEmail: '' })
      }
    }
    else if (inputName == 'customerPhone') {

      if (!/^\+?(972|0)(\-)?0?(([23489]{1}\d{7})|([71,72,73,74,75,76,77]{2}\d{7})|[5]{1}\d{8})$/.test(inputValue)) {


        setErrors({ ...errors, customerPhone: t("required") })

      } else {
        setErrors({ ...errors, customerPhone: '' })
      }
    }
    else if (inputName == 'customerName') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, customerName: t("required") })

      } else {
        setErrors({ ...errors, customerName: '' })
      }
    }
  }

  

  // console.log('direction', directionValue);
  return (
    <div>
      <div className='prepayment-page-bg ' id='page' style={directionValue == 'ltr' ? { backgroundImage: 'linear-gradient(to left,#fff,#e5e8ff)' } : { backgroundImage: 'linear-gradient(to right,#fff,#e5e8ff)' }}>
        <div className={`${useWindowSize() > 1550 ? 'container-big' : 'container'}`}>
          <div><p className="prepayment-page-title" >{t("sign_up_free")}<span style={{ color: 'red' }}>.</span></p></div>

          <div style={{}} className="contact-page">
            <div ><div>
              <p className="contact-title">{t("prepayment_second_title")}:</p>
            </div>
              <form onSubmit={sendMail} style={{}}>
                <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} value={vendorInput.fname} onChange={handleFormChange} required /></div>
                <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.fname ? '' : errors.fname}</div>

                <div className="text-input"><input type="text" id="phone" name="phone" placeholder={t('phone')} value={vendorInput.phone} onChange={handleFormChange} required /></div>
                <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.phone ? '' : errors.phone}</div>

                <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} value={vendorInput.email} onChange={handleFormChange} required /></div>
                <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.email ? '' : errors.email}</div>

                <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} value={vendorInput.company} onChange={handleFormChange} /></div>
                <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.company ? '' : errors.company}</div>



                {/* <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} value={vendorInput.message} onChange={handleFormChange} /></div> */}
                <div><input disabled={!(errors.email == '' && errors.company == '' && errors.phone == '' && !isEmpty(vendorInput))} type="submit" value={t('send')} /></div>
              </form>
            </div>
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
                      <div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="customerName" name="customerName" placeholder={t("customer_name")} value={customerInput.customerName} onChange={handleContactFormChange} required />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.customerName ? '' : errors.customerName}</div>
                        </div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="averageSales" name="averageSales" placeholder={t('average_sales')} value={customerInput.averageSales} onChange={handleContactFormChange} required />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.averageSales ? '' : errors.averageSales}</div>

                        </div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="paymentMethod" name="paymentMethod" placeholder={t("payment_method")} value={customerInput.paymentMethod} onChange={handleContactFormChange} required />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.paymentMethod ? '' : errors.paymentMethod}</div>

                        </div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="contactName" name="contactName" placeholder={t("contact_name")} value={customerInput.contactName} onChange={handleContactFormChange} />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.contactName ? '' : errors.contactName}</div>
                        </div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="customerPhone" name="customerPhone" placeholder={t("customer_phone")} value={customerInput.customerPhone} onChange={handleContactFormChange} />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.customerPhone ? '' : errors.customerPhone}</div>

                        </div>
                        <div>
                          <input className='customer-details' style={{ textAlign: directionValue == 'ltr' ? 'left' : 'right' }} type="text" id="customerEmail" name="customerEmail" placeholder={t("customer_email")} value={customerInput.customerEmail} onChange={handleContactFormChange} />
                          <div style={{ color: 'red', fontSize: "0.7rem" }}>{!customerInput.customerEmail ? '' : errors.customerEmail}</div>
                        </div>
                      </div>
                      <input disabled={!(errors.email == '' && errors.phone == '' && !isEmpty(vendorInput))} type="submit" value={"??????????"} style={{ width: '10rem', marginRight: 5, marginBottom: "2rem" }} />
                    </form>
                  </Typography>
                </Box>
              </Modal>
              <div style={{ color: 'red', fontSize: "0.7rem" }}>{customerList.length != 0 ? '' : errors.customers}</div>
            </div>
          </div>

          <div><CustomerTable data={customerList} /></div>
        </div>
      </div>

      <div className="row contact-footer">
        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div>{t("rights")}</div>
        </div>

        <div className="col-lg-6 col-md-12 col-sm-12" style={{ textAlign: "center" }}>
          <div><img src={egg} width="20%" height="20%" /></div>
        </div>

      </div>
    </div>
  )
}

export default Prepayment