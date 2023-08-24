import './AccountButton.css';
import accountIcon from '../../images/account-icon.svg';
import React from 'react';

function AccountButton(props) {
    return (
        <button onClick={props.navigateProfile} type='button' className='account-button button-hover'>
            Аккаунт
            <div  className='account-button__icon'>
                <img src={accountIcon} alt='Иконка' />
            </div>
        </button>
    )
}

export default AccountButton;