import axios from 'axios';





export const Registration = async (username, password, name, address, phone_number) => {

    return await axios.post('http://localhost:8000/registration', {
        username: username,
        password: password,
        name: name,
        address: address,
        phone_number: phone_number
    })


}


export const LogIn = async (username, password) => {

    return await axios.post('http://localhost:8000/login', {
        username: username,
        password: password

    })

}

export const GetAllProducts = async () => {

    return await axios.get('http://localhost:8000/products')


}


export const getProductById = (id) => {
    return axios.get(`http://localhost:8000/products/${id}`);
};


export const AddProduct = async (name, quantity, price, image, token) => {
    return await axios.post('http://localhost:8000/myProducts', {
        name: name,
        quantity: quantity,
        price: price,
        image: image


    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}






export const GetMyProducts = async (token) => {
    return await axios.get('http://localhost:8000/myProducts', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })

}



export const updateProduct = async (id, name, quantity, price, image, token) => {
    return await axios.put(`http://localhost:8000/myProducts`, {
        id: id,
        name: name,
        quantity: quantity,
        price: price,
        image: image


    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })

}





export const deleteProduct = async (id, token) => {
    
    return await axios.delete(`http://localhost:8000/deleteProduct/${id}`, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}



export const deleteAllProduct = async (token) => {
    
    return await axios.delete('http://localhost:8000/deleteAll', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}




export const updateProfile = async (name, address, phone_number, username, token) => {
    return await axios.put(`http://localhost:8000/merchant/${username}`, {
        name: name,
        address: address,
        phone_number: phone_number
    }, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}


export const changePassword = async (oldPassword, newPassword, token) => {

    return axios.put('http://localhost:8000/merchant/password', {
        oldPassword: oldPassword,
        newPassword: newPassword

    }, {
        headers: {
            Authorization : `Bearer ${token}`
        }
    })

}


export const deleteAccount = async (username, token) => {

    return axios.delete(`http://localhost:8000/merchant/${username}`, {
        headers: {
            'Authorization' : `Bearer ${token}`
        }
    })

}







