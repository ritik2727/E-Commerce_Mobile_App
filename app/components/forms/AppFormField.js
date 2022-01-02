import React from 'react';
import AppTextInput from '../AppTextInput';
import { useFormikContext } from 'formik';
import ErrorMessage from './ErrorMessage';


function AppFormField({name,width,...otherProps}) {
    const {
        setFieldTouched,
        setFieldValue,
        errors,
        touched,
        values
    } = useFormikContext();
  return (
   <>
        <AppTextInput 
            onBlur={()=>setFieldTouched(name)}
            {...otherProps}
            width={width}
            onChangeText={(text)=>setFieldValue(name,text)}
            value={values[name]}
        />
        <ErrorMessage error={errors[name]} visible={touched[name]}/>
   </>
   );
}



export default AppFormField;