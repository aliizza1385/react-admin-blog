// in src/posts.jsx
import { List,ImageField ,Datagrid, TextField, EmailField, BooleanField, ImageInput, DateField, ReferenceField, ReferenceManyField, SingleFieldList, ChipField, ReferenceArrayField } from 'react-admin';

export const list_post = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title"/>
            <TextField source="content" label="Content" cellClassName="truncate-text" stripTags={true} />
            <DateField source="created_at"/>
            <ImageField source='image'/>
            <ReferenceArrayField reference="tags" source="tag" label="Tags" />

        </Datagrid>
    </List>
);