import { SimpleForm, TextInput, Edit, ImageInput, ImageField, required, ReferenceInput, ReferenceArrayInput } from 'react-admin';

export const updata_Post = () => (
  <Edit>
    <SimpleForm>
      <TextInput source="title" validate={[required()]} fullWidth />
      <TextInput source="content" validate={[required()]} fullWidth />
      <ReferenceInput source="category" reference="category" />
      <ImageInput source="image" >
        <ImageField source="src" title="title" />
      </ImageInput>
      <ReferenceArrayInput source="tag" reference="tags" fullWidth />
    </SimpleForm>
  </Edit>
);