
const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    } else if (values.name.length > 15) {
        errors.name = 'Must be 15 characters or less';
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
    if (!values.image2) {
        errors.image2 = 'Required';
    } 
    if (!values.Brand) {
        errors.Brand = 'Please select brand';
    } 
    if(values.sizes.length<1){
        errors.sizes = 'please select at-least one size'
    }

    return errors;
};
export default validate;