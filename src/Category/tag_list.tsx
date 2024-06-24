// in src/posts.jsx
import { List ,Datagrid, TextField } from 'react-admin';

export const categories_list = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name"/>
            <TextField source="slug"/>
        </Datagrid>
    </List>
);