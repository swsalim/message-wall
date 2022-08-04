import { farewellsChetan as farewells } from '@config/farewells';
import { colors } from '@config/colors';
import Wrapper from '@layouts/Wrapper';
import Blob from '@components/Blob';
import Card from '@components/Card';

export default function Farewell() {
  const containerClasses = [
    'border-red-300 bg-red-100 text-red-900',
    'border-orange-300 bg-orange-100 text-orange-900',
    'border-lime-300 bg-lime-100 text-lime-900',
    'border-emerald-300 bg-emerald-100 text-emerald-900',
    'border-sky-300 bg-sky-100 text-sky-900',
    'border-cyan-300 bg-cyan-100 text-cyan-900',
    'border-purple-300 bg-purple-100 text-purple-900',
    'border-rose-300 bg-rose-100 text-rose-900',
    'border-indigo-300 bg-indigo-100 text-indigo-900',
  ];

  const blobClasses = [
    'fill-red-50',
    'fill-orange-50',
    'fill-lime-50',
    'fill-emerald-50',
    'fill-sky-50',
    'fill-cyan-50',
    'fill-purple-50',
    'fill-rose-50',
    'fill-indigo-50',
  ];

  const getRandomStyles = () => {
    const randomColorIndex = Math.floor(Math.random() * colors.length - 1) + 1;

    return {
      containerStyle: containerClasses[randomColorIndex],
      blobStyle: blobClasses[randomColorIndex],
    };
  };

  return (
    <>
      <Wrapper>
        <section className="mx-auto flex max-w-8xl flex-col px-4 py-8 sm:flex-row sm:gap-8 sm:px-6 lg:gap-16 lg:px-8">
          <div className="grid grid-cols-4 gap-4">
            {farewells.map((farewell, index) => {
              const { containerStyle, blobStyle } = getRandomStyles();

              return (
                <Card key={`${farewell.name}-${index}`} styling={containerStyle}>
                  <Blob styling={blobStyle} />
                  <p
                    className="mb-2 mt-0"
                    dangerouslySetInnerHTML={{ __html: farewell.message }}></p>
                  <span className="block text-left font-medium">{farewell.name}</span>
                </Card>
              );
            })}
          </div>
        </section>
      </Wrapper>
    </>
  );
}
