// Add your code here

const body = document.querySelector('body')

function submitData(userName, userEmail) {
    const baseUrl = 'http://localhost:3000/users'
    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail
        })
    }

    return fetch(baseUrl, configurationObject)
    .then(res => res.json())
    .then(newUser => renderDataToDOM(newUser))
    .catch(error => {
        renderErrToDOM(error)
    })
}

function renderDataToDOM(newUser) {
    body.append(newUser.id)
}

function renderErrToDOM(error) {
    body.append(error)
}

submitData('steve', 'steve@steve.com')