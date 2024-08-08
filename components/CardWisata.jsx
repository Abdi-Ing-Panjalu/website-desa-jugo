import Image from 'next/image';
import Link from 'next/link';

const CardWisata = ({ title, imageUrl, link }) => {
  return (
    <Link href={link} passHref>
      <div className="w-80 rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            alt={title}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
        <div className="p-4">
          <div className="text-center text-lg font-semibold">{title}</div>
        </div>
      </div>
    </Link>
  );
};

export default CardWisata;
