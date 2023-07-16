import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'; // Import yupResolver
import * as yup from 'yup'; // Import yup
import FormValueDisplay from './FormValueDisplay';

const validationSchema = yup.object().shape({
    name: yup.string().required('Name is required'), // Name field is required
    age: yup.number().typeError('Age must be a number').required('Age is required'), // Age field is required and must be a number
    number: yup
    .number()
    .typeError('Number must be a number')
    .required('Number is required')
    .positive('Number must be a positive number'), // Adding positive number validation for the "Number" field
  });
const Form = ({ userData }) => {
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }, // Access the form validation errors
      } = useForm({
        resolver: yupResolver(validationSchema), // Use yupResolver to apply validation
      });

  const onSubmit = (data) => {
    console.log(data);
    setFormData(data);
    reset(); // This will clear the form fields after submission.
  };
  

  const prepopulateFields = () => {
    // Prepopulate the fields using the userData prop
    if (userData) {
      setValue('name', userData.name);
      setValue('age', userData.age);
      setValue('gender', userData.gender);
      setValue('message', userData.message);
      setValue('number', userData.number);
      setValue('favoriteColor', userData.favoriteColor);
    } else {
      // If there's no userData, reset the form to empty
      reset({
        name: '',
        age: '',
        gender: 'male', // Set the default gender to 'male', you can change it as needed.
        message: '',
        number: '',
        favoriteColor: '#000000', // Set the default color to black, you can change it as needed.
      });
    }
  };
  
  

  // Call prepopulateFields when the component mounts or when userData changes
  React.useEffect(() => {
    prepopulateFields();
  }, [userData]);
  const [formData, setFormData] = React.useState(null);
  return (
    <>
        <form onSubmit={handleSubmit(onSubmit)}>
      <div className='card'>
        <label htmlFor="name">Name</label>
        <input  type="text" id="name" {...register('name')} />
        {errors.name && <span className="error-message">{errors.name.message}</span>} {/* Display the name validation error */}
      </div>
      <div className='card'>
        <label htmlFor="age">Age</label>
        <input  type="number" id="age" {...register('age')} />
        {errors.age && <span className="error-message">{errors.age.message}</span>} {/* Display the age validation error */}
      </div>
      <div className='card'>
        <label htmlFor="gender">Gender</label>
        <select id="gender" {...register('gender')}>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className='card'>
        <label htmlFor="message">Message</label>
        <textarea  id="message" {...register('message')} />
      </div>
      <div className='card'>
        <label htmlFor="number">Number</label>
        <input  type="tel" id="number" {...register('number')} />
        {errors.number && <span className='error-message'>{errors.number.message}</span>} {/* Display the number validation error */}
      </div>
      <div className='card'>
        <label htmlFor="favoriteColor">Favorite Color</label>
        <input type="color" id="favoriteColor" {...register('favoriteColor')} />
      </div>
      <button type="submit">Submit</button>
    </form>
    {formData && <FormValueDisplay formData={formData} />}
    </>
    
  );
};

export default Form;
