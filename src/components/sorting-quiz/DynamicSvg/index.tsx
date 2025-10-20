import dynamic from "next/dynamic";

interface DynamicSVGProps {
  name: string;
  alt: string;
  className?: string;
}

const DynamicSVG: React.FC<DynamicSVGProps> = ({ name, alt, className = '' }) => {
  const Image: any = dynamic(() => import(`../../../../public/assets/${name}.svg`));
  return <Image alt={alt} className={className} />;
};

export default DynamicSVG;
