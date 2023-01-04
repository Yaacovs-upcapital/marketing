import { t } from 'i18next'
import React from 'react'
import './policy.css'

const PrivacyPolicy = () => {
  return (
    <div>
      <div className="policy-title">
        <p>
          {t('privacy_policy')}
        </p>
      </div>
      <div className='terms-container container'>
        <ol>
          <li style={{margin:"1rem auto"}}>
            <strong><p className='p-title'>{t('general')}</p></strong>
            <ul>
              <li>
                {t('privacy_1')}

              </li>
              <li>
                {t('privacy_2')}

              </li>
              <li>
                {t('privacy_3')}

              </li>
            </ul>
          </li>
          <strong><p className='p-title'>
            {t('privacy_4')}

          </p></strong>
          <li  style={{margin:"1rem auto"}}>
            <strong><p className='p-title'>
              {t('privacy_5')}

            </p></strong>
            <ul>
              <li>
                {t('privacy_6')}

              </li>
              <li>
                {t('privacy_7')}

              </li>
              <li>
                {t('privacy_8')}

              </li>
              <li>
                {t('privacy_9')}

              </li>
            </ul>
          </li>
          <li  style={{margin:"1rem auto"}}>
            <strong><p className='p-title'>
              {t('privacy_10')}

            </p></strong>
            <ul>
              <li>
                <p>
                  {t('privacy_11')}

                </p>
                <ul>
                  <li>
                    {t('privacy_12')}

                  </li>
                  <li>
                    {t('privacy_13')}

                  </li>
                  <li>
                    {t('privacy_14')}

                  </li>
                  <li>
                    {t('privacy_15')}

                  </li>
                  <li>
                    {t('privacy_16')}

                  </li>
                  <li>
                    {t('privacy_17')}

                  </li>
                  <li>
                    {t('privacy_18')}

                  </li>
                  <li>
                    {t('privacy_19')}

                  </li>
                  <li>
                    {t('privacy_20')}

                  </li>
                  <li>
                    {t('privacy_21')}

                  </li>
                  <li>
                    {t('privacy_22')}

                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li  style={{margin:"1rem auto"}}>
            <strong><p className='p-title'>
              {t('privacy_23')}

            </p></strong>
            <ul>
              <li>
                {t('privacy_24')}

              </li>
              <li>
                <p>
                  {t('privacy_25')}

                </p>
                <ul>
                  <li>
                    {t('privacy_26')}

                  </li>
                  <li>
                    {t('privacy_27')}

                  </li>
                  <li>
                    {t('privacy_28')}

                  </li>
                  <li>
                    {t('privacy_29')}

                  </li>
                  <li>
                    {t('privacy_30')}

                  </li>
                  <li>
                    {t('privacy_31')}

                  </li>
                  <li>
                    {t('privacy_32')}

                  </li>
                  <li>
                    {t('privacy_33')}

                  </li>
                </ul>
              </li>
              <li>
                {t('privacy_34')}

              </li>
            </ul>
          </li>
          <li  style={{margin:"1rem auto"}}>
            <strong>
              <p className='p-title'>
                {t('privacy_35')}
              </p>
            </strong>
            <ul>


              <li>
                {t('privacy_36')}
              </li>
            </ul>
          </li>
          <li>
            <strong><p className='p-title'>
              {t('privacy_23')}

            </p></strong>
            <ul>
              <li>
                {t('privacy_38')} <u>info@upcapital.io</u>

              </li>

            </ul>
          </li>
          <li>
            <strong><p className='p-title'>
              {t('privacy_39')}

            </p></strong>
            <ul>
              <li>
                {t('privacy_40')}

              </li>
            </ul>
          </li>
        </ol>
        <div className='last-update'>{t('last_update')}: 11.10.2020</div>

      </div>
    </div>
  )
}

export default PrivacyPolicy