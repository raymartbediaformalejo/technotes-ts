export type TRoles = string[];

export type TUserId = { id: string };

export type TInitialUser = {
  username: string;
  password?: string;
  roles: TRoles;
};

export type TUser = TUserId &
  TInitialUser & {
    // id: string;
    active: boolean;
  };

export type TUsersResponse = TUser & {
  // active: boolean;
  // id: string;
  // roles: TRoles;
  // username: string;
  __v: number;
  _id: string;
};

export type TUserMsgResponse = {
  message: string;
};
