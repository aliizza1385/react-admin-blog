import { Create, SimpleForm, TextInput, PasswordInput, Edit, ImageInput, ImageField, required, ReferenceInput } from 'react-admin';

export const updata_commet = () => (
    <Edit>
         <SimpleForm>
             <TextInput source="content" validate={[required()]} fullWidth/>
             <ReferenceInput source="user"  reference="users"/>
             <ReferenceInput source="post"  reference="posts"/>
         </SimpleForm>
    </Edit>
);