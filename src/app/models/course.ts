export interface Course {
    _id?: string;
    title: string;
    tags: string[];
    isPublished: boolean;
    author: string;
    price: number;
    date: string;
    image: File;
}
