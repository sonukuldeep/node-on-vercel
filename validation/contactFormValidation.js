const yup = require('yup')
const contactSchema = yup.object().shape({
    name: yup.string().required('Name is required'),
    currentWeight: yup.string(),
    goalWeight: yup.string(),
    email: yup.string().email().required('Email is required'),
    describeYourGoals: yup.string().required('Goals is required'),
})

module.exports = contactSchema