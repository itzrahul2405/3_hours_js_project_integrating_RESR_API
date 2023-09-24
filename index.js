const btn = document.querySelector('button')

btn.addEventListener('click', function(){

    const obj = {
        'candyName': document.getElementById('candyname').value,
        'description': document.getElementById('description').value,
        'price': document.getElementById('price').value,
        'quantity': document.getElementById('quantity').value 
    }


    // const uniqueKey = new Date().getMilliseconds()
    // localStorage.setItem(uniqueKey, obj)

    axios.post('https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData',obj)
    .then(res => {

        // const list = document.querySelector('.list')

        // newItem = document.createElement('li')
        // newItem.innerText = JSON.stringify(obj) 

        // const btn1 = document.createElement('button')
        // btn1.innerText = 'Button 1'
        // btn1.style.background = 'aqua'
        // btn1.style.margin = '5px'

        // // btn1.addEventListener('click', function(){
            
        // //     const data = axios.get('https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData')
        // //     .then(res => {
        // //         const key = res._id
        // //         console.log(key)
        // //     })
        // // })



        // const btn2 = document.createElement('button')
        // btn2.innerText = 'Button 2'
        // btn2.style.background = 'yellow'
        // btn2.style.margin = '5px'

        // // btn1.addEventListener('click', function(){
            
        // // })



        // const btn3 = document.createElement('button')
        // btn3.innerText = 'Button 3'
        // btn3.style.background = 'orange'
        // btn3.style.margin = '5px'

        // // btn1.addEventListener('click', function(){
            
        // // })



        // newItem.appendChild(btn1)
        // newItem.appendChild(btn2)
        // newItem.appendChild(btn3)
        // list.appendChild(newItem)


        
    })
    .catch(err => console.error(err))

    populatelist()
})




function populatelist(){

    const list = document.querySelector('.list')
    list.innerHTML = ''

    const data = axios.get('https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData')
                    .then(response => {
                    
                        const data = response.data

                        console.log(data)


                        for (let i=0; i<data.length; i++){
                            const key = data[i]._id

                            const list = document.querySelector('.list')

                            const newItem = document.createElement('li')
                            newItem.innerText = JSON.stringify(data[i] )  
                    
                            const btn1 = document.createElement('button')
                            btn1.innerText = 'Button 1'
                            btn1.style.background = 'aqua'
                            btn1.style.margin = '5px'
                    
                            btn1.addEventListener('click', function(){
                                

                                const url = 'https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData' + '/' + key

                                const tempData = axios.get(url)
                                .then(res => {
                                    
                                    const tempData = res.data 
                                    const prevquantity = tempData.quantity

                                    console.log(prevquantity)
                                    const updatedquantity = prevquantity - 1
                                    
                                    axios.put(url, {
                                        'candyName': tempData.candyName,
                                        'description': tempData.description,
                                        'price': tempData.price,
                                        'quantity': updatedquantity
                                    })
                                    .then(() => {
                                        populatelist()
                                    })
                                    .catch(err => console.error(err))

                                    
                                })
                                .catch(err => console.error(err))
                            })
                    
                    
                    
                            const btn2 = document.createElement('button')
                            btn2.innerText = 'Button 2'
                            btn2.style.background = 'yellow'
                            btn2.style.margin = '5px'
                    
                            btn2.addEventListener('click', function(){
                                

                                const url = 'https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData' + '/' + key

                                const tempData = axios.get(url)
                                .then(res => {
                                    
                                    const tempData = res.data 
                                    const prevquantity = tempData.quantity

                                    const updatedquantity = prevquantity - 2
                                    axios.put(url, {
                                        'candyName': tempData.candyName,
                                        'description': tempData.description,
                                        'price': tempData.price,
                                        'quantity': updatedquantity
                                    })
                                    .then(res => populatelist())
                                    .catch(err => console.error(err))

                                    
                                })
                                .catch(err => console.error(err))
                            })
                    
                    
                    
                    
                            const btn3 = document.createElement('button')
                            btn3.innerText = 'Button 3'
                            btn3.style.background = 'orange'
                            btn3.style.margin = '5px'
                    
                            btn3.addEventListener('click', function(){
                                

                                const url = 'https://crudcrud.com/api/6bf1025c5087435b9f82c884662a9a01/candyData' + '/' + key

                                const tempData = axios.get(url)
                                .then(res => {
                                    
                                    const tempData = res.data 
                                    const prevquantity = tempData.quantity

                                    const updatedquantity = prevquantity - 3
                                    axios.put(url, {
                                        'candyName': tempData.candyName,
                                        'description': tempData.description,
                                        'price': tempData.price,
                                        'quantity': updatedquantity
                                    })
                                    .then(res => populatelist())
                                    .catch(err => console.error(err))

                                    
                                })
                                .catch(err => console.error(err))
                            })
                    
                    
                    
                    
                            newItem.appendChild(btn1)
                            newItem.appendChild(btn2)
                            newItem.appendChild(btn3)
                            list.appendChild(newItem)

                        }
                        
                    })
                    .catch(err => console.error(err))

                    


    
}

populatelist()