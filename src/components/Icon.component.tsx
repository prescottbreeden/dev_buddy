import React from 'react';

type IconProps = {
  className: string;
  title: string;
}

const Icon: React.FC<IconProps> = (props) => {
  const { className, title } = props;

  const getIcon = () => {
    switch (title) {
      case 'play':
        return <path d="M12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM9.984 16.5v-9l6 4.5z"></path>;
      
      case 'pause':
        return <path d="M12.984 15.984v-7.969h2.016v7.969h-2.016zM12 20.016q3.281 0 5.648-2.367t2.367-5.648-2.367-5.648-5.648-2.367-5.648 2.367-2.367 5.648 2.367 5.648 5.648 2.367zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93zM9 15.984v-7.969h2.016v7.969h-2.016z"></path>;

      case 'add':
        return <path d="M18.984 11.016v-2.016h-3.984v-3.984h-2.016v3.984h-3.984v2.016h3.984v3.984h2.016v-3.984h3.984zM20.016 2.016q0.797 0 1.383 0.586t0.586 1.383v12q0 0.797-0.586 1.406t-1.383 0.609h-12q-0.797 0-1.406-0.609t-0.609-1.406v-12q0-0.797 0.609-1.383t1.406-0.586h12zM3.984 6v14.016h14.016v1.969h-14.016q-0.797 0-1.383-0.586t-0.586-1.383v-14.016h1.969z"></path>;

      case 'trash':
        return <path d="M18.984 3.984v2.016h-13.969v-2.016h3.469l1.031-0.984h4.969l1.031 0.984h3.469zM6 18.984v-12h12v12q0 0.797-0.609 1.406t-1.406 0.609h-7.969q-0.797 0-1.406-0.609t-0.609-1.406z"></path>;

      case 'checked':
        return <path d="M9.984 17.016l9-9-1.406-1.453-7.594 7.594-3.563-3.563-1.406 1.406zM18.984 3q0.844 0 1.43 0.586t0.586 1.43v13.969q0 0.844-0.586 1.43t-1.43 0.586h-13.969q-0.844 0-1.43-0.586t-0.586-1.43v-13.969q0-0.844 0.586-1.43t1.43-0.586h13.969z"></path>;

      case 'unchecked':
        return <path d="M18.984 3q0.797 0 1.406 0.609t0.609 1.406v13.969q0 0.797-0.609 1.406t-1.406 0.609h-13.969q-0.797 0-1.406-0.609t-0.609-1.406v-13.969q0-0.797 0.609-1.406t1.406-0.609h13.969zM18.984 5.016h-13.969v13.969h13.969v-13.969z"></path>;

      default:
        throw new Error('no icon matched');
    }
  }

  return (
    <svg
      className={className}
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {title && <title>{title}</title>}
      {getIcon()}
    </svg>
  );
};

export default Icon;
