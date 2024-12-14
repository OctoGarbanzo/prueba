export interface DbConfig {
  host: string;
  user: string;
  password: string;
  database: string;
  port: number;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface RegisterFormData extends LoginFormData {
  nombreSolicitante: string;
  edadSolicitante: number;
  generoSolicitante: 'Masculino' | 'Femenino';
  numeroCedulaSolicitante: string;
  profesionOficio: string;
  salario: number;
  telefono: string;
  direccion: string;
  motivoSolicitud: string;
  aporteDinero: number;
}

export interface AuthContextType {
  user: any;
  login: (token: string, userData: any) => void;
  logout: () => void;
  isAdmin: boolean;
}