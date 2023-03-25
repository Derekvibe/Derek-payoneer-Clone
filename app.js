let names = document.getElementById('name')
let mail = document.getElementById('mail')
let phone = document.getElementById('phone')
let form = document.getElementById('form')
let errorElement = document.getElementById ('error')

form.addEventListener('submit', (e) => {
    let messages = []
        if (names.value === '' || names.value == null){
            messages.push('Name is Required !!!!')
        }

        if (phone.value === '' || phone.value == null) {
            messages.push('Phone Number Needed')
        }

        else if (phone.value.length <=10){
            messages.push('Input a valid phone number')
        }


    if (messages.length >0){
        e.preventDefault()
        errorElement.innerText = messages.join (', ')
    }

    })