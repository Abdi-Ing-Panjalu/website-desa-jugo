import Image from 'next/image';

const Card = ({ title, description, imageUrl }) => {
  return (
    <div className="w-64 h-64 rounded-lg overflow-hidden shadow-lg bg-white mx-4 flex flex-col">
      <div className="relative h-60 w-full">
        <Image
          src={imageUrl}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="w-full h-full"
        />

      </div>
      <div className="flex flex-col justify-between px-6 py-4 text-center h-full">
        <div className="font-bold text-2xl mb-2">{title}</div>
        <a href="#" className='text-xs text-right'>Telusuri Lebih Lanjut &gt;&gt;&gt;</a>

      </div>
    </div>
  );
};

export default Card;
