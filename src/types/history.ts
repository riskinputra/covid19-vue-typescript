export interface HistoryState {
  history: HistoryTypes;
  error: boolean;
}

export interface HistoryTypes {
  nodes: NodesList;
  links: LinkList;
}

export interface NodesList {
  [index: number]: {
    id: string;
    kasus: string;
    provinsi: string;
    provinsiid: string;
    umur: string;
    umurtext: string;
    gender: string;
    genderid: string;
    status: string;
    statusid: string;
    wn: string;
    wnid: string;
    pengumuman: string;
    penularan: string;
    rs: string;
    rsid: string;
  };
}

export interface LinkList {
  [index: number]: {
    source: number;
    target: number;
  };
}