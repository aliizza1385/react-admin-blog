// in src/posts.jsx
import { List, Datagrid, TextField } from 'react-admin';

export const tag_list = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" />
            <TextField source="slug" />
        </Datagrid>
    </List>
);