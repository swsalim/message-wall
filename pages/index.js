import { farewellsChetan as farewells } from '@config/farewells';
import { colors, containerClasses, blobClasses } from '@config/colors';
import Wrapper from '@layouts/Wrapper';
import Blob from '@components/Blob';
import Card from '@components/Card';

export default function Farewell() {
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
