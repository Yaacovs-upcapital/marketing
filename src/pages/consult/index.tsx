import React, { useState } from 'react'
import './consult.css'
import { useTranslation } from 'react-i18next';

import { Envelope, Telephone, Waze } from '../../assets/icons';
import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
import useWindowSize from '../../components/windowSize';
import { Box, Button, Modal, Snackbar, Stack, Typography } from '@mui/material';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const Consult = () => {
  const { t } = useTranslation()
  const [open, setOpen] = React.useState(false);

  const [vendorInput, setVendorInput] = useState({ fname: '', phone: '', email: '', company: '', message: '' })
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
    const msg = emailTemplate(vendorInput)
    const reqop = {
      method: 'POST',
      body: JSON.stringify({
        message2: msg,
        subject: t('consult'),
        email: "mariano@upcapital.io"
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    }
    console.log(reqop.body);

    // await fetch("http://localhost:3500/api/mailer", reqop)
    await fetch("https://app.upcapital.io/node//mailer", reqop)
      .then(res => console.log(res))
      setOpen(true)
      setVendorInput({ fname: '', phone: '', email: '', company: '', message: '' })
  }
  const [errors, setErrors] = useState({ fname: '', phone: '', email: '', company: '' })

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
        setErrors({ ...errors, fname: t("error_name") })
      } else {
        setErrors({ ...errors, fname: '' })
      }
    } else if (inputName == 'company') {

      if (inputValue.length == 0) {

        setErrors({ ...errors, company: t("error_company") })

      } else {
        setErrors({ ...errors, company: '' })
      }
    }
  }
  let emailTemplate = (obj: any) => {
    return `<div>
  <div> name- ${obj.fname}<div>
  <div> name- ${obj.phone}<div>
  <div>email- ${obj.email}<div>
  <div>company - ${obj.company}<div>
  <div>message - ${obj.message}<div>
  </div>`
  }
  // emailTemplate(vendorInput)
  const [directionValue, setDirectionValue] = useState('')
  setTimeout(() => {
    const obj: any = document.getElementById('page')
    const valueAfterTimeout = getComputedStyle(obj, null).direction
    setDirectionValue(valueAfterTimeout)
  }, 100);
  console.log('direction', directionValue);

  const isEmpty = (obj) => {
    for (var key in obj) {
      if (obj[key] !== null && obj[key] != "")
        return false;
    }
    return true;
  }


  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };
  return (
    <div>
      <div className='contact-page-bg ' id='page' style={directionValue == 'ltr' ? { backgroundImage: 'linear-gradient(to left,#fff,#e5e8ff)' } : { backgroundImage: 'linear-gradient(to right,#fff,#e5e8ff)' }}>
        <div className={`${useWindowSize() > 1550 ? 'container-contact' : 'container'}`}>
          <div><p className="consult-page-title" >{t("consult")}<span style={{ color: 'red' }}>.</span></p></div>

          <div style={{}} className="contact-page">
            <div ><div>
              <p className="contact-title">{t("contact_form")}:</p>
            </div>
              <div>
                <form onSubmit={sendMail} style={{}}>
                  <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} value={vendorInput.fname} onChange={handleFormChange} required /></div>
                  <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.fname ? '' : errors.fname}</div>

                  <div className="text-input"><input type="text" id="phone" name="phone" placeholder={t('phone')} value={vendorInput.phone} onChange={handleFormChange} required /></div>
                  <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.phone ? '' : errors.phone}</div>

                  <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} value={vendorInput.email} onChange={handleFormChange} required /></div>
                  <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.email ? '' : errors.email}</div>

                  <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} value={vendorInput.company} onChange={handleFormChange} /></div>
                  <div style={{ color: 'red', fontSize: "0.7rem" }}>{!vendorInput.company ? '' : errors.company}</div>

                  <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} value={vendorInput.message} onChange={handleFormChange} /></div>
                  <div><input disabled={!(errors.email == '' && errors.company == '' && errors.phone == '' && !isEmpty(vendorInput))} style={{ marginTop: '2rem' }} type="submit" value={t('send')} /></div>
                </form>
                <Stack spacing={2} sx={{ width: '100%' }}>
                  <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                      {t('success')}
                    </Alert>
                  </Snackbar>
                </Stack>
              </div></div>
            <div className="info" >
              <div className='info-details'>
                <h2 className="contact-title" >{t("contact_info")}</h2>
                <div style={{ textAlign: "right" }}><Envelope style={{ height: "30px", width: "30px" }} />info@upcapital.io </div>
                <div style={{ textAlign: "right" }}><Telephone style={{ height: "30px", width: "30px" }} /> 073-7801153</div>
                <div style={{ textAlign: "right" }}><Waze style={{ height: "30px", width: "30px" }} /><a style={{ textDecoration: "none", color: "#2f439a" }} href="https://www.google.com/maps/place/Ha-Rakun+St+2,+Hod+HaSharon/@32.1333401,34.8992777,17z/data=!3m1!4b1!4m5!3m4!1s0x151d37a203e81299:0x7719e5e2c71c2b78!8m2!3d32.1333401!4d34.9014664" target="blank">{t("address_text")}</a></div>
              </div>
              <div>
                <div className="contact-title" style={{ paddingRight: "0" }}>{t("additional_info")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("terms")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("policy")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("accessibility")}</div>
                <div>
                  <div >

                    <img style={{ width: "110px", height: "auto" }} src={dunBradstreet} />
                    <img style={{ width: "112px", height: "auto" }} src={iso} />



                  </div>

                </div>
              </div>
            </div>
          </div>
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

export default Consult