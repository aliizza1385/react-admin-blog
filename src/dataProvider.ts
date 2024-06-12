import simpleRestDataProvider from "ra-data-simple-rest";
import {
  CreateParams,
  UpdateParams,
  DataProvider,
  fetchUtils,
} from "react-admin";


const endpoint = import.meta.env.VITE_SIMPLE_REST_URL
const baseDataProvider = simpleRestDataProvider(endpoint);

type UserParams = {
  id: string;
  username: string;
  password: string;
  email: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};


type PostParams = {
  id: string;
  title: string;
  content: string;
  user: string;
  tag: number;
  category: string;
  image: {
    rawFile: File;
    src?: string;
    title?: string;
  };
};


const createUserFormData = (
  params: CreateParams<UserParams> | UpdateParams<UserParams>
) => {
  const formData = new FormData();
  params.data.username && formData.append("username", params.data.username);
  params.data.password && formData.append("password", params.data.password);
  params.data.email && formData.append("email", params.data.email);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);

  return formData;
};


const createPostFormData = (
  params: CreateParams<PostParams> | UpdateParams<PostParams>
) => {
  const formData = new FormData();
  params.data.title && formData.append("title", params.data.title);
  params.data.content && formData.append("content", params.data.content);
  params.data.category && formData.append("category", params.data.category);
  params.data.tag && formData.append("tag", params.data.tag);
  params.data.user && formData.append("user", params.data.user);
  params.data.image?.rawFile && formData.append("image", params.data.image.rawFile);

  return formData;
};


export const dataProvider: DataProvider = {
  ...baseDataProvider,
  create: (resource, params) => {
    if (resource === "posts") {
      const formData = createPostFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }
    if (resource === "users") {
      const formData = createUserFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}`, {
          method: "POST",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }

    return baseDataProvider.create(resource, params);
  },
  update: (resource, params) => {
    if (resource === "users") {
      const formData = createUserFormData(params);
      formData.append("id", params.id);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }

    if (resource === "posts") {
      const formData = createPostFormData(params);
      return fetchUtils
        .fetchJson(`${endpoint}/${resource}/${params.id}`, {
          method: "PUT",
          body: formData,
        })
        .then(({ json }) => ({ data: json }));
    }
    return baseDataProvider.update(resource, params);
  },
};