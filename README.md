# react-hook-form-challeneg
The Git repository contains a React application for a form built using React Hook Form and Yup for form validation. The application allows users to input their name, age, gender, message, number, and favorite color. Upon submission, the form data is displayed below the form.

The `App` component serves as the main component and renders the `UserForm` component and the `UserDataDisplay` component. It manages the form data using the `useState` hook, and when the form is submitted, it updates the `userData` state with the form data using the `handleFormData` function.

The `UserForm` component uses React Hook Form and Yup for form validation. It defines a `validationSchema` using Yup with rules for each form field. The form is then created using the `useForm` hook, and the `handleSubmit` function handles the form submission. The form fields are prepopulated with any existing user data using the `userData` prop passed from the `App` component.

The `FormValueDisplay` component displays the form data received as a prop in a structured manner. It is used to show the form data below the form after submission.

The `UserDataDisplay` component displays the user data received as a prop in a structured manner. It is used to show the user data below the form upon form submission.

The UI is styled using CSS classes defined in the `styles.css` file. The form fields are displayed in separate cards, and error messages are shown below the fields for invalid input. The form submission displays the user data in a card format, with the user's favorite color shown as a colored box.

Overall, the application provides a simple and efficient way to handle form validation and display user data in a React application. The code can be easily extended or modified to include additional form fields or validation rules as needed. Developers can explore the code to understand how to implement form handling and validation using React Hook Form and Yup in a React application.
