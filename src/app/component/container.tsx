import { ContainerProps } from '../utilis/type';

const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="container mx-auto max-w-screen-xl py-12">
            {children}
        </div>
    );
};

export default Container;
