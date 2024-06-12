// in src/posts.jsx
import { List,ImageField ,Datagrid, TextField, EmailField, BooleanField, ImageInput, DateField, ReferenceField } from 'react-admin';

export const categories_list = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="slug"/>
        </Datagrid>
    </List>
);