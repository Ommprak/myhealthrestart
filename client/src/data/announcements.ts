
export interface Announcement {
  id: number;
  title: string;
  content: string;
  date: string;
  isImportant?: boolean;
}

export const announcements: Announcement[] = [
  {
    id: 1,
    title: "Revised Business Hours",
    content: "Please be informed that effective 2nd January 2025, our company's working days and hours (except Public Holiday) will be as follows:\n\nWorking Days: Monday to Thursday\nWorking Hours: 9:30 AM to 7:00 PM\n\nWe are confident that this revised working days and hours will be able to meet your needs and provide you the necessary service.",
    date: "2025-01-02",
    isImportant: true
  }
];
