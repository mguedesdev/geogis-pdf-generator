interface Items {
  id: string;
  type: 'paragraph' | 'image';
  title: string;
  content?: string;
}

export default Items;
