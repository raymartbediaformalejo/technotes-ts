export type TNoteId = { id: string };

export type TInitialNote = {
  user: string;
  title: string;
  text: string;
};

export type TUpdateNote = TNoteId &
  TInitialNote & {
    // id: string;
    completed: boolean;
  };

export type TNotesResponse = TUpdateNote & {
  // completed: boolean;
  createdAt: string;
  // id: string;
  _id: string;
  // text: string;
  ticket: number;
  // title: string;
  updatedAt: string;
  // user: string;
  username: string;
  __v: 0;
};

export type TNotesResponseArray = TNotesResponse[];

export type TNotesMsgResponse = {
  message: string;
};
