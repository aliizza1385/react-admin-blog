// in src/posts.jsx
import { List ,Datagrid, TextField, DateField, ReferenceField } from 'react-admin';

export const list_comment = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="content"/>
            <DateField source="created_at"/>
            <ReferenceField source="post" reference="posts"/>
            <ReferenceField source="user" reference="users"/>
        </Datagrid>
    </List>
);