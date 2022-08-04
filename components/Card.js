import classNames from 'classnames';

export default function Card({ styling, children }) {
  return (
    <div
      className={classNames(
        'prose prose-sm relative grid min-h-[300px] place-content-center overflow-hidden rounded-md border p-4',
        styling,
      )}>
      {children}
    </div>
  );
}
