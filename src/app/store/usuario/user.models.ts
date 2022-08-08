import { UsuarioEntity } from "src/app/models/backend/usuario.entity";
export { UsuarioEntity as UserResponse } from "src/app/models/backend/usuario.entity";


export interface EmailPasswordCredentials {
  email: string;
  password: string;
}


export interface UserRequest extends UsuarioEntity {
  password : string;
}


export type UserCreateRequest = Omit<UserRequest, 'id' | 'token' | 'imagen' | 'admin' >;

