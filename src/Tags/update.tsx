import { SimpleForm, TextInput, Edit, required } from 'react-admin';

export const updata_tags = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="title" validate={[required()]} fullWidth />
        </SimpleForm>
    </Edit>
);