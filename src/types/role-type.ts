export interface IRole {
  id: number;
  name: string;
}

declare global {
  interface CustomJwtSessionClaims {
    unsafeMetadata: {
      role: string;
    };
  }
}
