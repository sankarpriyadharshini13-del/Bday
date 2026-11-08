// app/data/imageAlts.ts
// Descriptive alt text for the product gallery images.
export const imageAlts: Record<string, string> = {
  'brandbird-1': 'Custom polycarbonate stickers made in Chennai by Janani Labels',
  'brandbird-2': 'Polyester labels for industrial use, Janani Labels Chennai',
  'brandbird-3': 'Custom vinyl labels and durable vinyl stickers printed by Janani Labels, Chennai',
  'brandbird-4': 'Barcode labels for inventory management, Janani Labels Chennai',
  'brandbird-5': 'High-visibility warning and caution labels, Janani Labels Chennai',
  'brandbird-6': 'Serial number stickers for equipment tracking, Janani Labels Chennai',
  'brandbird-7': 'Industrial grade polycarbonate labels made in Chennai',
  'brandbird-8': 'Custom polycarbonate stickers in assorted sizes and shapes',
  'brandbird-9': 'Equipment identification labels, Janani Labels Chennai',
  'brandbird-10': 'Brand identity polycarbonate stickers, Janani Labels Chennai',
  'brandbird-11': '3M adhesive polycarbonate labels, Janani Labels Chennai',
  'brandbird-12': 'Weather-resistant polycarbonate stickers, Janani Labels Chennai',
};

export const altFor = (img: string) => imageAlts[img] ?? 'Polycarbonate stickers by Janani Labels, Chennai';
