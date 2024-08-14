import Image from 'next/image';
import Link from 'next/link';

const CardWisata = ({ imageUrl, link }) => {
  return (
    // <Link href={link} passHref>
      <div className="w-80 rounded overflow-hidden shadow-lg cursor-pointer">
        <div className="relative h-48">
          <Image
            src={imageUrl}
            layout="fill"
            objectFit="cover"
            className="rounded-t-lg"
          />
        </div>
      </div>
    // </Link>
  );
};

export default CardWisata;
