
const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
    }

    if (!values.id) {
        errors.id = 'Required';
    } else if (values.id > 2000) {
        errors.id = 'id should be less than 2000';
    }
    if (!values.shortDes) {
        errors.shortDes = 'Required';
    } else if (values.shortDes.length < 10 || values.shortDes.length>100) {
        errors.shortDes = 'shortDes should be more than 10 characters and less than 100 charecters';
    }
    if (!values.des) {
        errors.des = 'Required';
    } else if (values.des.length < 20 || values.des.length>500) {
        errors.des = 'shortDes should be more than 20 characters and less than 500 charecters';
    }

    if (!values.price) {
        errors.price = 'Required';
    } 
    if (!values.image) {
        errors.image = 'Required';
    } 
    if (!values.image1) {
        errors.image1 = 'Required';
    } 

    return errors;
};
export default validate;