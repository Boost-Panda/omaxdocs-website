export type Service = {
  name: string;
  description: string;
  image: string;
};

export const services: Service[] = [
  {
    name: 'Dental Implants and Bone Grafts',
    description:
      'Dental implants provide a reliable foundation for replacement teeth. These artificial roots, made of titanium, are surgically inserted into the jawbone. Over time, they integrate with your bone, offering a stable base for long-lasting dental restorations.',
    image: '/site-images/gallery/athlete-female.webp',
  },
  {
    name: 'Wisdom Tooth Removal',
    description:
      'Wisdom teeth, or third molars, are the last to emerge, usually between the ages of 17 and 25. Our clinic offers wisdom teeth removal to address pain, crowding, and other issues that these teeth might cause as they develop.',
    image: '/services/wisdom-tooth-removal.webp',
  },
  {
    name: 'Sedation',
    description:
      'All surgical procedures can be rendered with sedation. Patient safety and comfort is important to us. All of our providers are certified in IV sedation techniques.',
    image: '/site-images/gallery/12.webp',
  },
  {
    name: 'Pediatric Oral Surgery',
    description:
      'Our pediatric oral surgery services cater to the unique needs of children, from routine extractions to complex surgeries. We focus on providing a safe and gentle experience for our young patients.',
    image: '/site-images/gallery/13.webp',
  },
  {
    name: 'Lesions & Cancer Of The Mouth',
    description:
      'We diagnose and treat various conditions affecting the oral cavity, including benign lesions and oral cancer. Our approach is comprehensive, aiming to ensure the health and well-being of each patient.',
    image: '/services/oral-lesions-cancer.jpg',
  },
  {
    name: 'Facial Fractures',
    description:
      'Facial fractures can affect the jaw, cheekbones, nose, and eye sockets. Our clinic specializes in repairing these injuries, restoring facial structure and function after accidents or trauma.',
    image: '/site-images/gallery/athlete-male.webp',
  },
];
