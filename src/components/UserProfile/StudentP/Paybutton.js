import React, { Component } from 'react'
 
import GPayButton from 'react-google-pay-button'
 
// allowed user payment methods 💰
const paymentMethods = [
  {
    type: 'CARD',
    parameters: {
      allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
      allowedCardNetworks: ['AMEX', 'DISCOVER', 'INTERAC', 'JCB', 'MASTERCARD', 'VISA']
    },
    tokenizationSpecification: {
      type: 'PAYMENT_GATEWAY',
      parameters: {
        'gateway': 'stripe',
        'stripe:version': '2019-03-14',
        'stripe:publishableKey': '<YOUR_PUBLIC_STRIPE_KEY>'
      }
    }
  },
  {
    type: 'PAYPAL',
    parameters: {
      'purchase_context': {
        'purchase_units': [{
          'payee': {
            'merchant_id': '<YOUR PAYPAL_ACCOUNT_ID>'
          }
        }]
      }
    },
    tokenizationSpecification: {
      type: 'DIRECT'
    }
  }
]
 
class Paybutton extends Component {
  loadPaymentDataHandler = paymentData => {
    const paymentToken = paymentData.paymentMethodData.tokenizationData.token
  }
 
  render () {
    return (
      <GPayButton
        totalPriceStatus={'FINAL'}
        totalPrice={'14.45'}
        currencyCode={'GBP'}
        countryCode={'GB'}
        allowedPaymentMethods={paymentMethods}
        development={true}
        merchantInfo={{
          merchantName: '<YOUR MERCHANT NAME>',
          // A Google merchant identifier issued after your website is approved by Google ✅
          merchantId: '<YOUR MERCHANT ID>'
        }}
        onLoadPaymentData={this.loadPaymentDataHandler}
      />
    )
  }
}

export default Paybutton