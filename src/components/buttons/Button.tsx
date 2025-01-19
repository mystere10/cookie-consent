import { Button } from '@heroui/react';
import './button.css';

export interface ButtonProps {
  type: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large'; // Your custom size prop
  label: string;
  onClick?: () => void;
}

const Btn = ({ type = 'primary', size = 'medium', label, ...props }: ButtonProps) => {
  const sizeMap: Record<'small' | 'medium' | 'large', 'sm' | 'md' | 'lg'> = {
    small: 'sm',
    medium: 'md',
    large: 'lg',
  };

  return (
    <Button
      type="button"
      size={sizeMap[size]}
      className={`w-44 p-4 rounded-lg font-medium  ${
        type === 'primary' ? 'text-white bg-primaryColor' : 'bg-secondaryColor text-secondaryColor'
      }`}
      {...props}
    >
      {label}
    </Button>
  );
};

export default Btn;
