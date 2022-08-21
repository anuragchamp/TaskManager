import React from 'react';
import './Registration.css'

function Registration() {
    return (
        <div className='reg-container'>
            <h1 className='title'>Register here</h1>
            <div className='reg-form'>
                <div className='fl-input-container'>
                    <InputField className={'inlineInput'} placeholder={'First Name'} />
                    <InputField className={'inlineInput'} placeholder={'Last Name'} />
                </div>

            </div>
        </div>
    )
}

function InputField({ placeholder, className }) {
    return (
        <input className={className} type="text" placeholder={placeholder} />
    )
}

export default Registration;