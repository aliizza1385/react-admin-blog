import { SimpleForm, TextInput, Edit, ImageInput, ImageField, required } from 'react-admin';

export const updata_user = () => (
   <Edit>
      <SimpleForm>
         <TextInput source="username" validate={[required()]} fullWidth />
         <TextInput source="email" validate={[required()]} fullWidth />
         <TextInput source="password" validate={[required()]} fullWidth />
         <ImageInput source="image" validate={[required()]}>
            <ImageField source="src" title="title" />
         </ImageInput>
      </SimpleForm>
   </Edit>
);