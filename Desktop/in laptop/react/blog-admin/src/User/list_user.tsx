// in src/posts.jsx
import { List,ImageField ,Datagrid, TextField, EmailField, BooleanField, ImageInput } from 'react-admin';

export const list_user = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="username"/>
            <EmailField source="email"/>
            <ImageField source='image'/>
        </Datagrid>
    </List>
);