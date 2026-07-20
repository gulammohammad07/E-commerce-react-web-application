import braintree from "braintree";

const gateway = new braintree.BraintreeGateway({

    environment: braintree.Environment.Sandbox,

    merchantId:"9t2qcbyq8p8zv267",
    
    

    publicKey:"4rgn69wkj355vks7",
    
    privateKey: "14a620df0affb763c49bfa381bd0e252",
    
});

export default gateway;