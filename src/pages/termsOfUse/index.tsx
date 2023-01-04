import { useTranslation } from 'react-i18next';
import './termsOfUse.css'

const TermOfUse = () => {
    const { t } = useTranslation();

    return (
        <div style={{ direction: "rtl" }}>
            <div className='bg-img'>
                <h2>{t('terms')}</h2>
            </div>

            <div className="terms-container container">
                <ol>
                    <li>
                        <strong><p className='p-title'>{t('general')}</p></strong>
                        <ul>
                            <li>{t('terms_of_use_1')}</li>
                            <li>{t('terms_of_use_2')}</li>
                            <li>{t('terms_of_use_3')}</li>
                            <li>
                               {t('terms_of_use_4')}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong><p className='p-title'>
                            {t('use_of_site')}
                        </p></strong>
                        <ul>
                            <li>
                            {t('terms_of_use_5')}
                            </li>
                            <li>
                            {t('terms_of_use_6')}
                            </li>
                            <li>
                            {t('terms_of_use_7')}
                            </li>
                            <li>
                            {t('terms_of_use_8')}
                               
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong><p className='p-title'>
                            {t('privacy')}
                        </p></strong>
                        <ul>
                            <li>
                            {t('terms_of_use_9')}
                            </li>
                            <li>
                            {t('terms_of_use_10')}
                            </li>
                            <li>
                            {t('terms_of_use_11')}
                            </li>
                            <li>
                            {t('terms_of_use_12')}
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong><p className='p-title'>
                            {t('liability')}
                        </p></strong>
                        <ul>
                            <li>
                            {t('terms_of_use_13')}
                            </li>
                            <li>
                            {t('terms_of_use_14')}
                            
                            </li>
                            <li>
                            {t('terms_of_use_15')}
                                
                            </li>
                            <li>
                            {t('terms_of_use_16')}
                               </li>
                            <li>
                            {t('terms_of_use_17')}
                                
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong><p className='p-title'>
                            {t('property')}
                        </p></strong>
                        <ul>
                            <li>
                            {t('terms_of_use_18')}
                                
                            </li>
                            <li>
                            {t('terms_of_use_19')}
                                
                            </li>
                        </ul>
                    </li>
                    <li>
                        <strong><p className='p-title'>
                            {t('jurisdiction')}
                        </p></strong>
                        <ul>
                            <li>
                            {t('terms_of_use_20')}
                                
                            </li>
                        </ul>
                    </li>
                </ol>
                <div className='last-update'>{t('last_update')}: 11.10.2020</div>
            </div>

        </div>
    )
}

export default TermOfUse