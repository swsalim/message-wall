import classNames from 'classnames';
import { farewells } from '@config/farewells';
import { colors } from '@config/colors';
import Wrapper from '@layouts/Wrapper';

export default function Farewell() {
  return (
    <>
      <Wrapper>
        <section className="mx-auto flex max-w-8xl flex-col px-4 py-8 sm:flex-row sm:gap-8 sm:px-6 lg:gap-16 lg:px-8">
          <div className="grid grid-cols-4 gap-4">
            {farewells.map((farewell, index) => {
              return (
                <div
                  key={`${farewell.name}-${index}`}
                  className={classNames(
                    'prose prose-sm relative grid min-h-[300px] place-content-center overflow-hidden rounded-md border p-4',
                    {
                      'border-red-300 bg-red-100 text-red-900': index % (colors.length - 1) == 1,
                      'border-orange-300 bg-orange-100 text-orange-900':
                        index % (colors.length - 1) == 2,
                      'border-lime-300 bg-lime-100 text-lime-900': index % (colors.length - 1) == 3,
                      'border-emerald-300 bg-emerald-100 text-emerald-900':
                        index % (colors.length - 1) == 4,
                      'border-sky-300 bg-sky-100 text-sky-900': index % (colors.length - 1) == 5,
                      'border-cyan-300 bg-cyan-100 text-cyan-900': index % (colors.length - 1) == 6,
                      'border-purple-300 bg-purple-100 text-purple-900':
                        index % (colors.length - 1) == 7,
                      'border-rose-300 bg-rose-100 text-rose-900': index % (colors.length - 1) == 8,
                      'border-indigo-300 bg-indigo-100 text-indigo-900':
                        index % (colors.length - 1) == 0,
                    },
                  )}>
                  <svg
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                    className={classNames('absolute inset-0 mix-blend-multiply', {
                      'fill-red-50': index % (colors.length - 1) == 1,
                      'fill-orange-50': index % (colors.length - 1) == 2,
                      'fill-lime-50': index % (colors.length - 1) == 3,
                      'fill-emerald-50': index % (colors.length - 1) == 4,
                      'fill-sky-50': index % (colors.length - 1) == 5,
                      'fill-cyan-50': index % (colors.length - 1) == 6,
                      'fill-purple-50': index % (colors.length - 1) == 7,
                      'fill-rose-50': index % (colors.length - 1) == 8,
                      'fill-indigo-50': index % (colors.length - 1) == 0,
                    })}>
                    <path
                      d="M37.9,-71.4C46.6,-60.7,49.3,-45.4,57.7,-32.7C66.1,-20,80.1,-10,79,-0.7C77.8,8.7,61.4,17.3,53.1,30.1C44.8,43,44.6,59.9,37.1,66.9C29.6,73.9,14.8,71,-0.9,72.5C-16.6,74.1,-33.2,80.2,-46.8,76.7C-60.5,73.3,-71.2,60.3,-75.7,45.9C-80.2,31.5,-78.6,15.8,-75.4,1.8C-72.2,-12.1,-67.5,-24.2,-60.9,-35C-54.4,-45.8,-45.9,-55.3,-35.4,-65.1C-25,-74.8,-12.5,-84.6,1.1,-86.5C14.6,-88.3,29.3,-82.2,37.9,-71.4Z"
                      transform="translate(100 100)"
                    />
                  </svg>
                  <p
                    className="mb-2 mt-0"
                    dangerouslySetInnerHTML={{ __html: farewell.message }}></p>
                  <span className="block text-right font-medium">{farewell.name}</span>
                </div>
              );
            })}
          </div>
        </section>
      </Wrapper>
    </>
  );
}
