import { cn } from '@/lib/utils';

interface Props {
  readonly title: string;
}

export const Header: React.FC<Props> = ({ title }) => {
  return (
    <div className='mx-auto max-w-screen-xl p-4 py-8'>
      <h1 className='mb-4'>
        <span
          className={cn(
            `font-extrabold
            text-transparent
            text-4xl
            bg-clip-text
            bg-gradient-to-r
            from-purple-400
            to-purple-600`,
          )}
        >
          {title}
        </span>
      </h1>
    </div>
  );
};
