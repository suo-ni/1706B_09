import { getAddress } from '../../api/address'

export let AddressAction = () => {
    return async (dispatch: Function) => {
        let data = await getAddress()
        console.log(data)
        if(data) {
            dispatch({
                type: 'GET_ADDRESS',
                payload: data
            })
        }
    }
}