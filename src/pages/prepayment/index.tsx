import React from 'react'
import './prepayment.css'
import { useTranslation } from 'react-i18next';

import { Envelope, Telephone, Waze } from '../../assets/icons';
import egg from "../../assets/images/egg.png";
import dunBradstreet from "../../assets/images/dun-bradstreet.png";
import iso from "../../assets/images/iso.png";
const Prepayment = () => {
  const { t } = useTranslation()

  return (
      <div className='contact-page-bg '>
        <div className='container'>
          <div><p className="contact-page-title" >{t("sign_up_free")}<span style={{color:'red'}}>.</span></p></div>

          <div style={{}} className="contact-page">
            <div>
              <div >
                <p className="contact-title">{t("contact_form")}:</p>
              </div>
              <div>
                <form style={{}}>
                  <div className="text-input"><input type="text" id="fname" name="fname" placeholder={t("full_name")} required /><div className="input-line"></div></div>
                  <div className="text-input"><input type="text" id="lname" name="lname" placeholder={t('phone')} required /><div className="input-line"></div></div>

                  <div className="text-input"><input type="text" id="email" name="email" placeholder={t("email")} required /><div className="input-line"></div></div>
                  <div className="text-input"><input type="text" id="company" name="company" placeholder={t("company")} /><div className="input-line"></div></div>

                  <div className="text-input"><input type="text" id="message" name="message" placeholder={t("message")} /><div className="input-line"></div></div>
                  <div><input type="submit" value={"שליחה"} /></div>
                </form>
              </div>
            </div>
            <div className="info" >
              <div className='info-details'>
                <h2 className="contact-title" >{t("contact_info")}</h2>
                <div style={{ textAlign: "right" }}><Envelope style={{ height: "30px", width: "30px" }} />info@upcapital.io </div>
                <div style={{ textAlign: "right" }}><Telephone style={{ height: "30px", width: "30px" }} /> 073-7801153</div>
                <div style={{ textAlign: "right" }}><Waze style={{ height: "30px", width: "30px" }} /> {t("address_text")}</div>
              </div>
              <div>
                <div className="contact-title" style={{ paddingRight: "0" }}>{t("additional_info")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("terms")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("policy")}</div>
                <div className="contact-page-detail" style={{ paddingRight: "0" }}>{t("accessibility")}</div>
                <div>
                  <div className="">

                    <img style={{ width: "110px", height: "auto" }} src={dunBradstreet} />
                    <img style={{ width: "112px", height: "auto" }} src={iso} />



                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
        
 <div className="row" style={{position:"fixed", bottom: 0, width: "100%" }}>
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