const data = {
    name: "",
    currentWeight: "",
    goalWeight: "",
    email: "",
    describeYourGoals: ""
}
async function handleSubmit(e) {
    e.preventDefault()
    data.name = document.getElementById('Full-Name-3').value
    data.currentWeight = document.getElementById('Current-Weight').value
    data.goalWeight = document.getElementById('Goal-Weight').value
    data.email = document.getElementById('Email').value
    data.describeYourGoals = document.getElementById('Describe-Your-Goals').value

    try {
        const response = await fetch('/createNewContact', {
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            method: 'POST'
        })

        document.querySelector('#d9833c46 .form-content').style.display = "none"
        if (response.ok) {
            document.querySelector('#d9833c46 .sucess-message').style.display = "block"
        } else {
            document.querySelector('#d9833c46 .w-form-fail').style.display = "block"
        }

    } catch (error) {
        document.querySelector('#d9833c46 .w-form-fail').style.display = "block"

    }
}

document.getElementById('email-form').addEventListener('submit', handleSubmit)