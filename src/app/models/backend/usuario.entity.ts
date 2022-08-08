export interface UsuarioEntity {
  id : string;
  email: string;
  username: string;
  token: string;
  nombre: string;
  apellido: string;
  imagen: string;
  admin: boolean;
  rol?: string;
}
