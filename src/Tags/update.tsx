import { Create, SimpleForm, TextInput, PasswordInput, Edit, ImageInput, ImageField, required } from 'react-admin';

export const updata_tags = () => (
    <Edit>
         <SimpleForm>
             <TextInput source="title" validate={[required()]} fullWidth/>
         </SimpleForm>
    </Edit>
);