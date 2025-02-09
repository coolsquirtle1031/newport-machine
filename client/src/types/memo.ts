export type Memo = {
  id: number;
  title: string;
  text: string;
  last_modified: string; // Using string because dates come as ISO strings from the database
  last_practiced?: string | null; // Optional, can be null
  category_id?: number | null; // Optional, since it can be null
};
