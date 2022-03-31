import { ethers } from "ethers"
import { useState, useEffect } from "react"




const MintNFT = ({contractAddress, signer, provider, contract}) => {
    const [formData, setFormData] = useState({MetaDataURI: ""})

    const handleChange = (e) => {
        //console.log('current form value: ', e.target.value)
        setFormData({MetaDataURI: e.target.value})
    }


    // useEffect(()=>{
    //     console.log('getProps: ', getProps())
    //     console.log('please contract: ', contract)
    // },[getProps, contract])

    console.log(contractAddress, signer, provider, contract)

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('mn hande submit sanity check')
        console.log('mn contract: ', contract)
        console.log('mn contract address: ', contractAddress)
        console.log('mn signer: ', signer)
        console.log('mn provider: ', provider)

        mintToken(contract, signer, formData.MetaDataURI)
    }

    const getMintedStatus = async (MetaDataURI) => {
        const result = await contract.isContentOwned(MetaDataURI)
        console.log("🚀 ~ result", result);
    }

    const mintToken = async (contract, signer, MetaDataURI) => {
        console.log('success 1')
        const connection = contract.connect(signer)
        console.log('success 2')
        const addr = connection.address
        console.log('success 3', addr)
        const result = await contract.payToMint(addr, MetaDataURI, {
            value: ethers.utils.parseEther('0.05')
        })
        console.log('success 4')
        await result.wait()
        console.log('success 5')
        getMintedStatus(MetaDataURI)
    }

    return ( 
        <div>
            <form onSubmit={handleSubmit}>
                IFPS URI: <input type="text" name="MetaDataURI" onChange={handleChange}/>
                <button type="submit">submit</button>
            </form>
        </div>
     );
}
 
export default MintNFT;